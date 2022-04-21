
import React , {useState} from 'react';
import { FooterStyle } from './footer.style';
import CookiesMessage from '../cookiesMessage/cookiesMessage';
import { Link } from 'react-router-dom';

const Footer = () => {

  return (
    <>
      <FooterStyle>
        <nav>
          <Link to="/cookiesInfo">Cookies</Link>
        </nav>
        <p>Site desenvolupat per 
          <a 
            href="https://www.linkedin.com/in/serto-morales-92a30b19/"
            target="_blank" 
            rel="noreferrer"> Serto Morales</a>
        </p>
      </FooterStyle>
      <CookiesMessage />
    </>
    );

}

export default Footer;