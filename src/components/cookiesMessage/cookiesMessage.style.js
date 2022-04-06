import styled from 'styled-components';

export const CookiesMessageStyle = styled.div`
  background-color: #3c3c3c;
  color: #FFF;
  position:fixed;
  bottom: 0;
  width: 100%;
  padding: 8px;
  box-sizing: border-box;

  p {
    text-align: center;
    font-size: 0.8rem;
  }

  .cookies__close {
    position: absolute;
    top: 0;
    right: 4px;
    cursor: pointer;
  }

  span, a {
    margin: 0 4px;
    display: inline-block;
    color: #fff;
    cursor: pointer;
    background-color: #89BD4E;
    border: none;
    padding: 4px;
    text-decoration: none;
    border-radius: 8px;

    &:hover {
      opacity: 0.8;
      cursor: pointer;
    }
  }
`