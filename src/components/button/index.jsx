import styled from "styled-components";

const Button = styled.button.attrs((props) => ({
  type: "submit",
  "data-testid": props["data-testid"] || "submit"
}))`
  color: ${({ theme }) => theme.colors.buttonText};
  background-color: ${({ theme }) => theme.colors.primary};
  padding: ${({ theme }) => `${theme.sizes.tiny} ${theme.sizes.small}`};
  border-radius: ${({ theme }) => theme.sizes.tiny};
  border-color: transparent;
  border-width: 1px;
  border-style: solid;
  cursor: pointer;
  font-size: ${({ theme }) => theme.sizes.small};
`;

export default Button;
