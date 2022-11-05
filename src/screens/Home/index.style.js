import styled from 'styled-components';

export const DashboardContainer = styled.main`
  display: grid;
  grid-template-columns: 7.5rem 1fr;
`;

export const MainContent = styled.section`
  display: flex;
  justify-content: space-between;
  padding: 3rem 5rem;

  @media (max-width: 1340px) {
    padding: 1.5rem 2rem;
  }
`;

export const LabelContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
`;
export const ApiText = styled.span`
  justify-content: space-between;
  font-size: 1.4rem;
  font-weight: bold;
`;
