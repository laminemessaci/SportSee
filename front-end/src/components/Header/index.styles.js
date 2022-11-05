import styled from 'styled-components';
import { theme } from './../../constants';

export const HeaderContainer = styled.header`
  display: grid;
  grid-template-columns: 16rem 1fr;
  color: white;
  background: ${theme.colors.neutral900};
`;

export const Logo = styled.a`
  padding: 1rem 2rem;
  border-radius: 20rem;
  &:hover {
    box-shadow: 0 0 16px #ccc;
  }
  @media (max-width: 1340px) {
    padding: 0.75rem 1.5rem;
  }
  @media (max-width: 1024) {
    padding: 0.25rem 0.75rem;
  }
  @media (max-width: 968px) {
    padding: 0.2rem 0.5rem;
  }
`;
export const ImageLogo = styled.img`
  @media (max-width: 968px) {
    width: rem;
    position: relative;
  }
`;

export const LinkedList = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  height: 100%;
  font-weight: 500;
  text-align: center;
  list-style-type: none;

  @media (max-width: 788px) {
    display: flex;
    flex-flow: column wrap;
    padding: 2rem;
    align-items: center;
  }
`;

export const HeaderLink = styled.a`
  padding: 0.5rem 2rem;
  border-radius: 20rem;
  color: white;
  font-size: ${theme.fonts.large};
  text-decoration: none;
  &:hover {
    box-shadow: 0 0 12px #ccc;
  }
  @media (max-width: 1340px) {
    font-size: 1.25rem;
  }
  @media (max-width: 1200px) {
    font-size: 1rem;
  }
  @media (max-width: 968px) {
    display: flex;
    flex-direction: column;
    font-size: 0.75rem;
    text-align: center;
  }
`;
