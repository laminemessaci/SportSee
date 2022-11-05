import { createGlobalStyle } from 'styled-components';
import { theme } from './constants/index.js';

export const MainStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    
    color: ${theme.colors.neutral900};
    font-family: Roboto, system-ui, Helvetica, sans-serif;
    font-weight: 400;

    scroll-behavior: smooth;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
  }

  #root {
    max-width: 1440px;
    margin: auto;
    overflow: hidden;

    @media (max-width: 1340px) {
      max-width: 1024px;
      max-height: auto;
    }
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin: 0;
    padding: 0;
    list-style-type: none;
  }
`;
