import Contact from "./Components/Contact";
import ContactInfo from "./Components/ContactInfo";

function App() {
  return (
    <>
      <div className="xl:relative b">
        <ContactInfo className="xl:absolute xl:w-full" />
        <Contact/>
      </div>
    </>
  );
}

export default App;
