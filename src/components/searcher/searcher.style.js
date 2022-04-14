import styled from 'styled-components';
import lupa from '../../assets/images/lupa.png';

export const SearchStyle = styled.div`
  width: 40%;
  position: relative;

  input {
    margin-bottom: 0;
  }

  button {
    background: url(${lupa});
    background-size: cover;
    background-color: #fff;
    border-radius: 25%;
    border: none;
    display: block;
    width: 22px;
    height: 22px;
    position: absolute;
    top: 8px;
    right: 8px;
  }
`
