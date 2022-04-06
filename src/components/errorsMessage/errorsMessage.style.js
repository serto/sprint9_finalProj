import styled from 'styled-components';

export const ErrorMessage = styled.p`
  color: #D13688;
  font-weight: bold;
  display: ${({ showMessage}) => showMessage ? 'block' : 'none'};  
`
