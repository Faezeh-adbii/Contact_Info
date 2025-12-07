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

function ContactInfo({className}) {
  return (
    <div className= {` px-52 pt-12 xl:px-32 xl:pt-20 ${className}  ` }>
      <ul className="  grid  grid-cols-New-ContactInfo gap-10  ">
        {Datas.map((Data , index) => (
          <li key={index} >
            <Info data={Data} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ContactInfo;
