import styled from 'styled-components';

export const OkMessage = styled.p`
  color: #22AAB8;
  font-weight: bold;
  display: ${({ viewMessage}) => viewMessage ? 'block' : 'none'};    
`
