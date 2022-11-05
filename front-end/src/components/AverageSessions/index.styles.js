import styled from 'styled-components';
import { theme } from '../../constants/index.js';

export const AverageSessionsContainer = styled.div`
  position: relative;
  background: ${theme.colors.primary500};
`;

export const AverageSessionsTitle = styled.h2`
  position: absolute;
  top: 1.5rem;
  left: 2rem;
  margin: 0;
  color: rgba(255, 255, 255, 0.6);
  font-size: 1rem;
  font-weight: 500;

  @media (max-width: 1340px) {
    top: 1rem;
    left: 1.5rem;
  }
`;

export const TooltipContainer = styled.p`
  padding: 0.5rem;
  font-size: 0.7rem;
  font-weight: 500;
  background: white;
  margin: 0;
`;
