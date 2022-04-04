
import React, {useState} from "react";
import { BrowserRouter, Route, Routes, Navigate} from 'react-router-dom';

import Home from '../pages/home';
import LoginSign from '../pages/loginSign';
import InsertGame from '../pages/insertGame';
import Detail from '../pages/detail';
import Search from '../pages/search';

const RoutesApp = () => {

  return (
    <BrowserRouter>
      <Routes>   
        <Route path="/" element={<Home/>} />
        <Route path="/insertGame" element={<InsertGame/>} />
        <Route path="/detail/:slug" element={<Detail /> } />
        <Route path="/search" element={<Search /> } />
        <Route path="/loginSignUp" element={<LoginSign/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesApp;
