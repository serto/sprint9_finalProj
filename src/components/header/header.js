
import React , {useState, useContext} from 'react';
import { HeaderStyle, NavStyle } from './header.style';
import Search from '../searcher/searcher';
import { AppContext } from '../../application/provider';

import { Link } from 'react-router-dom';

const Header = () => {

  const [showMess, setShowMess] = useState(false);
  const [state, setState] = useContext(AppContext);

  const openMenu = () => {
    setShowMess(showMess ? false : true);
  }

  return (
      <>
        <HeaderStyle showNav={showMess}>
          <div className='header__wrapp'>
            <Link to="/" className='linkLogo'></Link>
            
            <Search />
            
            <div className='header__menu' onClick={openMenu}></div>
          </div>


          <NavStyle showNav={showMess}>
            <Link to="/insertGame">Inserta Juego</Link>
            { state ? 
                <>
                  <Link to="/userArea">Área usuario</Link>
                  <Link to="/">Logout</Link>
                </>
              : 
                <>
                  <Link to="/loginSignUp">Sign In</Link>
                </>
            }
          </NavStyle>

        </HeaderStyle>
      </> 
    );

}

export default Header;