import Contact from "./Components/Contact";
import ContactInfo from "./Components/ContactInfo";

function App() {
  return (
    <>
      <div className="bg-gradient-to-br from-purple-200 via-pink-200 to-blue-200 h-screen place-items-center ">
        <ContactInfo/>
        <Contact/>
      </div>
    </>
  );
}

export default App;
