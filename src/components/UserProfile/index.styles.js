import styled from 'styled-components';
import { theme } from '../../constants/index.js';

export const UserSection = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 70px;
  margin-top: 100px;
`;

export const UserArticle = styled.div`
  justify-self: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 10px;
  a:link {
    text-decoration: none;
  }
`;
export const UserName = styled.h2`
  color: ${theme.colors.primary500};
  font-size: 2rem;
  font-weight: normal;
`;
export const UserDescription = styled.p`
  font-size: 18px;
  color: ${theme.colors.neutral500};
`;
export const UserLink = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const UserImage = styled.img`
  object-fit: cover;
  height: 200px;
  width: 200px;
  border-radius: 10em;
  box-shadow: 20px 20px 15px rgba(0, 0, 0, 0.2);
  border: 10px solid ${theme.colors.primary500};
  padding: 5px;
  border-image-slice: 10%;
`;
