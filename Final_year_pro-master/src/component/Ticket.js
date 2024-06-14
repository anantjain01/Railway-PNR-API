import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Resrtaurants from "./Resrtaurants";

const Ticket = () => {
  const [data, setData] = useState([]);
  const [pass, setPass] = useState([]);
  // const [PNR, setPNR] = useState();

  let { pnr } = useParams();

  const fun = async () => {
    console.log(pnr);
    const { data } = await axios.get(`http://localhost:4575/api/pnr/${pnr}`);
    setData(data);
    console.log(data);
    setPass(data.PassengerStatus[0]);
    console.log(data.PassengerStatus[0]);
  };

  useEffect(() => {
    fun();
  }, []);
  return (
    <div className="w-screen h-screen flex justify-center bg-black">
      <div className="p-4 flex  flex-col justify-center items-center">
        <h1 className="text-4xl font-semibold bg-white p-2 rounded-lg">
          PNR STATUS
        </h1>
        <table className="bg-white m-4 rounded-xl">
          <tr className="border-2 w-11/12 ">
            <td className="w-[200px] ">
              <h1 className="text-md">Train </h1>
            </td>
            <td className="w-[200px] ">
              <h1 className="text-md">{data.TrainNo}</h1>
            </td>
          </tr>
          <tr className="border-2 w-11/12 ">
            <td>
              <h1 className="text-md">PNR </h1>
            </td>
            <td>
              <h1 className="text-md">{data.Pnr}</h1>
            </td>
          </tr>
          <tr className="border-2 w-11/12 ">
            <td>
              <h1 className="text-md">Train Name</h1>
            </td>
            <td>
              <h1 className="text-md">{data.TrainName}</h1>
            </td>
          </tr>
          <tr className="border-2 w-11/12 ">
            <td>
              <h1 className="text-md">Status</h1>
            </td>
            <td>
              <h1 className="text-md">{pass.BookingStatusNew}</h1>
            </td>
          </tr>
          <tr className="border-2 w-11/12 ">
            <td>
              <h1 className="text-md">Class</h1>
            </td>
            <td>
              <h1 className="text-md"> {data.Class}</h1>
            </td>
          </tr>
          <tr className="border-2 w-11/12 ">
            <td>
              <h1 className="text-md">Coach </h1>
            </td>
            <td>
              <h1 className="text-md">{pass.BookingCoachId}</h1>
            </td>
          </tr>
          <tr className="border-2 w-11/12 ">
            <td>
              <h1 className="text-md">Berth</h1>
            </td>
            <td>
              <h1 className="text-md">{pass.Berth} </h1>
            </td>
          </tr>
          <tr className="border-2 w-11/12 ">
            <td>
              <h1 className="text-md">Quota </h1>
            </td>
            <td>
              <h1 className="text-md">{data.Quota} </h1>
            </td>
          </tr>
          <tr className="border-2 w-11/12 ">
            <td>
              <h1 className="text-md">Date</h1>
            </td>
            <td>
              <h1 className="text-md">{data.SourceDoj}</h1>
            </td>
          </tr>
          <tr className="border-2 w-11/12 ">
            <td>
              <h1 className="text-md">From</h1>
            </td>
            <td>
              <h1 className="text-md">
                {data.From} {data.DepartureTime}
              </h1>
            </td>
          </tr>
          <tr className="border-2 w-11/12 ">
            <td>
              <h1 className="text-md">To</h1>
            </td>
            <td>
              <h1 className="text-md">
                {data.To} {data.ArrivalTime}{" "}
              </h1>
            </td>
          </tr>
          <tr className="border-2 w-11/12 ">
            <td>
              <h1 className="text-md">Duration</h1>
            </td>
            <td>
              <h1 className="text-md"> {data.Duration} Hrs</h1>
            </td>
          </tr>
          <tr className="border-2 w-11/12 ">
            <td>
              <h1 className="text-md">Passenger</h1>
            </td>
            <td>
              <h1 className="text-md">{data.PassengerCount}</h1>
            </td>
          </tr>
          <tr className="border-2 w-11/12 ">
            <td>
              <h1 className="text-md">Platform No.</h1>
            </td>
            <td>
              <h1 className="text-md">{data.ExpectedPlatformNo}</h1>
            </td>
          </tr>
        </table>
        <Link to={`/${data.Pnr}/outlets`} className="text-black bg-white p-2 hover:bg-cyan-200 underline underline-offset-4 rounded-md">Check Intermediate Station</Link>
      </div>
    </div>
  );
};

export default Ticket;
