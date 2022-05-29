import styled from "styled-components";

const Headline = styled.h1.attrs((props) => ({
  "data-testid": props["data-testid"] || "headline"
}))`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.sizes.large};
`;

export default Headline;
