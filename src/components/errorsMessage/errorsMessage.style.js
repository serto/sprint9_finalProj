import styled from 'styled-components';

export const ErrorMessage = styled.p`
  color: #D13688;
  font-weight: bold;
  font-size: 0.8rem;
  display: ${({ showMessage}) => showMessage ? 'block' : 'none'};  
`
