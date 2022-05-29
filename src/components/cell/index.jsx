import styled from "styled-components";

const Cell = styled.span.attrs((props) => ({
  "data-testid": props["data-testid"] || "cell"
}))`
  display: flex;
  justify-content: space-between;
`;

export default Cell;
