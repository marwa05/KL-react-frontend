import styled from "styled-components";

const Spacer = styled.div.attrs((props) => ({
  "data-testid": props["data-testid"] || "spacer"
}))`
  display: block;
  height: ${({ theme }) => theme.sizes.tiny};
  width: ${({ theme }) => theme.sizes.tiny};
`;

export default Spacer;
