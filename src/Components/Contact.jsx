import { useState } from "react";
import ContactList from "./ContactList";
import { v4 } from "uuid";
import inputs from "../Contants/inputs";
import Swal from "sweetalert2";

function Contact() {
  const [Forms, setForms] = useState([]);
  const [Alert, setAlert] = useState("");
  const [Form, setForm] = useState({
    Name: "",
    Lastname: "",
    Email: "",
    Phone: "",
  });

  //changeHandler
  const changeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setForm((Form) => ({ ...Form, [name]: value }));
  };

  //submitHandler
  const submitHandler = () => {
    if (!Form.Name || !Form.Lastname || !Form.Email || !Form.Phone) {
      setAlert("Please enter valid data!");
      return;
    }
    setAlert("");
    const NewForm = { ...Form, id: v4() };
    setForms((Forms) => [...Forms, NewForm]);
    setForm({
      id: "",
      Name: "",
      Lastname: "",
      Email: "",
      Phone: "",
    });
  };

const deleteHandler = (id) => {
  Swal.fire({
    title: "آیا مطمئن هستید؟",
    text: "این مخاطب حذف خواهد شد و قابل بازگشت نیست!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#d33",
    cancelButtonColor: "#3085d6",
    confirmButtonText: "بله، حذف شود",
    cancelButtonText: "لغو",
  }).then((result) => {
    if (result.isConfirmed) {
      setForms((prevForms) => prevForms.filter((Form) => Form.id !== id));
      Swal.fire("حذف شد!", "مخاطب با موفقیت حذف شد.", "success");
    }
  });
};

  return (
    <div className="place-items-center pt-20 xl:pt-52 ">
      <form className="bg-white/70 shadow-2xl shadow-slate-500 xl:pt-24   p-10 pt-6 w-[90%]  md:w-[80%] lg:w-[70%] xl:w-[60%] xl:h-[400px] rounded-lg ">
        <p className="text-center mb-6 font-bold text-2xl text-blue-950">
          Contact US
        </p>
        <div className=" grid grid-cols-[repeat(auto-fit,minmax(315px,1fr))]  text-center pt-4  ">
          {inputs.map((input, index) => (
            <input
              className=" mx-6 mb-8 p-3 ring-2 ring-slate-200  rounded-md focus:outline-none focus:outline-slate-300  focus:scale-[1.002] transition-all focus:ring-4 focus:ring-slate-300  placeholder:font-medium duration-300"
              key={index}
              type={input.type}
              name={input.name}
              placeholder={input.placeholder}
              value={Form[input.name]}
              onChange={changeHandler}
            />
          ))}
        </div>
        <p className="text-center">
          <button
            type="button"
            className="w-1/2 lg:w-1/3 h-10 rounded-lg font-medium text-black bg-gradient-to-r from-purple-300 via-purple-400 to-purple-500 hover:shadow-[#af78a585_0px_7px_29px_0px] hover:text-white"
            onClick={submitHandler}
          >
            SUBMIT
          </button>
        </p>
      </form>
      <div className="text-center w-[60%] ">
        {Alert && (
          <p className="bg-red-500/40 inline-block rounded-md  w-[100%] mt-2 p-2 font-bold text-red-600/70  ">
            {Alert}
          </p>
        )}
      </div>
      <ContactList Forms={Forms} deleteHandler={deleteHandler} />
    </div>
  );
}

export default Contact;
