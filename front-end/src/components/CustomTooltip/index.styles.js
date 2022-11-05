import styled from "styled-components";

export const TooltipContainer = styled.div`
  border: 2px solid rgba(255, 255, 255, 0.3);
`;

export const TooltipLine = styled.p`
  padding: 0.75rem;
  margin: 0;

  color: white;
  font-size: 0.7rem;
  font-weight: 500;

  background: ${(props) => props.background};
`;
