import React from "react";

function Info({ data: { Icon, Lable, Value } }) {
  return (
    <div>
      <div className="place-items-center pt-7 rounded-md bg-white pb-8">
        <Icon className="rounded-full w-14 h-14 p-2 bg-purple-400 text-white " />
        <h1 className="mt-4 text-blue-950 font-bold text-xl"> {Lable} </h1>
        <p className="mt-2 text-blue-950"> {Value} </p>
      </div>
    </div>
  );
}

export default Info;
