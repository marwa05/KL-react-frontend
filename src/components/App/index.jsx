import { Switch, Route } from "react-router-dom";

import SignIn from "../../templates/signIn";
import CreateAccount from "../../templates/createAccount";
import ForgotPassword from "../../templates/forgotPassword";

import Help from "../../templates/help";
import Privacy from "../../templates/privacy";
import Terms from "../../templates/terms";
import Home from "../../templates/home";

const App = () => (
  <Switch>
    <Route path="/createAccount">
      <CreateAccount />
    </Route>
    <Route path="/forgotPassword">
      <ForgotPassword />
    </Route>
    <Route path="/help">
      <Help />
    </Route>
    <Route path="/privacy">
      <Privacy />
    </Route>
    <Route path="/terms">
      <Terms />
    </Route>
    <Route path="/home">
      <Home />
    </Route>
    <Route path="/">
      <SignIn />
    </Route>
  </Switch>
);

export default App;
