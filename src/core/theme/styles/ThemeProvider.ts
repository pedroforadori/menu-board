import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html, body, #root {
    height: 100%;
  }

  body {
    margin: 0;
    font-family: ${({ theme }) => theme.typography.fontFamily};
    font-size: ${({ theme }) => theme.typography.baseSize}px;
    color: ${({ theme }) => theme.colors.text};
    background: ${({ theme }) => theme.colors.background};
    background-image: ${({ theme }) => (theme.backgroundImage ? `url(${theme.backgroundImage})` : 'none')};
    background-size: cover;
    background-position: center;
    transition: background-color 0.3s ease, color 0.3s ease;
  }

  * {
    box-sizing: border-box;
  }
`;