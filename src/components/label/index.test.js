import { render } from "@testing-library/react";

import "../../language/initialize";
import { ThemeProvider } from "../../theme";

import Label from ".";

describe("Label", () => {
  it("should render correctly with error", async () => {
    const error = "bad robot";
    const container = render(
      <ThemeProvider>
        <Label error={error}>{error}</Label>
      </ThemeProvider>
    );
    const label = await container.getByTestId("label");
    expect(window.getComputedStyle(label).display).toBe("block");
  });

  it("should render correctly with no error", async () => {
    const container = render(
      <ThemeProvider>
        <Label>good robot</Label>
      </ThemeProvider>
    );
    const label = await container.getByTestId("label");
    expect(window.getComputedStyle(label).display).toBe("none");
  });
});
