import { render } from "@testing-library/react";

import { ThemeProvider } from "../../theme";
import Loader from ".";

describe("Loader", () => {
  it("should render correctly", async () => {
    const container = render(
      <ThemeProvider>
        <Loader />
      </ThemeProvider>
    );
    const loader = await container.getByTestId("loader");
    expect(loader).not.toBeFalsy();
  });
});
