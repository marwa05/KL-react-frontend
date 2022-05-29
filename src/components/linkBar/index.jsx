import useLanguage from "../../templates/language";

import Cell from "../cell";
import Spacer from "../spacer";
import Link from "../link";

const LinkBar = () => {
  const { translate } = useLanguage();

  const help = translate("help");
  const privacy = translate("privacy");
  const terms = translate("terms");

  return (
    <Cell>
      <Link to="/help" data-testid="help">
        {help}
      </Link>
      <Spacer />
      <Link to="/privacy" data-testid="privacy">
        {privacy}
      </Link>
      <Spacer />
      <Link to="/terms" data-testid="terms">
        {terms}
      </Link>
    </Cell>
  );
};

export default LinkBar;
