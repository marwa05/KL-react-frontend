import React from "react";

import Headline from "../../components/headline";
import useLanguage from "../language";
import Link from "../../components/link";
import Spacer from "../../components/spacer";
import PageTemplate from "../../components/pageTemplate";
import Logo from "../../components/logo";

const Help = () => {
  const { translate } = useLanguage();
  const help = translate("help");
  const goBack = translate("goBack");

  return (
    <span>
      <PageTemplate>
        <Logo />
        <Spacer />
        <Spacer />

        <Headline>{help}</Headline>
        <Spacer />
        <Spacer />
        <Spacer />
        <Spacer />
        <Link to="/">{goBack}</Link>
      </PageTemplate>
    </span>
  );
};

export default Help;
