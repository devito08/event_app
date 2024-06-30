import React from "react";
// import React, { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Allroute from "./components/Allroute";
import NavBar from "./components/Navbar";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from "./components/Footer";


const App = () => {


  return (
    <Router>
      <NavBar />
      <Allroute />
      <ToastContainer />
      <Footer/>
    </Router>
  );
}

export default App;
