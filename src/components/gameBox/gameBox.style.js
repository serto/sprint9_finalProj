import styled from 'styled-components';
const tablet_point = 750;
const tablet = `@media (min-width: ${tablet_point}px)`;

export const GameBoxStyle = styled.div`

  display: flex;
  flex-direction: row;
  margin-bottom: 12px;
  flex-direction: ${({type}) => (type === 'card') ? `column` : `row`};  
  width: ${({type}) => (type === 'card') ? `50%` : `auto`};  

  ${tablet} {
    width: ${({type}) => (type === 'card') ? `25%` : `auto`};
  }


  a {
    color: #3c3c3c;
    &:hover {
      color: #3c3c3c;
      text-decoration: none;
      border-bottom: none;
      box-shadow: 0px 10px 12px 5px rgba(0,0,0,0.5);
      -webkit-box-shadow: 0px 10px 12px 5px rgba(0,0,0,0.5);
      -moz-box-shadow: 0px 10px 12px 5px rgba(0,0,0,0.5);
    }
  }

  .GameBoxUA__image {
    background-color: black;
    width: ${({type}) => (type === 'card') ? `100%` : `30%`};

    img {
      width: 100%;
      height: auto;
    }
  }

  .GameBoxUA__info {
    background-color: #f7f9fa;
    box-sizing: border-box;
    padding: 8px;
    width: ${({type}) => (type === 'card') ? `100%` : `70%`};
    display: flex; 
    justify-content: space-between;

    h4 {
      margin: 0 0 4px 0;
      padding: 0;
      font-size: 0.9rem;
    }
    p {
      margin: 0 0 4px 0;
      padding: 0;
      font-size: 0.8rem;
    }
    .sphere {
      display: inline-block; 
      padding: 3px;
      width: 18px;
      height: 18px;
      color: #FFF;
      border-radius: 50%;
      background-color: #22AAB8;
      text-align: center;
    }
  }
`