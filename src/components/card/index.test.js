import { render } from "@testing-library/react";
import { ThemeProvider } from "../../theme";

import Card from ".";

describe("Card", () => {
  it("should render correctly", async () => {
    const container = render(
      <ThemeProvider>
        <Card>Submit</Card>
      </ThemeProvider>
    );
    const card = await container.getByTestId("card");
    expect(card).not.toBeFalsy();
  });
});
