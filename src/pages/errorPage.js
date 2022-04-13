
import React from "react";

import Header from '../components/header/header';
import { WrapperBig } from '../assets/styles/styles';
import Footer from '../components/footer/footer';
import logoHome from '../assets/images/logoHome.png';
import { Link } from 'react-router-dom';

const ErrorPage = () => {

  return (
    <>
      <Header />
      <WrapperBig>

        <div className="centerContent">

          <div className="imageLogoHome">
            <img src={logoHome} alt="Chenji logo" />
          </div>

          <h1>404 Error. Está página no existe !!</h1>

          <Link to="/" className="btn">Volver</Link>
        </div>

      </WrapperBig>
      <Footer />
    </>
  );

}

export default ErrorPage;
