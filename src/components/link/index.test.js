import { render } from "@testing-library/react";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";

import { ThemeProvider } from "../../theme";
import Link from ".";

describe("Link", () => {
  it("should render correctly", async () => {
    const to = "/hello";
    const greeting = "hello";

    const history = createMemoryHistory();
    const container = render(
      <ThemeProvider>
        <Router history={history}>
          <Link to={to}>{greeting}</Link>
        </Router>
      </ThemeProvider>
    );
    const link = await container.getByTestId("link");

    expect(link.href).toContain(to);
    expect(link.innerHTML).toBe(greeting);
  });
});
