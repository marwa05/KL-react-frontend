import styled from "styled-components";

const Card = styled.div.attrs((props) => ({
  "data-testid": props["data-testid"] || "card"
}))`
  padding: ${({ theme }) => theme.sizes.medium};
  box-shadow: ${({ theme }) => theme.shadows.card};
  width: ${({ theme }) => theme.sizes.huge};
  max-width: ${({ theme }) => theme.sizes.huge};
  border-radius: ${({ theme }) => theme.sizes.tiny};
  background-color: ${({ theme }) => theme.colors.card};
`;

export default Card;
