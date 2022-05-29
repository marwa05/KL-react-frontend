import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";

import "../../language/initialize";
import { GlobalStyle, ThemeProvider } from "../../theme";
import ForgotPassword from ".";

describe("CreateAccount", () => {
  beforeEach(() => {
    fetch.mockResponse(JSON.stringify({ actionCompleted: "unit test value" }));
  });
  afterEach(() => {
    fetch.resetMocks();
  });

  it("should render page correctly", () => {
    const history = createMemoryHistory();
    const container = render(
      <ThemeProvider>
        <GlobalStyle />
        <Router history={history}>
          <ForgotPassword />
        </Router>
      </ThemeProvider>
    );

    const page = container.getByTestId("forgotPasswordPage");
    expect(page).not.toBeFalsy();
  });

  it("should show error when email field is empty", () => {
    const history = createMemoryHistory();
    const container = render(
      <ThemeProvider>
        <GlobalStyle />
        <Router history={history}>
          <ForgotPassword />
        </Router>
      </ThemeProvider>
    );

    const button = container.getByTestId("submit");
    userEvent.click(button);

    const emailLabel = container.getByTestId("email-label");
    expect(emailLabel.innerHTML).toBeTruthy();
  });

  it("should show error when email field is invalid", () => {
    const history = createMemoryHistory();
    const container = render(
      <ThemeProvider>
        <GlobalStyle />
        <Router history={history}>
          <ForgotPassword />
        </Router>
      </ThemeProvider>
    );

    const email = container.getByTestId("email-input");
    userEvent.type(email, "a");

    const button = container.getByTestId("submit");
    userEvent.click(button);

    const emailLabel = container.getByTestId("email-label");
    expect(emailLabel.innerHTML).toBeTruthy();
  });

  it("should not show error when email field is valid", () => {
    const history = createMemoryHistory();
    const container = render(
      <ThemeProvider>
        <GlobalStyle />
        <Router history={history}>
          <ForgotPassword />
        </Router>
      </ThemeProvider>
    );

    const email = container.getByTestId("email-input");
    userEvent.type(email, "a@b.com");

    const button = container.getByTestId("submit");
    userEvent.click(button);

    const emailLabel = container.getByTestId("email-label");
    expect(emailLabel.innerHTML).toBeFalsy();
  });
});
