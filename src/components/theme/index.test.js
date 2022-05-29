import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import "../../language/initialize";
import { ThemeProvider } from "../../theme";
import themeToggle from "../themeToggle";

describe("Theme", () => {
  beforeEach(() => {
    const store = {};
    const getItem = (key) => store[key];
    const setItem = (key, value) => (store[key] = value);
    const value = { store, getItem, setItem };
    Object.defineProperty(window, "localStorage", { value });
  });
  it("should render value correctly", () => {
    const container = render(
      <ThemeProvider>
        <themeToggle />
      </ThemeProvider>
    );

    const theme = container.getByTestId("theme");
    expect(theme).not.toBeFalsy();
  });

  it("should allow toggling between themes", () => {
    const container = render(
      <ThemeProvider>
        <themeToggle />
      </ThemeProvider>
    );

    const theme = container.getByTestId("theme");
    const themeNameOne = theme.getAttribute("aria-label");
    expect(themeNameOne).toBe("light");

    userEvent.click(theme);
    const themeNameTwo = theme.getAttribute("aria-label");
    expect(themeNameTwo).toBe("dark");

    userEvent.click(theme);
    const themeNameThree = theme.getAttribute("aria-label");
    expect(themeNameThree).toBe("light");
  });
});
