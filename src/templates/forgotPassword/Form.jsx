import Button from "../../components/button";
import Email from "../../components/email";
import Spacer from "../../components/spacer";
import Headline from "../../components/headline";
import Row from "../../components/row";
import Link from "../../components/link";
import Loader from "../../components/loader";
import Logo from "../../components/logo";
import useFetch from "../../hooks/useFetch";
import useForm from "../../hooks/useForm";
import useLanguage from "../language";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const buildSettings = (resetForm, isReady, state) => {
  const endpoint =
    "https://my-json-server.typicode.com/kidsloop-test/accounts/reset-password";
  const delay = 5000;
  const onSuccess = (data) => {
    console.log(`actionCompleted is ${data.actionCompleted}`);
    resetForm();
    window.location.replace("/signin");
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
  const forgotPassword = translate("forgotPassword");
  const submit = translate("submit");
  const goBack = translate("goBack");
  const createAnAccount = translate("createAnAccount");
  const successForgot = translate("successForgot");

  const notify = () => toast(successForgot);

  const keys = ["email!"];
  const formSettings = useForm(keys);
  const { state, onChange, onSubmit, isReady, resetForm } = formSettings;

  const fetchSettings = buildSettings(resetForm, isReady, state);
  const { isLoading } = useFetch(fetchSettings);

  const { email } = state;
  const [style, setStyle] = useState({ display: "none", color: "#5Cb85c" });

  return (
    <span data-testid="forgotPasswordForm">
      <Logo />
      <Spacer />
      <Headline>{forgotPassword}</Headline>
      <Spacer />
      <form onSubmit={onSubmit}>
        <Email
          defaultValue={email.value}
          error={email.error}
          onChange={onChange}
        />
        <Spacer />
        <p id="hidden" style={style}>
          {successForgot}
        </p>
        <Spacer />

        <Row>
          <Link to="/">{goBack}</Link>
          <Button onClick={notify} aria-label={submit}>
            {submit}
          </Button>
        </Row>
      </form>
      <div>
        <ToastContainer />
      </div>
      <Spacer />
      <Row>
        <Link to="/createAccount">{createAnAccount}</Link>
        {isLoading && <Loader />}
      </Row>
    </span>
  );
};

export default Form;
