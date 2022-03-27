
import React , {useState} from 'react';
import { CookiesMessageStyle } from './cookiesMessage.style';


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
            <p className="cookies__close" onClick={closeMessage}>X</p>
            <p>Asereje ja de je, dejebe tu dejebe <a href=""  onClick={closeMessage}>aceptar</a> <a href="#">ver cookies</a></p>
          </CookiesMessageStyle>
        :
          ''
        }
      </>
    );

}

export default CookiesMessage;