import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import "../../language/initialize";
import { ThemeProvider } from "../../theme";
import Password from ".";

describe("Password", () => {
  it("should render value correctly", () => {
    const container = render(
      <ThemeProvider>
        <Password value="xoxo" onChange={() => {}} />
      </ThemeProvider>
    );
    const password = container.getByTestId("password-input");
    expect(password.value).toBe("xoxo");
  });

  it("should render error correctly", () => {
    const container = render(
      <ThemeProvider>
        <Password error="invalid password" onChange={() => {}} />
      </ThemeProvider>
    );
    const label = container.getByTestId("password-label");
    expect(label.innerHTML).toBe("invalid password");
  });

  it("should invoke onChange handler when clicked", () => {
    const onChange = jest.fn();
    const container = render(
      <ThemeProvider>
        <Password onChange={onChange} />
      </ThemeProvider>
    );
    const password = container.getByTestId("password-input");
    userEvent.type(password, "x");
    expect(onChange).toHaveBeenCalled();
  });
});
