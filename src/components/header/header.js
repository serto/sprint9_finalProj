
import React , {useState} from 'react';
import { HeaderStyle, NavStyle } from './header.style';

import { Link } from 'react-router-dom';

const Header = () => {

  const [showMess, setShowMess] = useState(false);

  const openMenu = () => {
    console.log('piticlic');
    setShowMess(showMess ? false : true);
  }

  return (
      <>
        <HeaderStyle>
          <div className='header__wrapp'>
            <p>logo</p>
            <div className='header__menu' onClick={openMenu}></div>
          </div>

          <NavStyle showNav={showMess}>
            <Link to="/">Login</Link>
            <Link to="/loginSignUp">Sign In</Link>
          </NavStyle>

        </HeaderStyle>
      </> 
    );

}

export default Header;