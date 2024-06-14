import React, { useState } from "react";
import banner from ".././Assert/banner.webp";
import a from ".././Assert/g20-logo.png";
import b from ".././Assert/irctc-logo-vertical.png";
import c from ".././Assert/logo-eCatering.png";
import { FaTrain, FaSearch } from "react-icons/fa";

import { Link } from "react-router-dom";

const Home = () => {
  const [pnr, setPnr] = useState("");

  return (
    <div>
      <nav>
        <div className="nav flex justify-around items-center bg-white">
          <div className="logo flex">
            <img src={a} className="p-4" />
            <img src={b} className="p-4" />
            <img src={c} className="p-4" />
          </div>
          <div className="flex">
            <a href="" className="account text-lg font-bold ">
              Account
            </a>
          </div>
        </div>
      </nav>
      <section>
        <div className="a relative  flex  justify-center items-center w-screen">
          <img src={banner} className="img opacity-95 -scale-x-125 " />
        </div>
        <div className="absolute top-[220px] right-80 flex flex-col">
          <h2 className="text-white text-4xl font-extrabold  ">
            Get restaurant food delivered right at your seat
          </h2>
          <div className="flex flex-col justify-center items-center m-auto shadow-lg p-10">
            <div className="relative">
              <FaSearch className="absolute bg-white  text-gray-700 text-lg font-bold bottom-7 left-[-20px]" />
              <input
                className="m-2 h-14 w-80 p-4"
                type="search"
                placeholder="Search Train or Station to explore"
              ></input>
            </div>
            <div className="relative">
              <FaTrain className="absolute bg-white  text-gray-700 text-lg font-bold bottom-7 left-[-20px]" />
              <div>
                <input
                  className="relative m-2 h-14 w-80 p-4"
                  type="text"
                  placeholder="Enter PNR to order "
                  onChange={(e) => setPnr(e.target.value)}
                ></input>
                <Link to={`/${pnr}`}>
                  <button className="absolute  left-[250px] bottom-[15px]  text-white bg-orange-400 p-2 font-bold ">
                    Submit
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="flex justify-center items-center p-10">
        <div className="p-10 text-left  ">
          <p>
            IRCTC eCatering is the perfect companion for your train journeys. It
            is the best way to order food in train. With the eCatering website
            <a
              href="https://www.ecatering.irctc.co.in/"
              className="text-orange-500"
            >
              https://www.ecatering.irctc.co.in
            </a>
            and the Food on Track official app, you can order food in train
            online. You can then get fresh, delicious &amp; hygienic food from
            popular brands &amp; restaurants delivered directly to your seat!
            You can also feast on your favourite dishes or try out
            mouth-watering local cuisines across your travel route.
          </p>
          <br />
          <h4 className="text-2xl font-semibold">
            Food Delivery on Train with IRCTC eCatering
          </h4>
          <p>
            You can order food in train online with our official website or Food
            on Track app and get it right to your seat at the station of your
            choice! Isn’t that amazing?
          </p>
          <p>
            Get excellent and efficient food delivery on train service with this
            revolutionary mobile app. All you need to do is enter your PNR
            number to view the available restaurants &amp; food options for your
            journey &amp; place your order. You can also explore the food
            options at a station or for a train, but your PNR number will be
            required to place your order safely.
          </p>
          <p>
            This efficient method of food ordering in train promises not only
            delicious food at your seat but also a varied and vast food menu
            from the widest nexus of brands and restaurants, making your train
            journey a lot more enjoyable. After all, “Good Food Makes For A Good
            Journey”.
          </p>
          <br />
          <h4 className="text-2xl font-semibold">
            Benefits of placing an online food order in train with IRCTC
            eCatering
          </h4>
          <ul>
            <li>
              This is the official IRCTC website and app. Hence it comes with
              the trust of IRCTC, offering reliable &amp; well-established
              service.
            </li>
            <li>Freedom from the hassle of carrying food.</li>
            <li>
              The widest hub of restaurants and brands offers myriaddelicious
              and hygienic meal options for your train journey
            </li>
            <li>
              Eliminates the risk of missing the train while finding food at
              stations.
            </li>
            <li>
              Provides you with quality food at reasonable and affordable
              prices, making it the most consumer-friendly choice.
            </li>
            <li>Auto cancellation of an order in case PNR gets cancelled.</li>
          </ul>
          <br />
          <h4 className="text-2xl font-semibold">
            Order food in train from the widest hub of food brands &amp;
            restaurants
          </h4>
          <p>
            With numerous food brands, restaurants &amp;{" "}
            <a
              href="https://www.ecatering.irctc.co.in/blog/authorized-ecatering-irctc-partners-for-food-delivery-in-train/"
              className="text-orange-500"
            >
              authorised eCatering aggregators partnering with IRCTC eCatering
            </a>
            , passengers have the option to choose from the widest variety of
            dishes &amp; cuisines. These include mouth-watering Biryanis, cheesy
            Pizzas, steamy South Indian delicacies, and global cuisines such as
            Chinese and Continental. You can also feast on the local cuisines
            from wherever you’re travelling. For instance, you can get your
            favourite food in Rajdhani Express with the help of IRCTC eCatering.
            You don’t need to lug around heavy tiffin boxes or worry about
            unhygienic stall-food while on your journey.
          </p>
          <p>
            Dominos, Haldirams, Saravana Bhavan, Faasos, Biryani Blues, Behrouz
            Biryani, etc., are some of the brands &amp; restaurant chains you
            may order from.
          </p>
          <br />
          <h4 className="text-2xl font-semibold">
            Service availability at 300+ major &amp; minor railway stations
          </h4>
          <p>
            You can order food in train online at over 300 railway stations in
            India.
          </p>
          <p>
            Some of the major stations where eCatering is available include
            Mumbai Central (BCT), Mathura Jn (MTJ), Chhatrapati Shivaji Terminal
            (CST), New Delhi Railway Railway Station (NDLS), Nagpur (NGP), Old
            Delhi Railway Station (DEL), Bangalore City Junction (SBC), Itarsi
            Jn (ET), Chennai Central (MAS), Kanpur (CNB), Ratlam Jn (RTJ),
            Allahabad Junction (ALD), Vijayawada Jn (BZA), Varanasi (BSB),
            Lucknow Nr (LKO) and many more! We are continually adding new
            stations as new restaurants partner with us.
          </p>
          <p>
            It is as easy, user-friendly, and quick to place an order for food
            on a train journey as it is to book tickets using the IRCTC app and
            website. Passengers can find the official app, IRCTC eCatering –
            Food on Track, or access the website directly at{" "}
            <a
              href="https://www.ecatering.irctc.co.in/"
              className="text-orange-500"
            >
              www.ecatering.co.in
            </a>
            . It is the best train food delivery app for passengers. It is also
            possible to place an IRCTC food order online over the phone during
            lengthy train travels. To do so, simply dial 1323.
          </p>
          <br />
          <h4 className="text-2xl font-semibold">
            Food Delivery on Train with IRCTC eCatering Food on Track app
          </h4>
          <p>
            Install the IRCTC eCatering Food On Track app for food delivery in
            train. You can order food in train online from the best brands &amp;
            restaurants with our website at
            <a
              href="https://www.ecatering.irctc.co.in/"
              className="text-orange-500"
            >
              https://www.ecatering.irctc.co.in/
            </a>
            or the “Food on Track” mobile app, and get it directly at your seat
            at the railway station of your choice. Isn’t that amazing?
          </p>
          <p>
            IRCTC eCatering provides you with the desired online food delivery
            experience in train with options ranging from Thalis, Non-veg
            options such as Chicken, Fish or Egg dishes, Pizzas, Burgers,
            Chinese, Snacks, Combos, South Indian meals, Biryanis, to local
            cuisines from all over India. You can also get Jain, pure-vegetarian
            and Sattvic / Satvik / Sattvik / Sattwic food options.Here are some
            of the most popular food items ordered on eCatering:
          </p>
          <ol>
            <li>Thali </li>
            <li>Pizza </li>
            <li>Biryani </li>
            <li>Wrap</li>
            <li>Aloo Paratha </li>
            <li>Idli</li>
            <li>Dosa </li>
            <li>Rice Bowl </li>
            <li>Sandwich </li>
            <li>Dal Khichdi</li>
          </ol>
          <p>
            <strong>
              Apart from the above, here are the top non-vegetarian food items
              requested by customers on eCatering:
            </strong>
          </p>
          <ol>
            <li>Non-Veg Pizza</li>
            <li>Biryani</li>
            <li>Non-Veg Thali</li>
            <li>Bread Omelette</li>
            <li>Chicken Curry</li>
            <li>Egg Curry</li>
            <li>Fish Curry</li>
          </ol>
          <p>
            IRCTC eCatering Food on Track app is also the best food delivery in
            train app. Get the most out of your train trips by ordering your
            favourite meals! We believe in serving fresh, hygienic and
            lip-smacking dishes from the best FSSAI-certified restaurants &amp;
            brands at over 300 stations on Indian railway trains.
          </p>
          <p>Just SWIPE, SELECT and ORDER. It’s that easy!</p>
          <br />
          <h4 className="text-2xl font-semibold">
            Unparalleled features of the Food on Track app
          </h4>
          <p>
            The app is designed to provide the most satisfying food delivery
            experience on trains. With the app, you can get the following:
          </p>
          <ul>
            <li>Quick and easy access</li>
            <li>Order status updates</li>
            <li>Works well on trains</li>
          </ul>
          <p>
            Our train food delivery app also includes other helpful features
            such as one-tap calling, PNR auto-pasting, reduced data consumption,
            quicker load times, and smooth transitions! IRCTC’s new eCatering
            app for food delivery on trains improves passengers’ train dining
            experiences by offering a greater variety of cuisines and higher
            standards of food preparation &amp; delivery.
          </p>
          <br />
          <h4 className="text-2xl font-semibold">
            Order food in train online for “Bulk or Group order service”
          </h4>
          <p>
            Ordering food on train for groups or in bulk with the most
            incredible prices is also an option with eCatering. Passengers
            travelling in groups of 15 or more people can request this special
            service. Get the best food options and pricing informed after
            discussion for breakfast, lunch, or dinner for office teams,
            students, marriage groups, vacation trips or Jain food and Sattvic
            meals for religious trips and yatras. You can also get delivery of
            customised meals as well as reasonable prices for such large orders.
          </p>
          <p>
            It’s crucial to be aware of unauthorised suppliers that claim to
            have an affiliation with IRCTC eCatering but don’t.
          </p>
          <br />
          <h4 className="text-2xl font-semibold">
            “Order online food by Whatsapp service” by IRCTC eCatering
          </h4>
          <p>
            IRCTC has started utilising WhatsApp as a method of interacting with
            passengers in order to facilitate the placement of orders for its
            well-known and reputable eCatering services. A dedicated Business
            WhatsApp line number – +91-8750001323 is set up for this purpose.
          </p>
          <p>
            This new addition to the repertoire is a step towards making
            eCatering services more customer-centric, convenient and easy.
            Passengers can order online food by Whatsapp using the Whatsapp
            number +91-8750001323.
          </p>
          <br />
          <h4 className="text-gray-600 font-bold">
            Why should you choose IRCTC eCatering online railway food delivery
            services?
          </h4>
          <p>
            Typically, meals on train journeys are considered bland and
            uninteresting, which people eat more out of need than out of desire.
            You can also get meals at any of the stations’ many public food
            stalls. However, to do so will require you to leave your berth and
            valuables unattended. And also face the risk of missing your train.
            Moreover, getting hygienic food is always a concern with open stalls
            &amp; vendors on platforms.
          </p>
          <p>
            But IRCTC eCatering delivers fresh, hygienic meals from a range of
            popular brands &amp; restaurants without compromising taste or
            affordability. As a result, your journey will be the perfect blend
            of flavorful indulgence and cosy convenience.
          </p>
          <p>
            When you embark on a rail journey or pilgrimage in India, you no
            longer have to carry a cumbersome dabba full of food from home.
            Instead, you can order delicious meals from top restaurants,
            aggregators and food partners and have them delivered to your train
            seat. Whether you’re in the mood for a popular Indian dish or
            something fancier from the continental or Italian kitchen, eCatering
            will bring you an array of tantalising treats without you having to
            leave your seat on the train.{" "}
          </p>
          <br />
          <h4 className="text-2xl font-semibold">
            What to expect in the upcoming years?
          </h4>
          <p>
            Already, passengers are raving about the eCatering system, praising
            the tasty food, innovative offerings, and efficient service they
            have received. IRCTC’s ability to offer food from popular brands and
            restaurants aboard trains is a crowning achievement in its long
            history of exceptional passenger service.
          </p>
          <p>
            With newer restaurant partners joining the roster and eCatering
            services provision at more &amp; more stations, online food delivery
            at the train seat by eCatering is becoming a key meal option for
            train passengers. It is set to become the flagship food option for
            Indian Railways.{" "}
          </p>
          <p>
            Log in to the website, install the Food on Track app or call 1323,
            order food in train; get your meal right to your seat and enjoy!
          </p>
          <br />
          <h4 className="text-2xl font-semibold">
            IRCTC eCatering – Delivering happiness to your train seats!
          </h4>
          <br />
          <h4 className="text-2xl font-semibold">FAQs</h4>
          <br />
          <p className="text-gray-600 font-bold">
            Is it possible to place an order for a specific meal at a specific
            time during the journey?
          </p>
          <p>
            Yes, it is. You can do so by logging in to the IRCTC eCatering
            website or installing the Food on Track app, or calling 1323.
          </p>
          <p className="text-gray-600 font-bold">
            Can I choose the restaurant from which I want to order my food?
          </p>
          <p>
            Yes, you can. Once you submit your PNR number, the website or app
            will show you a list of all the brands and restaurants providing
            their services on your route at different stations. You may then
            pick from those available brands &amp; restaurants.
          </p>
          <p className="text-gray-600 font-bold">
            Is it possible to make special requests or modifications to the
            dishes that I order?
          </p>
          <p>
            Passengers travelling in large groups can request Group food service
            to get the best deals when ordering food in bulk for 15 or more
            passengers. You can request customised menus and prices through this
            service by submitting your request from the app or visiting{" "}
            <a href="https://www.ecatering.irctc.co.in/callback">
              https://www.ecatering.irctc.co.in/callback
            </a>
            .
          </p>
          <p className="text-gray-600 font-bold">How do I pay for my order?</p>
          <p>
            There are a number of options through which you can pay for your
            order. These include UPI, wallets, debit card, credit card, net
            banking &amp; even Pay on delivery.
          </p>
          <p className="text-gray-600 font-bold">
            Can I cancel or change my order once it has been placed?
          </p>
          <p>
            One can generally book and cancel eCatering orders from the time of
            booking a train ticket. The time required to deliver an order
            entirely depends on the preparation time requested by the
            restaurant. Hence, you need to keep that time frame in mind when
            wanting to cancel your order. Also, you cannot change an order once
            it has been placed. If needed, you may cancel that order and place
            another one.
          </p>
          <p className="text-gray-600 font-bold">
            What happens if the food I receive is not of good quality or if my
            order is not delivered as requested?
          </p>
          <p>
            While the partner restaurants try their best to ensure the best
            experience for you, in case you are not happy withthe service or the
            food offered, you can lodge a complaint through the official
            eCatering website, Food on Track app or by calling 1323 within 5
            days of the delivery time. Complaints can be submitted after 15
            minutes of the delivery time of your order.
          </p>
          <p className="text-gray-600 font-bold">
            Is it possible to pre-order food for a future journey?
          </p>
          <p>
            Yes, it is. You can place an online food order via eCatering as soon
            as you have a valid PNR number. There is no limit to the
            advancebooking period.
          </p>
          <p className="text-gray-600 font-bold">
            Are there any discounts or promotions available for online food
            orders on IRCTC eCatering?
          </p>
          <p>
            In the extremely unfortunate or rare case of no-delivery of your
            order, we’ll give you a discount couponfor use on the next
            order,besides the refund of any online payment. However, customers
            first need to raise a complaint using the app, website or calling
            1323 to facilitate this. Apart from this, any other discoun/coupon
            is not supported on the official eCatering app &amp; website right
            now.
          </p>
          <p className="text-gray-600 font-bold">
            Is it possible to order food for multiple passengersin the same
            transaction?
          </p>
          <p>
            Yes, it is absolutely possible. There is no limit to the number of
            passengers for whom you can place an order. However, there is a
            provision called “Group order service.Passengers travelling in large
            groups can request this special service to get delivery of
            customised meals at reasonable prices.
          </p>
          <p className="text-gray-600 font-bold">
            How do I place an order for food online on a train through IRCTC
            eCatering?
          </p>
          <p>
            You can do so through the official eCatering website at
            <a herf="https://www.ecatering.irctc.co.in/">
              ecatering.irctc.co.in,
            </a>{" "}
            via the Food on Track mobile app orby calling 1323.
          </p>
          <p>
            <strong>IRCTC eCatering misspelled</strong>
          </p>
          <br />
          <p>“IRCTC eCatering” is often misspelled by online usersas:</p>
          <ol>
            <li>IRTCC eCatering</li>
            <li>IRCT eCatering </li>
            <li>IRCTC eCataring</li>
            <li>IRCTC eCateringg</li>
            <li>IRCTC eCaterinng</li>
            <li>IRCTC ecatring</li>
          </ol>
          <p>
            <strong>Food on Track misspelled</strong>
          </p>
          <p>“Food on Track” is often misspelled by online users as:</p>
          <ol>
            <li>Fod on Track</li>
            <li> Food on Trac</li>
            <li>Food on Trak</li>
            <li>Fud on Track</li>
            <li>Foud on Track</li>
            <li>Food an Track</li>
            <li>Food on Trck</li>
            <li>Fod on Trac</li>
            <li>Food n Track</li>
            <li>Food o Track</li>
          </ol>
        </div>
      </section>
    </div>
  );
};

export default Home;
