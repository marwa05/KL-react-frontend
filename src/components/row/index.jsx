import styled from "styled-components";

const Row = styled.div.attrs((props) => ({
  "data-testid": props["data-testid"] || "row"
}))`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default Row;
