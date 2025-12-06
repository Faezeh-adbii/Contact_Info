import { useState } from "react";

const inputs = [
  { type: "text", name: "Name", placeholder: "Name" },
  { type: "text", name: "Lastname", placeholder: "Lastname" },
  { type: "email", name: "Email", placeholder: "Email" },
  { type: "number", name: "Phone", placeholder: "Phone" },
];
function Contact() {
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
    console.log(Form);
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
    </div>
  );
}

export default Contact;
