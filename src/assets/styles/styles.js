import styled, { createGlobalStyle } from 'styled-components';
const mobile_point = 750;
const mobile = `@media (max-width: ${mobile_point}px)`;


export const GlobalStyle = createGlobalStyle`

  body {
    margin: 0;
    padding: 0;
  }


  //FONTS

  .t-t1 {
    font-size: 1.8em;
  }

  .t-t2 {
    font-size: 1.4em;
    text-transform: uppercase;
  }

  //common button 
  .btn {
    display: inline-block;
    color: #fff;
    background-color: green;
    padding: 8px;
    margin: 2px;
    text-decoration: none;
    text-align: center;
    width: 100px;
    opacity: 1;

    &:hover {
      opacity: 0.8;
    }
  }

`

export const WrapperBig = styled.div`
  width: 96%;
  border: 1px solid red;
  margin: 74px auto 20px;
  display: flex;
`;

export const WrapperContent = styled.div`
  width: 96%;
  max-width: 1080px;
  border: 1px solid green;
  margin: 74px auto 20px;
`;
