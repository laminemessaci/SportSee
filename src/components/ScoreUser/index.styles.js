import styled from 'styled-components';
import { theme } from '../../constants/index.js';

export const ScoreContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${theme.colors.neutral100};
  @media (max-width: 988px) {
    padding: 0.1rem;
  }
`;

export const ScoreTitle = styled.h2`
  position: absolute;
  top: 1.5rem;
  left: 2rem;
  margin: 0;
  font-size: 1rem;
  font-weight: 500;

  @media (max-width: 1340px) {
    top: 1rem;
    left: 1rem;
  }
  @media (max-width: 988px) {
    top: 9.75rem;
    font-size: 1rem;
  }
`;

export const ScoreLabel = styled.p`
  position: absolute;
  font-size: 1rem;
  text-align: center;
  @media (max-width: 988px) {
    font-size: 0.65rem;
    text-align: center;
  }
`;

export const ScoreValue = styled.span`
  font-size: 1.5rem;
  font-weight: 700;
  text-align: center;
  @media (max-width: 988px) {
    font-size: 1rem;
    font-weight: 500;
    text-align: center;
  }
`;
