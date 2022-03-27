import styled from 'styled-components';

export const CookiesMessageStyle = styled.div`
  background-color: #666;
  color: #FFF;
  position:fixed;
  bottom: 0;
  width: 100%;
  padding: 8px;
  box-sizing: border-box;

  p {
    text-align: center;
  }

  .cookies__close {
    position: absolute;
    top: 0;
    right: 4px;
    cursor: pointer;
  }
`