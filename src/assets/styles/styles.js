import styled, { createGlobalStyle } from 'styled-components';
const tablet_point = 750;
const tablet = `@media (min-width: ${tablet_point}px)`;


export const GlobalStyle = createGlobalStyle`

  body {
    background-color: #ECEEEF;
    font-family: 'Open Sans', arial, sans-serif;
    padding: 0;
    margin: 0;
  }


  //FONTS

  .t-t1 {
    font-size: 2em;
  }

  .t-t2 {
    font-size: 1.4em;
    text-transform: uppercase;
  }

  .t-tSection {
    margin: 32px 0 0 0;
    font-size: 1rem;
    padding: 0 0 4px 0;
  }
  .t-tText {
    font-size: 0.9rem;
  }

  //common button 
  .btn {
    display: inline-block;
    color: #fff;
    cursor: pointer;
    background-color: #22AAB8;
    border: none;
    padding: 12px;
    margin: 8px 2px 2px 2px;
    text-decoration: none;
    text-align: center;
    width: 100px;
    opacity: 1;
    border-radius: 8px;

    &:hover {
      opacity: 0.8;
      cursor: pointer;
    }
  }

  //forms
  label {
    display: inline-block;
    font-weight: bold;
    margin: 8px 0 4px 0;
    font-size: 0.8rem;
    width: 100%;
  }

  input {
    width: 100%;
    padding: 10px 8px;
    box-sizing: border-box;
    margin-bottom: 8px;
    border-radius: 8px;
    border: 1px solid #3c3c3c;
  }

  //
  .boxFormSign {
    width: 98%;
    margin: 0 auto 46px;
    ${tablet} {
      width: 48%;
    }
  }

  //
  .centerContent {
    text-align: center;
  }
  .imageLogoHome {
    width: 70%;
    margin: 0 auto;
    max-width: 500px;
    img {
      width: 100%;
      height: auto;
    }
  }
  .boxButtonActions {
    margin-top: 32px;
  }

`

export const WrapperBig = styled.div`
  width: 96%;
  //border: 1px solid red;
  margin: 84px auto 60px;
  display: flex;
  flex-direction: column;
`;

export const WrapperContent = styled.div`
  width: 96%;
  max-width: 1080px;
  margin: 74px auto 60px;
  display: flex; 
  flex-direction: column;

  ${tablet} {
    flex-direction: row;
  }
`;
