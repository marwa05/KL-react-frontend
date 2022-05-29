import { render } from "@testing-library/react";

import Row from ".";

describe("Row", () => {
  it("should render correctly", async () => {
    const container = render(<Row>hello</Row>);
    const row = await container.getByTestId("row");
    expect(row).not.toBeFalsy();
  });
});
