
import React from "react";

import Header from '../components/header/header';
import { WrapperBig } from '../assets/styles/styles';
import Footer from '../components/footer/footer';

import axios from "axios";

const ErrorPage = () => {

  return (
    <>
      <Header />
      <WrapperBig>

        <h1>404. Aqui no hay na'</h1>

      </WrapperBig>
      <Footer />
    </>
  );

}

export default ErrorPage;
