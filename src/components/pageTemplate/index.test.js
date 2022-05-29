import { render } from "@testing-library/react";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";

import "../../language/initialize";
import { ThemeProvider } from "../../theme";
import PageTemplate from ".";

describe("PageTemplate", () => {
  it("should render correctly", async () => {
    const history = createMemoryHistory();
    const container = render(
      <ThemeProvider>
        <Router history={history}>
          <PageTemplate>
            <span data-testid="hello">hello</span>
          </PageTemplate>
        </Router>
      </ThemeProvider>
    );

    const hello = await container.getByTestId("hello");
    expect(hello.innerHTML).toBe("hello");
  });
});
