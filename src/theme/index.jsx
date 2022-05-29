import { useContext, useEffect, useState, createContext } from "react";
import {
  createGlobalStyle,
  ThemeProvider as StyledThemeProvider
} from "styled-components";

import themes from "./style.json";

export const ThemeContext = createContext();

export const ThemeProvider = (props) => {
  const initialTheme =
    window.localStorage.getItem("theme") ||
    (window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches &&
      "dark") ||
    (window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: light)").matches &&
      "light") ||
    "light";
  const [theme, setTheme] = useState(initialTheme);

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  const updateStoredTheme = () => {
    window.localStorage.setItem("theme", theme);
  };
  useEffect(updateStoredTheme, [theme]);

  const value = { theme, toggleTheme };
  const themeInfo = themes[theme];

  return (
    <ThemeContext.Provider value={value}>
      <StyledThemeProvider theme={themeInfo}>
        {props.children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);

export const GlobalStyle = createGlobalStyle`
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
