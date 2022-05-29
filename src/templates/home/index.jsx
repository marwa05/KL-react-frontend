import React from "react";

import Headline from "../../components/headline";
import Link from "../../components/link";
import Button from "../../components/button";

import useLanguage from "../language";
import ThemeToggle from "../../components/themeToggle";
import Spacer from "../../components/spacer";
import Card from "../../components/card";
import Logo from "../../components/logo";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Home = () => {
  const { translate } = useLanguage();
  const home1 = translate("home1");
  const home2 = translate("home2");
  const logout = translate("logout");
  const successLogOut = translate("successLogOut");

  const notify = () => toast(successLogOut);
  return (
    <span>
      <Card>
        <Spacer />
        <Logo />
        <h1>{home1}</h1>

        <Spacer />
        <Spacer />

        <p>{home2}</p>

        <Spacer />

        <div>
          <Button onClick={notify} to="/">
            {" "}
            <Link action={notify} to="/">
              {logout}
            </Link>{" "}
          </Button>
          <ToastContainer />
        </div>
      </Card>
      <Spacer />
      <Spacer />
      <ThemeToggle />
    </span>
  );
};

export default Home;
