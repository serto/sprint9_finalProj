
import React , {useState} from 'react';
import { FooterStyle } from './footer.style';
import CookiesMessage from '../cookiesMessage/cookiesMessage';

const Footer = () => {

  return (
    <>
      <FooterStyle>
        <p>EL FOOTER</p>
      </FooterStyle>
      <CookiesMessage />
    </>
    );

}

export default Footer;