import styled from "styled-components";
import SVG from "react-inlinesvg";

import logo from "../../assets/logo_kl.svg";
import useLanguage from "../../templates/language";

const StyledSVG = styled(SVG).attrs((props) => ({
  "data-testid": props["data-testid"] || "logo"
}))`
  width: ${({ theme }) => theme.sizes.big};
  height: ${({ theme }) => theme.sizes.big};
`;

const Logo = () => {
  const { translate } = useLanguage();
  const title = translate("logo");

  return <StyledSVG src={logo} title={title} />;
};

export default Logo;
