import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *, ::before, ::after {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    transition-property: background-color, color;
    transition-duration: 0.5s;
    transition-timing-function: ease-out;
  }
  body {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    font-family: sans-serif;
    background-color: ${({ theme }) => theme.colors.background};
  }
`;

export default GlobalStyle;
