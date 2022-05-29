import styled from "styled-components";
import useLanguage from "../../templates/language";
import { FaSun, FaMoon } from "react-icons/fa";

const ThemeButton = styled.button.attrs((props) => ({
  "data-testid": props["data-testid"] || "theme",
  "aria-label": props["aria-label"] || "label"
}))`
  font-size: ${({ theme }) => theme.sizes.medium};
  background: transparent;
  border-color: transparent;
  border-width: 1px;
  border-style: solid;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.secondary};
  :hover {
    color: #ffd857;
  }
`;

const Theme = (props) => {
  const { theme, toggleTheme } = props;
  const { translate } = useLanguage();
  const ariaLabel = translate(theme);

  if (theme === "dark") {
    return (
      <span>
        <ThemeButton onClick={toggleTheme} aria-label={ariaLabel}>
          <FaSun />
        </ThemeButton>
      </span>
    );
  } else {
    return (
      <span>
        <ThemeButton onClick={toggleTheme} aria-label={ariaLabel}>
          <FaMoon />
        </ThemeButton>
      </span>
    );
  }
};

export default Theme;
