import Button from "../../components/button";
import Email from "../../components/email";
import Password from "../../components/password";
import Spacer from "../../components/spacer";
import Headline from "../../components/headline";
import Row from "../../components/row";
import Link from "../../components/link";
import Loader from "../../components/loader";
import Logo from "../../components/logo";
import useFetch from "../../hooks/useFetch";
import useForm from "../../hooks/useForm";
import useLanguage from "../language";
//import React, { useState } from "react";

const buildSettings = (resetForm, isReady, state) => {
  const endpoint =
    "https://my-json-server.typicode.com/kidsloop-test/accounts/sign-in";
  const delay = 5000;
  const onSuccess = (data) => {
    console.log(`Welcome to Kidsloop ${data.name}`);
    //redirectToNewPath();
    resetForm();
    window.location.replace("/home");
  };
  const onFailure = (error) => console.log("Error", error);
  const settings = {
    isReady,
    endpoint,
    state,
    onSuccess,
    onFailure,
    delay
  };
  return settings;
};

const Form = () => {
  const { translate } = useLanguage();
  const signIn = translate("signIn");
  const forgotYourPassword = translate("forgotYourPassword");
  const createAnAccount = translate("createAnAccount");

  const keys = ["email!", "password!"];
  const formSettings = useForm(keys);
  const {
    state,
    onChange,
    onSubmit,
    isReady,
    resetForm,
    onLoginSuccessful
  } = formSettings;

  const fetchSettings = buildSettings(resetForm, isReady, state);
  const { isLoading } = useFetch(fetchSettings);

  const { email, password } = state;

  return (
    <span data-testid="signInForm">
      <Logo />
      <Spacer />
      <Headline>{signIn}</Headline>
      <Spacer />
      <form onSubmit={onSubmit}>
        <Email
          defaultValue={email.value}
          error={email.error}
          onChange={onChange}
        />

        <Spacer />
        <Password
          defaultValue={password.value}
          error={password.error}
          onChange={onChange}
        />
        <Spacer />
        <Row>
          <Link to="/forgotPassword">{forgotYourPassword}</Link>
          <Button aria-label={signIn}>{signIn}</Button>
        </Row>
      </form>
      <Spacer />
      <Row>
        <Link to="/createAccount">{createAnAccount}</Link>
        {isLoading && <Loader />}
      </Row>
    </span>
  );
};

export default Form;
