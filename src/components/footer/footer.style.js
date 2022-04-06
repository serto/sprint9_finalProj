import styled from 'styled-components';

export const FooterStyle = styled.footer`
  background-color: #d7dbdf;
  color: #3c3c3c;
  width: 100%;
  padding: 24px 8px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;

  p {
    font-size: 0.8rem;
    margin: 0;
    padding: 0;
  }

  a {
    font-size: 0.8rem;
    color: #22AAB8;
    text-decoration: none;
    padding-bottom: 4px;

    &:hover {
      color: #D13688;
      border-bottom: 1px solid #D13688;
    }
  }
`