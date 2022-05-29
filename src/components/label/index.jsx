import styled from "styled-components";

const Label = styled.label.attrs((props) => ({
  "data-testid": props["data-testid"] || "label"
}))`
  display: ${({ error }) => (error ? "block" : "none")};
  padding: ${({ theme: { sizes } }) =>
    `${sizes.nano} ${sizes.tiny} ${sizes.none} ${sizes.none}`};
  color: ${({ theme, error }) =>
    error ? theme.colors.error : theme.colors.secondary};
  cursor: pointer;
  max-width: 100%;
`;

export default Label;
