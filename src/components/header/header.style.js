import styled from 'styled-components';

export const HeaderStyle = styled.header`
  background-color: #22AAB8;
  color: #FFF;
  position:fixed;
  top: 0;
  width: 100%;
  padding: 8px;
  box-sizing: border-box;

  .header__wrapp {
    display: fix;
    justify-content: space-between;
  }

  .header__menu {
    display: block;
    margin-top: 8px;
    width: 30px;
    height: 30px;
    border: 1px solid yellow;
  }

`

export const NavStyle = styled.nav`
  display:  ${({ showNav}) => showNav ? 'block' : 'none'};  
  cursor: pointer;
  width: 100%;
  border: 1px solid yellow;
`