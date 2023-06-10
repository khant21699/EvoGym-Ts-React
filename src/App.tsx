import { useEffect, useState } from "react";
import "./App.css";
import NavBar from "./scenes/NavBar/NavBar";
import { SelectedPage } from "./shared/types";
import Home from "./scenes/Home";
import Benifits from "./scenes/Benifits/Benifits";
import OurClasses from "./scenes/OurClasses/OurClasses";
import ContactUs from "./scenes/ContactUs/ContactUs";
import Footer from "./scenes/Footer/Footer";

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home
  );
  const [topofPage, setTopofPage] = useState<boolean>(true);
  const handleScroll = () => {
    if (window.scrollY < 100) {
      setTopofPage(true);
      setSelectedPage(SelectedPage.Home);
    } else if (window.scrollY >= 100) {
      setTopofPage(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="app bg-gray-20">
      <NavBar
        topofPage={topofPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <Home setSelectedPage={setSelectedPage} />
      <Benifits setSelectedPage={setSelectedPage} />
      <OurClasses setSelectedPage={setSelectedPage} />
      <ContactUs setSelectedPage={setSelectedPage} />
      <Footer />
      <div
        id="confirmSubmitBox"
        className=" rounded-md flex justify-center items-center fixed w-[300px] h-[100px] bg-primary-500 "
      >
        <p className="text-center text-white font-bold text-xl">
          Form Sent Successfully
        </p>
      </div>
      {/* <div className="h-[1000px]"></div> */}
    </div>
  );
}

export default App;
