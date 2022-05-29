import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";

import "../../language/initialize";
import { translation } from "../../language/resources/en.json";
import { GlobalStyle, ThemeProvider } from "../../theme";
import App from ".";

describe("App", () => {
  it("should render SignIn page by default", () => {
    const history = createMemoryHistory();
    const container = render(
      <ThemeProvider>
        <GlobalStyle />
        <Router history={history}>
          <App />
        </Router>
      </ThemeProvider>
    );
    const signInPage = container.getByTestId("signInPage");
    expect(signInPage).not.toBeFalsy();
  });

  it("should render ForgotPassword page when link clicked", async () => {
    const { forgotYourPassword } = translation;
    const history = createMemoryHistory();
    const container = render(
      <ThemeProvider>
        <GlobalStyle />
        <Router history={history}>
          <App />
        </Router>
      </ThemeProvider>
    );
    const link = container.getByText(forgotYourPassword);
    userEvent.click(link);
    const forgotPasswordPage = container.getByTestId("forgotPasswordPage");
    expect(forgotPasswordPage).not.toBeFalsy();
  });

  it("should allow navigation back to SignIn page from ForgotPassword page", () => {
    const { forgotYourPassword, goBack } = translation;
    const history = createMemoryHistory();
    const container = render(
      <ThemeProvider>
        <GlobalStyle />
        <Router history={history}>
          <App />
        </Router>
      </ThemeProvider>
    );
    const link = container.getByText(forgotYourPassword);
    userEvent.click(link);

    const goBackLink = container.getByText(goBack);
    userEvent.click(goBackLink);

    const signInPage = container.getByTestId("signInPage");
    expect(signInPage).not.toBeFalsy();
  });

  it("should render CreateAccount page when link clicked", async () => {
    const { createAnAccount } = translation;
    const history = createMemoryHistory();
    const container = render(
      <ThemeProvider>
        <GlobalStyle />
        <Router history={history}>
          <App />
        </Router>
      </ThemeProvider>
    );
    const link = container.getByText(createAnAccount);
    userEvent.click(link);
    const createAccountPage = container.getByTestId("createAccountPage");
    expect(createAccountPage).not.toBeFalsy();
  });

  it("should allow navigation back to SignIn page from CreateAccount page", () => {
    const { createAnAccount, goBack } = translation;
    const history = createMemoryHistory();
    const container = render(
      <ThemeProvider>
        <GlobalStyle />
        <Router history={history}>
          <App />
        </Router>
      </ThemeProvider>
    );
    const link = container.getByText(createAnAccount);
    userEvent.click(link);

    const goBackLink = container.getByText(goBack);
    userEvent.click(goBackLink);

    const signInPage = container.getByTestId("signInPage");
    expect(signInPage).not.toBeFalsy();
  });

  it("should render Help page when link clicked", () => {
    const { help } = translation;
    const history = createMemoryHistory();
    const container = render(
      <ThemeProvider>
        <GlobalStyle />
        <Router history={history}>
          <App />
        </Router>
      </ThemeProvider>
    );
    const link = container.getByText(help);
    userEvent.click(link);
    const headline = container.getByTestId("headline");
    expect(headline.innerHTML).toBe(help);
  });

  it("should render Privacy page when link clicked", () => {
    const { privacy } = translation;
    const history = createMemoryHistory();
    const container = render(
      <ThemeProvider>
        <GlobalStyle />
        <Router history={history}>
          <App />
        </Router>
      </ThemeProvider>
    );
    const link = container.getByText(privacy);
    userEvent.click(link);
    const headline = container.getByTestId("headline");
    expect(headline.innerHTML).toBe(privacy);
  });

  it("should render Terms page when link clicked", () => {
    const { terms } = translation;
    const history = createMemoryHistory();
    const container = render(
      <ThemeProvider>
        <GlobalStyle />
        <Router history={history}>
          <App />
        </Router>
      </ThemeProvider>
    );
    const link = container.getByText(terms);
    userEvent.click(link);
    const headline = container.getByTestId("headline");
    expect(headline.innerHTML).toBe(terms);
  });
});
