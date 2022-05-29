import styled from "styled-components";

const Input = styled.input.attrs((props) => ({
  "data-testid": props["data-testid"] || "input",
  required: props.required || false
}))`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.sizes.small};
  border-radius: ${({ theme }) => theme.sizes.tiny};
  border: ${({ theme, error }) =>
    error
      ? `solid ${theme.colors.error} 1px`
      : `solid ${theme.colors.inputBorder} 1px`};
  padding: ${({ theme }) => `${theme.sizes.tiny}`};
  background-color: transparent;
  width: 100%;
`;

export default Input;
