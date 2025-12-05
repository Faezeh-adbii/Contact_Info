import React from "react";
import Info from "./Info";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { FaFax } from "react-icons/fa6";

const Datas = [
  {
    Icon: FaLocationDot,
    Lable: "Location",
    Value:
      "245 Noavaran Blvd, 3rd Floor Ariana",
  },
  { Icon: FaPhone, Lable: "Phone", Value: "0912 456 7890" },
  { Icon: MdEmail, Lable: "Email", Value: "info@demo-company.com" },
  {
    Icon: FaFax,
    Lable: "Fax",
    Value: "+98 21 4455 6677"
  },
];

function ContactInfo() {
  return (
    <div className=" mx-20 pt-14 px-10">
      <ul className=" grid  grid-cols-New-ContactInfo gap-10 ">
        {Datas.map((Data, index) => (
          <li>
            <Info key={index} data={Data} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ContactInfo;
