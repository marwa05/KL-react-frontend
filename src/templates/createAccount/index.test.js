import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";

import "../../language/initialize";
import { GlobalStyle, ThemeProvider } from "../../theme";
import CreateAccount from ".";

describe("CreateAccount", () => {
  beforeEach(() => {
    fetch.mockResponse(JSON.stringify({ id: "unit test value" }));
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
          <CreateAccount />
        </Router>
      </ThemeProvider>
    );

    const page = container.getByTestId("createAccountPage");
    expect(page).not.toBeFalsy();
  });

  it("should show errors when email and password fields are both empty", () => {
    const history = createMemoryHistory();
    const container = render(
      <ThemeProvider>
        <GlobalStyle />
        <Router history={history}>
          <CreateAccount />
        </Router>
      </ThemeProvider>
    );

    const button = container.getByTestId("submit");
    userEvent.click(button);

    const emailLabel = container.getByTestId("email-label");
    expect(emailLabel.innerHTML).toBeTruthy();

    const passwordLabel = container.getByTestId("password-label");
    expect(passwordLabel.innerHTML).toBeTruthy();
  });

  it("should show errors when email and password fields are both invalid", () => {
    const history = createMemoryHistory();
    const container = render(
      <ThemeProvider>
        <GlobalStyle />
        <Router history={history}>
          <CreateAccount />
        </Router>
      </ThemeProvider>
    );

    const email = container.getByTestId("email-input");
    userEvent.type(email, "a");

    const password = container.getByTestId("password-input");
    userEvent.type(password, "a");

    const button = container.getByTestId("submit");
    userEvent.click(button);

    const emailLabel = container.getByTestId("email-label");
    expect(emailLabel.innerHTML).toBeTruthy();

    const passwordLabel = container.getByTestId("password-label");
    expect(passwordLabel.innerHTML).toBeTruthy();
  });

  it("should not show errors when email and password fields are both valid", () => {
    const history = createMemoryHistory();
    const container = render(
      <ThemeProvider>
        <GlobalStyle />
        <Router history={history}>
          <CreateAccount />
        </Router>
      </ThemeProvider>
    );

    const email = container.getByTestId("email-input");
    userEvent.type(email, "a@b.com");

    const password = container.getByTestId("password-input");
    userEvent.type(password, "aaaaaaa");

    const button = container.getByTestId("submit");
    userEvent.click(button);

    const emailLabel = container.getByTestId("email-label");
    expect(emailLabel.innerHTML).toBeFalsy();

    const passwordLabel = container.getByTestId("password-label");
    expect(passwordLabel.innerHTML).toBeFalsy();
  });

  it("should show error when e-mail field is invalid", () => {
    const history = createMemoryHistory();
    const container = render(
      <ThemeProvider>
        <GlobalStyle />
        <Router history={history}>
          <CreateAccount />
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

  it("should show error when password field is invalid", () => {
    const history = createMemoryHistory();
    const container = render(
      <ThemeProvider>
        <GlobalStyle />
        <Router history={history}>
          <CreateAccount />
        </Router>
      </ThemeProvider>
    );

    const email = container.getByTestId("email-input");
    userEvent.type(email, "a@b.com");

    const password = container.getByTestId("password-input");
    userEvent.type(password, "aaa");

    const button = container.getByTestId("submit");
    userEvent.click(button);

    const emailLabel = container.getByTestId("email-label");
    expect(emailLabel.innerHTML).toBeFalsy();

    const passwordLabel = container.getByTestId("password-label");
    expect(passwordLabel.innerHTML).toBeTruthy();
  });
});
