import { render } from "@testing-library/react";

import { ThemeProvider } from "../../theme";
import Spacer from ".";

describe("Spacer", () => {
  it("should render correctly", async () => {
    const container = render(
      <ThemeProvider>
        <Spacer />
      </ThemeProvider>
    );
    const spacer = await container.getByTestId("spacer");
    expect(spacer).not.toBeFalsy();
  });
});
