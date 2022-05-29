//import React from "react";

import Headline from "../../components/headline";
import useLanguage from "../language";
import Link from "../../components/link";
import Spacer from "../../components/spacer";
import React, { useState } from "react";
import PageTemplate from "../../components/pageTemplate";
import Logo from "../../components/logo";

const Terms = () => {
  const { translate } = useLanguage();
  const terms = translate("terms");
  const goBack = translate("goBack");

  return (
    <span>
      <PageTemplate>
        <Logo />
        <Spacer />
        <Spacer />

        <Headline>{terms}</Headline>
        <Spacer />
        <Spacer />
        <Spacer />
        <Spacer />
        <Link to="/">{goBack}</Link>
      </PageTemplate>
    </span>
  );
};

export default Terms;
