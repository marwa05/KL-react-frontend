import { Link as RouterLink } from "react-router-dom";
import styled from "styled-components";

const Link = styled(RouterLink).attrs((props) => ({
  "data-testid": props["data-testid"] || "link"
}))`
  color: ${({ theme }) => theme.colors.secondary};
  text-decoration: none;
  border-color: transparent;
  border-width: 1px;
  border-style: solid;
  :hover {
    text-decoration: underline;
  }
`;

export default Link;
