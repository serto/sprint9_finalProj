
import React, {useState} from "react";
import { BrowserRouter, Route, Routes, Navigate} from 'react-router-dom';

import Home from '../pages/home';
import LoginSign from "../pages/loginSign";

const RoutesApp = () => {

  return (
    <BrowserRouter>
      <Routes>   
        <Route path="/" element={<Home/>} />
        <Route path="/loginSignUp" element={<LoginSign/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesApp;
