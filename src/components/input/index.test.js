import { render } from "@testing-library/react";

import { ThemeProvider } from "../../theme";

import Input from ".";

describe("Input", () => {
  it("should render correctly", async () => {
    const container = render(
      <ThemeProvider>
        <Input value="hello" onChange={() => {}} />
      </ThemeProvider>
    );
    const input = await container.getByTestId("input");
    expect(input.value).toBe("hello");
  });
});
