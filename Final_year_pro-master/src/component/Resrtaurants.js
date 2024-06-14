import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Resrtaurants = () => {
  const [rest, setRest] = useState([]);
  let { pnr } = useParams();

  const fun1 = async () => {
    console.log("PNR REST : ", pnr);
    const data = await axios.get(`http://localhost:4575/api/${pnr}/outlets`);
    console.log("Data1 : ", data.data);
    setRest(data.data);
  };
  useEffect(() => {
    fun1();
  }, []);
  return (
    <div className="mx-auto">
      <div className="h-fit w-[300px] mx-auto bg-cyan-200">
        <h1 className="text-2xl font-bold ">Intermediate Stations</h1>
        {rest &&
          rest.map((item, keys) => {
            return (
              <div keys={keys} className="p-2">
                <h1 className="text-left text-lg font-semibold">
                  {keys + 1}) {item.arrivalDate}
                </h1>
                <h1 className="text-left text-sm pl-6">{item.x}</h1>
                <h1 className="text-left text-sm pl-6">{item.name}</h1>
                {/* <img src={item.imageSrc}/> */}
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Resrtaurants;
