import React from "react";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import { MdPerson2 } from "react-icons/md";
import { BsPeopleFill } from "react-icons/bs";

function ContactItem({
  Forms: {id, Name, Lastname, Email, Phone },
  deleteHandler,
}) {
  return (
    <div className="grid grid-cols-5  bg-purple-300/45 py-2 m-3 rounded-lg">
      <p className="text-lg text-slate-700 flex justify-center">
        <MdPerson2 className=" mt-1 text-2xl mr-3 text-purple-500 " />
        {Name}
      </p>
      <p className="text-lg text-slate-700 flex justify-center">
        <BsPeopleFill className=" mt-1 text-2xl  mr-3 text-purple-500 " />
        {Lastname}
      </p>
      <p className="text-lg text-slate-700 flex justify-center ">
        <MdEmail className="text-2xl mt-1 mr-3 text-purple-500 " />
        {Email}
      </p>
      <p className="text-lg text-slate-700 flex justify-center  ">
        <FaPhone className="text-xl mt-1 mr-3 text-purple-500 " />
        {Phone}
      </p>
      <button className=" place-items-center" onClick={() => deleteHandler(id)}>
        <MdDelete className="text-2xl mt-1 hover:scale-110 hover:text-red-500 text-purple-500   hover:shadow-[#ab589985_0px_7px_29px_0px] hover:rounded-full " />
      </button>
    </div>
  );
}

export default ContactItem;
