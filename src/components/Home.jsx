import React from "react";
import Contact from "./Contact.jsx"
import Loader from "./Loader.jsx";
import Navbar from "./Navbar.jsx";
import LandingPage from "./LandingPage.jsx";
import About from "./About.jsx";
import Achievements from "./Achievements.jsx";
import Event from "./Event.jsx";
import Team from "./Team.jsx";
const Home=()=>{

  return(
    <>

    <Loader /> 
    <Navbar />
    <LandingPage />
    <About />
    <Event /> 

    <Achievements />
    <Team />
    <Contact />
    
    </>
  );

}
export default Home;
