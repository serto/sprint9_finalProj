
import React , {useState} from 'react';
import { CookiesMessageStyle } from './cookiesMessage.style';

import { Link } from "react-router-dom";


const CookiesMessage = () => {

  const showMessLS = JSON.parse(localStorage.getItem("it__cookiesMessage"));
  const [showMess, setShowMess] = useState(showMessLS ? showMessLS : 0);

  const closeMessage = () => {
    localStorage.setItem('it__cookiesMessage', JSON.stringify(1));
    setShowMess(1);
  }

  return (
      <>
        { (showMess === 0) ? 
          <CookiesMessageStyle>
            <div className="cookies__close" onClick={closeMessage}>X</div>
            <p>Mensaje de que usamos cookies</p>
            <p>
              <span onClick={closeMessage}>Aceptar cookies</span> 
              <Link to="/cookiesInfo">Ver cookies</Link> 
            </p>
          </CookiesMessageStyle>
        :
          ''
        }
      </>
    );

}

export default CookiesMessage;