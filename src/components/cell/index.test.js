import { render } from "@testing-library/react";

import { ThemeProvider } from "../../theme";
import Cell from ".";

describe("Cell", () => {
  it("should render correctly", async () => {
    const container = render(
      <ThemeProvider>
        <Cell>Submit</Cell>
      </ThemeProvider>
    );
    const cell = await container.getByTestId("cell");
    expect(cell).not.toBeFalsy();
  });
});
