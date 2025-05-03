import React from "react";
import Home from "./components/Home.jsx";
import FullTeam from "./components/FullTeam.jsx"
import { Route, Routes } from "react-router-dom";

const App=()=>{

  return(
    <>
    <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/team' element={<FullTeam/>} />
    </Routes>
   
    
    </>
  );

}
export default App;

