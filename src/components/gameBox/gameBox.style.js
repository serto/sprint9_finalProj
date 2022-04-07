import styled from 'styled-components';

export const GameBoxStyle = styled.div`

  display: flex;
  flex-direction: row;
  margin-bottom: 12px;

  .GameBoxUA__image {
    background-color: black;
    width: 30%;

    img {
      width: 100%;
      height: auto;
    }
  }

  .GameBoxUA__info {
    background-color: #f7f9fa;
    box-sizing: content-box;
    padding: 8px;
    width: 70%;
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