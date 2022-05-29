import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import "../../language/initialize";
import { ThemeProvider } from "../../theme";
import Email from ".";

describe("Email", () => {
  it("should render value correctly", () => {
    const container = render(
      <ThemeProvider>
        <Email value="a@b.com" onChange={() => {}} />
      </ThemeProvider>
    );
    const email = container.getByTestId("email-input");
    expect(email.value).toBe("a@b.com");
  });

  it("should render error correctly", () => {
    const container = render(
      <ThemeProvider>
        <Email error="invalid e-mail" onChange={() => {}} />
      </ThemeProvider>
    );
    const label = container.getByTestId("email-label");
    expect(label.innerHTML).toBe("invalid e-mail");
  });

  it("should invoke onChange handler when clicked", () => {
    const onChange = jest.fn();
    const container = render(
      <ThemeProvider>
        <Email error="invalid e-mail" onChange={onChange} />
      </ThemeProvider>
    );
    const email = container.getByTestId("email-input");
    userEvent.type(email, "x");
    expect(onChange).toHaveBeenCalled();
  });
});
