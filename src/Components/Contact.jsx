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

  return (
    <div>
      <form>
        {inputs.map((input) => (
          <input
            type={input.type}
            name={input.name}
            placeholder={input.placeholder}
            value={Form[input.name]}
          />
        ))}
        <button>SUBMIT</button>
      </form>
    </div>
  );
}

export default Contact;
