import styled from 'styled-components';
import { theme } from '../../constants/index.js';

const IconContainer = styled.div`
  display: flex;
  padding: 2rem;
  text-align: left;
  background: ${theme.colors.neutral100};
  @media (max-width: 1340px) {
    padding: 1.75rem 1.25rem;
  }
  @media (max-width: 968px) {
    padding: 0.75rem 0.25rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;
    flex-wrap: wrap;
  }
  @media (max-width: 788px) {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;
    flex-wrap: wrap;
  }
`;

const IconInfos = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 0 0 1.5rem;
  @media (max-width: 1340px) {
    padding: 0 0 0 1rem;
  }
`;

const IconInfoValue = styled.div`
  margin: 0.125rem 0;
  font-size: 1.2rem;
  font-weight: 700;
  @media (max-width: 1340px) {
    font-size: 1.1rem;
  }
`;

const IconInfoType = styled.div`
  margin: 0.125rem 0;
  color: ${theme.colors.neutral500};
`;

export { IconContainer, IconInfoValue, IconInfos, IconInfoType };
