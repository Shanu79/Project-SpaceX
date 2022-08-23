import React from "react";

const card = (props) => {
  return (
    <div className="sm:w-2/5 mx-auto p-5 bg-slate-800 text-slate-400 rounded-md h-fit my-5 shadow-md">
      <img className="h-1/2 w-1/2 mx-auto py-5" src={props.img} alt="launchPads"/>
      <h1 className="text-xl font-bold p-3 text-slate-200">Name: {props.name}</h1>
      {/* {console.log(typeof props.data)} */}
      {props.data?(<p className="text-lg p-3">Details: {props.data}</p>):(<p className="text-lg p-3">No details Available</p>)}
      <p className="p-3 font-semibold">Launch Date: {props.date}</p>
    </div>
  );
};

export default card;
