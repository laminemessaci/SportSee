import styled from 'styled-components';
import { theme } from '../../constants/index.js';

export const Title = styled.h1`
  margin: 0;
  font-size: 3rem;
  font-weight: 500;

  @media (max-width: 1340px) {
    font-size: 2.5rem;
  }
  @media (max-width: 968px) {
    font-size: 1.5rem;
  }
`;

export const FirstName = styled.span`
  color: ${theme.colors.primary500};
`;

export const Message = styled.p`
  margin: 2rem 0 4rem 0;
  font-size: 1.1rem;
  @media (max-width: 1340px) {
    margin: 0.5rem 0 2rem 0;
    font-size: 1.05rem;
  }
`;
