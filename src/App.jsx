import Contact from "./Components/Contact";
import ContactInfo from "./Components/ContactInfo";

function App() {
  return (
    <>
      <div className="xl:relative  ">
        <ContactInfo className="xl:absolute w-full" />
        <Contact/>
      </div>
    </>
  );
}

export default App;
