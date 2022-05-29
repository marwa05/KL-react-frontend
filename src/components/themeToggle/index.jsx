import Cell from "../cell";
import Spacer from "../spacer";
import Theme from "../theme";
import Language from "../language";

import { useTheme } from "../../theme";

const themeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <Cell>
      <Theme theme={theme} toggleTheme={toggleTheme} />
      <Spacer />
      <Language />
    </Cell>
  );
};

export default themeToggle;
