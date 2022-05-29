import { render } from "@testing-library/react";

import { ThemeProvider } from "../../theme";

import Headline from ".";

describe("Headline", () => {
  it("should render correctly", async () => {
    const container = render(
      <ThemeProvider>
        <Headline>Submit</Headline>
      </ThemeProvider>
    );
    const headline = await container.getByTestId("headline");
    expect(headline).not.toBeFalsy();
  });
});
