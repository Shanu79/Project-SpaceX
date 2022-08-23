import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import LaunchCard from "./LaunchCard";
const Launches = () => {
  const { id } = useParams();
  useEffect(() => {
    getData();
  },[]);
  const [data, setData] = useState();
  const getData = async () => {
    await axios
      .get(`https://api.spacexdata.com/v4/launches/${id}`)
      .then((res) => {
        //console.log(res);
        setData(res.data);
      });
  };
  return (
    <div className="">
      {data && (
        <LaunchCard
          className="mx-auto"
          key={data.id}
          name={data.name}
          data={data.details}
          date={data.date_utc}
          img={data.links.patch.large}
        />
      )}
    </div>
  );
};

export default Launches;
