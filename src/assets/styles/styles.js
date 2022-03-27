import styled, { createGlobalStyle } from 'styled-components';
const mobile_point = 750;
const mobile = `@media (max-width: ${mobile_point}px)`;


export const GlobalStyle = createGlobalStyle`

  body {
    margin: 0;
    padding: 0;
  }
`

export const WrapperBig = styled.div`
  width: 96%;
  border: 1px solid red;
  margin: 74px auto 20px;
  display: flex;
`;