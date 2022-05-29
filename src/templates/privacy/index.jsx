import React from "react";

import Headline from "../../components/headline";
import useLanguage from "../language";
import Link from "../../components/link";
import Spacer from "../../components/spacer";
import PageTemplate from "../../components/pageTemplate";
import Logo from "../../components/logo";

const Privacy = () => {
  const { translate } = useLanguage();
  const privacy = translate("privacy");
  const goBack = translate("goBack");

  return (
    <span>
      <PageTemplate>
        <Logo />
        <Spacer />
        <Spacer />

        <Headline>{privacy}</Headline>
        <Spacer />
        <Spacer />
        <Spacer />
        <Spacer />
        <Link to="/">{goBack}</Link>
      </PageTemplate>
    </span>
  );
};

export default Privacy;
