import styled from 'styled-components';
const tablet_point = 750;
const tablet = `@media (min-width: ${tablet_point}px)`;
const desktop_big = 1280;
const desktopBig = `@media (min-width: ${desktop_big}px)`;

export const GameCardStyle = styled.div`
  border: 1px solid red;
  padding: 2px 4px;
  box-sizing: border-box;
  margin-bottom: 8px;

  img {
    width: 100%;
    height: auto;
  }
`

export const GameCardWrapper = styled.div`
  border: 1px solid red;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 48%);   
  grid-gap: 2%;
  
  ${tablet} {
    grid-template-columns: repeat(4, 24%);  
    grid-gap: 1%;
  }
  ${desktopBig} {
    grid-template-columns: repeat(6, 14%); 
  }
`