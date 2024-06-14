const express = require("express");
const puppeteer = require("puppeteer");
const memoryCache = require("memory-cache");
const rateLimit = require("express-rate-limit");
require("dotenv").config();

const PORT = process.env.PORT || 4575;
const app = express();

app.use(express.json());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});

const cacheMiddleware = (req, res, next) => {
  const cacheKey = req.params.pnrVal;
  const cachedData = memoryCache.get(cacheKey);

  if (cachedData) {
    res.status(200).json(cachedData);
  } else {
    res.sendResponse = res.json;
    res.json = (body) => {
      memoryCache.put(cacheKey, body, 20 * 60 * 1000); // Cache for 20 minutes
      res.sendResponse(body);
    };
    next();
  }
};

const limiter = rateLimit({
  windowMs: 10 * 60 * 1000,
  max: 100,
  handler: (req, res) => {
    res
      .status(429)
      .json({ message: "Too many requests, please try again later." });
  },
});

app.use("/api/pnr/:pnrVal", limiter, cacheMiddleware);

app.get("/api/pnr/:pnrVal", async (req, res) => {
  try {
    const pnr = req.params.pnrVal;

    if (!isValidPNR(pnr))
      return res.status(400).json({ message: "Invalid PNR format" });

    const data = await getPnrInfo(pnr);

    if (!data) return res.status(404).json({ message: "PNR not found" });

    console.log(data);
    res.status(200).json(data);
  } catch (error) {
    console.error("Error: ", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

const getPnrInfo = async (pnr) => {
  try {
    const fetchUrl = process.env.FETCH_URL + pnr;
    const browser = await puppeteer.launch({
      headless: true,
    });
    const page = await browser.newPage();
    await page.goto(fetchUrl, { waitUntil: "domcontentloaded" });
    const info = await page.evaluate(() => data);
    await browser.close();

    return info;
  } catch (error) {
    throw new Error(`Error scraping data: ${error.message}`);
  }
};

const filterData = (data) => {
  const propertiesToRemove = [
    "ShowBlaBlaAd",
    "ShowCab",
    "Ads",
    "InformationMessage",
    "TrainStatus",
    "WebsiteEvents",
    "PnrAlternativeAdPosition",
    "WebsiteAds",
    "SponsoredButtons",
    "BookingId",
    "BookingFare",
    "HasPantry",
    "GroupingId",
    "OptVikalp",
    "VikalpData",
    "VikalpTransferred",
    "VikalpTransferredMessage",
    "Rating",
    "FoodRating",
    "PunctualityRating",
    "CleanlinessRating",
    "RatingCount",
    "BookedInConfirmtkt",
    "BookedByUser",
    "FlightBannerUrl",
  ];
  for (const property of propertiesToRemove) {
    delete data[property];
  }
  return data;
};

app.get("/api/:pnrVal/outlets", async (req, res) => {
  try {
    const pnr = req.params.pnrVal;
    const data = await getRestInfo(pnr);
    console.log(data);
    res.status(200).json(data);
  } catch (error) {
    console.error("Error: ", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

const getRestInfo = async (pnr) => {
  try {
    console.log(pnr);
    const fetchUrl = process.env.RESTAURANTS_URL + "pnr?pnr=" + pnr;
    console.log(fetchUrl);
    const browser = await puppeteer.launch({
      headless: true,
    });
    const page = await browser.newPage();
    await page.goto(fetchUrl, { waitUntil: "domcontentloaded" });

    const info = await page.evaluate(() => {
      const restaurantCards = Array.from(
        document.querySelectorAll(".card.stcard")
      ); // Selecting all restaurant cards
      const restaurantData = restaurantCards.map((card) => {
        // const name = card.querySelector('.card-title').textContent.trim(); // Extracting restaurant name
        const arrivalDate = card.querySelector(".card-header b").textContent.trim(); // Extracting arrival date
        const x = card.querySelector(".card-header .pull-right").textContent.trim(); // Extracting arrival date
        // const imageSrc = card.querySelector('.col-md-10 img').getAttribute('data-src'); // Extracting image URL
        return { arrivalDate ,x}; // Returning an object with extracted data
      });
      return restaurantData;
    });
    console.log(info); 
    await browser.close();
    return info; 
  } catch (error) {
    throw new Error(`Error scraping data: ${error.message}`);
  }
};

app.listen(PORT, () => {
  console.log(`Server listening on PORT: ${PORT}`);
});
const isValidPNR = (pnr) => /^\d{10}$/.test(pnr);
