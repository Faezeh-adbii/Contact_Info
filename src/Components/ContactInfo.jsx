import React from "react";
import Info from "./Info";

const Datas = [
  {
    Lable: "Location",
    Value:
      "245 Noavaran Blvd, 3rd Floor Ariana Building, Unit 31 District 5, Tehran, Iran – 14653",
  },
  { Lable: "Phone", Value: "0912 456 7890" },
  { Lable: "Email", Value: "info@demo-company.com" },
];

function ContactInfo() {
  return (
    <div>
      <ul className=" ">
        {Datas.map((Data , index ) => (
          <li>
            <Info key={index} data={Data} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ContactInfo;
