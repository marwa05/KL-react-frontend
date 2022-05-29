import { render } from "@testing-library/react";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";

import "../../language/initialize";
import { ThemeProvider } from "../../theme";
import LinkBar from ".";

describe("Link", () => {
  it("should render correctly", async () => {
    const history = createMemoryHistory();
    const container = render(
      <ThemeProvider>
        <Router history={history}>
          <LinkBar />
        </Router>
      </ThemeProvider>
    );

    const helpLink = await container.getByTestId("help");
    expect(helpLink.href).toContain("/help");
    expect(helpLink.innerHTML).toBe("Help");

    const privacyLink = await container.getByTestId("privacy");
    expect(privacyLink.href).toContain("/privacy");
    expect(privacyLink.innerHTML).toBe("Privacy");

    const termsLink = await container.getByTestId("terms");
    expect(termsLink.href).toContain("/terms");
    expect(termsLink.innerHTML).toBe("Terms");
  });
});
