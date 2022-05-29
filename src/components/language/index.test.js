import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import "../../language/initialize";
import { ThemeProvider } from "../../theme";

import Language from ".";

describe("Language", () => {
  it("should render with correct languages", async () => {
    const container = render(
      <ThemeProvider>
        <Language />
      </ThemeProvider>
    );

    const english = await container.findByTestId("language-en");
    const french = await container.findByTestId("language-fr");

    expect(english).not.toBeFalsy();
    expect(french).not.toBeFalsy();
  });

  it("should render with English set to default", async () => {
    const container = render(
      <ThemeProvider>
        <Language />
      </ThemeProvider>
    );

    const english = await container.findByTestId("language-en");
    expect(english.selected).toBeTruthy();
  });

  it("should switch to French when it is selected", async () => {
    const container = render(
      <ThemeProvider>
        <Language />
      </ThemeProvider>
    );

    const language = await container.findByTestId("language");
    userEvent.selectOptions(language, "fr");

    const french = await container.findByTestId("language-fr");
    expect(french.selected).toBeTruthy();
  });
  it("should switch to English when it is selected", async () => {
    const container = render(
      <ThemeProvider>
        <Language />
      </ThemeProvider>
    );

    const language = await container.findByTestId("language");

    userEvent.selectOptions(language, "fr");
    const french = await container.findByTestId("language-fr");
    expect(french.selected).toBeTruthy();

    userEvent.selectOptions(language, "en");
    const english = await container.findByTestId("language-en");
    expect(english.selected).toBeTruthy();
  });
});
