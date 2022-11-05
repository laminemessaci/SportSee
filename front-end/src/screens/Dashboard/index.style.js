import styled from 'styled-components';

export const DashboardContainer = styled.main`
  display: grid;
  grid-template-columns: 7.5rem 1fr;
`;

export const MainContent = styled.section`
  padding: 3rem 5rem;

  @media (max-width: 1340px) {
    padding: 1.5rem 2rem;
  }
`;

export const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;

  @media (max-width: 1340px) {
    gap: 1rem;
  }
  @media (max-width: 968px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const ChartsGrid = styled.div`
  display: grid;
  grid-column: 1/4;
  grid-template: 20rem 16rem / repeat(3, 1fr);
  gap: 2rem;

  @media (max-width: 1340px) {
    grid-template: 18rem 14rem / repeat(3, 1fr);
    gap: 1rem;
  }
  @media (max-width: 968px) {
    grid-template: 16rem 11rem / repeat(3, 1fr);
    gap: 0.75rem;
  }

  > * {
    border-radius: 0.25rem;
    overflow: hidden;
  }
`;

export const MainChart = styled.div`
  grid-column: 1/4;
`;
