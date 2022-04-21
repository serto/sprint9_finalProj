import styled from 'styled-components';
import logo from '../../assets/images/logo.png';
import open from '../../assets/images/open.png';
import close from '../../assets/images/close.png';


export const HeaderStyle = styled.header`
  background-color: #22AAB8;
  color: #FFF;
  position:fixed;
  top: 0;
  width: 100%;
  padding: 16px 2%;
  box-sizing: border-box;

  .header__wrapp {
    display: fix;
    justify-content: space-between;
  }

  .header__menu {
    display: block;
    cursor: pointer;
    margin-top: 6px;
    width: 26px;
    height: 26px;
    background: ${({ showNav}) => showNav ? `url(${close})` : `url(${open})`};  
    background-size: cover;
  }

  .linkLogo {
    text-indent: -9999px;
    background: url(${logo});
    background-size: cover;
    display: block;
    width: 80px;
    height: 36px;

    &:hover {
      text-decoration: none;
      border-bottom: none;
      opacity: 0.85;
    }
  }

`

export const NavStyle = styled.nav`
  display:  ${({ showNav}) => showNav ? 'flex' : 'none'};  
  cursor: pointer;
  width: 100%;
  flex-direction: column;
  align-items: flex-end;

  a {
    color: white; 
    text-decoration: none;
    padding-bottom: 4px;
    border-bottom: 1px solid #FFF;
    min-width: 120px;
    text-align: right;
    margin: 8px 0;

    &:hover {
      color: #D13688;
      border-bottom: 1px solid #D13688;
    }

    &:last-child {
      margin: 8px 0 0 0;
    }
  }
`