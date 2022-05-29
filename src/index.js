import ReactDOM from "react-dom";
import React, { StrictMode } from "react";
import { BrowserRouter } from "react-router-dom";
import "./templates/language/initialize";
import { GlobalStyle, ThemeProvider } from "./theme";
import App from "./components/App";

const rootElement = document.getElementById("root");

ReactDOM.render(
  <StrictMode>
    <ThemeProvider>
      <GlobalStyle />
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>,
  rootElement
);
