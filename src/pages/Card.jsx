import React from "react";
import { NavLink } from "react-router-dom";
const Card = (props) => {
  return (
    <div className="mx-auto p-5 bg-slate-800 text-slate-400 rounded-md h-fit my-5 shadow-md">
      <img className="h-fit w-fit pb-5" src={props.img} alt="rocket" />
      <h1 className="text-xl font-bold p-3 text-slate-200">{props.name}</h1>
      <p className="text-lg p-3">{props.data}</p>
      {props.status==="active"?(<p className="p-2 text-green-500 font-semibold">Status: {props.status}</p>) : (<p className="p-2 text-red-500 font-semibold">Status: {props.status}</p>)}
      {!props.launches.length ? (
        <h1 className="px-2 py-3 text-lg text-slate-200">No Launch Available</h1>
      ) : (
        <div className="">
          <h1 className="px-2 text-lg font-semibold text-slate-200">Top 3 launches: </h1>

          {props.launches.slice(0, 3).map((launch, index) => {
            return (
              <NavLink to={`/${launch}`} key={launch}>
                <p className="p-2 font-bold hover:text-zinc-200">
                  Launch {index + 1}
                </p>
              </NavLink>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Card;
