import styled from 'styled-components';
const tablet_point = 750;
const tablet = `@media (min-width: ${tablet_point}px)`;

export const GameCardStyle = styled.div`
  background-color: #d7dbdf;
  box-sizing: border-box;
  margin-bottom: 8px;
  
  &:hover {
    box-shadow: 0px 10px 12px 5px rgba(0,0,0,0.5);
    -webkit-box-shadow: 0px 10px 12px 5px rgba(0,0,0,0.5);
    -moz-box-shadow: 0px 10px 12px 5px rgba(0,0,0,0.5);
  }

  a {
    text-decoration: none;
    &:hover {
      text-decoration: none;
    }
  }

  .imgCard {
    max-height: 175px;
    overflow: hidden;
    height: 60%;
    
    img {
      width: 100%;
      height: auto;
    }
  }

  .imgInfo {
    background-color: #d7dbdf;
    padding: 16px;

    h3 {
      color: #3c3c3c;
      font-size: 1.2rem;
      margin: 0 0 8px 0;
      padding: 0;
    }

    p {
      color: #3c3c3c;
      font-size: 0.9rem;
      margin: 0;
      padding: 0;
    }
  }
`

export const GameCardWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 48%);   
  grid-gap: 2%;
  margin-bottom: 32px;

  ${tablet} {
    grid-template-columns: repeat(4, 23%);  
    grid-gap: 2%;
  }
`