import React from "react";
// import React, { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Allroute from "./components/Allroute";
import NavBar from "./components/Navbar";



const App = () => {


  return (
    <Router>
      <NavBar />
      <Allroute />
      
    </Router>
  );
}

export default App;
