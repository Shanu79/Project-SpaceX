import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";

export default function Launchpads() {
  useEffect(() => {
    getData();
  }, []);
  const [data, setData] = useState([]);
  const getData = () => {
    axios.get("https://api.spacexdata.com/v4/launchpads").then((res) => {
      console.log(res);
      setData(res.data);
    });
  };
  return (
    <>
    <h1 className="text-5xl font-bold flex justify-center sm:p-11 p-5 text-slate-200">SpaceX Launchpads</h1>
      <div className="sm:grid sm:grid-cols-3 gap-8 sm:mx-8 mx-4">
      {data.map((res) => {
        const { name, details, status, id, launches,images} = res;
        
        return (
          <Card className="mx-auto" key={id} name={name} data={details} status={status} launches={launches} img = {images.large[0]}/>
        );
      })}
      </div>
    </>
  );
}
