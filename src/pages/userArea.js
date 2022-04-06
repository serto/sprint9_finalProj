
import React, { useState, useEffect } from "react";

import Header from '../components/header/header';
import { WrapperBig } from '../assets/styles/styles';
import Footer from '../components/footer/footer';

const UserArea = (_) => {

  return (
    <>
      <Header />
      <WrapperBig>

        <h2>Área de usuario</h2>

      </WrapperBig>
      <Footer />
    </>
  );

}

export default UserArea;
