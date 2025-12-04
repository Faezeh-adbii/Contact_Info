import React from "react";

function Info({ data: { Lable, Value } }) {
  return (
    <div>
      <div>
          <h1> {Lable} </h1>
          <p> {Value} </p>
      </div>
    </div>
  );
}

export default Info;
