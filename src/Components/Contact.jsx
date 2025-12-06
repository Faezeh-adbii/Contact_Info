import { useState } from "react";
import ContactList from "./ContactList";
import { v4 } from "uuid";
import inputs from "../Contants/inputs";


function Contact() {
  const [Forms , setForms]=useState([]);
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
    const NewForm={...Form ,id:v4()};
    setForms((Forms) => ([...Forms , NewForm]));
    setForm({
      id:"",
      Name:"",
      Lastname:"",
      Phone:"",
    })
  };

  return (
    <div>
      <form>
        {inputs.map((input, index) => (
          <input
            key={index}
            type={input.type}
            name={input.name}
            placeholder={input.placeholder}
            value={Form[input.name]}
            onChange={changeHandler}
          />
        ))}
        <button onClick={submitHandler}>SUBMIT</button>
      </form>
      <div> <ContactList Forms={Forms}/>   </div>
    </div>
  );
}

export default Contact;
