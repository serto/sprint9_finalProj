
import React, {useState, useEffect, useContext} from "react";
import { BrowserRouter, Route, Routes, Navigate} from 'react-router-dom';
import { AppContext } from "./provider";

import Home from '../pages/home';
import LoginSign from '../pages/loginSign';
import InsertGame from '../pages/insertGame';
import Detail from '../pages/detail';
import Search from '../pages/search';
import ErrorPage from "../pages/errorPage";

const RoutesApp = () => {

  const [state, setState] = useContext(AppContext);

  const logged = JSON.parse(localStorage.getItem("userChenjiLogged"));
  const [show, setShow] = useState(logged ? true : false);
  setState(logged ? true : false);

  useEffect(() => { 

    const loggedLS = JSON.parse(localStorage.getItem("userChenjiLogged"));
    setShow(loggedLS);
  }, [show]);


  return (
    <BrowserRouter>
      <Routes>   
        <Route path="/" element={<Home/>} />
        <Route 
          path="/insertGame" 
          element={ state ? ( <InsertGame /> ) : ( <Navigate replace to="/loginSignUp" /> ) }
        />
        <Route path="/detail/:slug" element={<Detail /> } />
        <Route path="/search" element={<Search /> } />
        <Route path="/loginSignUp" element={<LoginSign/>} />
        <Route path="*" element={<ErrorPage /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesApp;
