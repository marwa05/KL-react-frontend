import { render } from "@testing-library/react";

import "../../language/initialize";
import { ThemeProvider } from "../../theme";
import Logo from ".";

describe("Logo", () => {
  it("should render correctly", async () => {
    const container = render(
      <ThemeProvider>
        <Logo />
      </ThemeProvider>
    );
    const logo = await container.getByTestId("logo");
    expect(logo).not.toBeFalsy();
  });
});
