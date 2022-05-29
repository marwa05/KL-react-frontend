import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ThemeProvider } from "../../theme";

import Button from ".";

describe("Button", () => {
  it("should render correctly", async () => {
    const container = render(
      <ThemeProvider>
        <Button>Submit</Button>
      </ThemeProvider>
    );
    const button = await container.getByTestId("submit");
    expect(button.type).toBe("submit");
    expect(button.innerHTML).toBe("Submit");
  });

  it("should invoke onClick handler when clicked", async () => {
    const onClick = jest.fn();
    const container = render(
      <ThemeProvider>
        <Button onClick={onClick}>Submit</Button>
      </ThemeProvider>
    );
    const button = await container.getByTestId("submit");
    userEvent.click(button);
    expect(onClick).toHaveBeenCalled();
  });
});
