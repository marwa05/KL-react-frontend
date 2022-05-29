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
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const buildSettings = (resetForm, isReady, state) => {
  const endpoint =
    "https://my-json-server.typicode.com/kidsloop-test/accounts/sign-up";
  const delay = 5000;
  const onSuccess = (data) => {
    console.log(`id is ${data.id}`);
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
  const createAccount = translate("createAccount");
  const submit = translate("submit");
  const goBack = translate("goBack");
  const forgotPassword = translate("forgotPassword");
  const successSignUp = translate("successSignUp");

  const notify = () => toast(successSignUp);

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
    <span data-testid="createAccountForm">
      <Logo />
      <Spacer />
      <Headline>{createAccount}</Headline>
      <Spacer />
      <form onSubmit={onSubmit} onSuccess={notify}>
        <Email
          defaultValue={email.value}
          error={email.error}
          onChange={onChange}
          required
        />
        <Spacer />
        <Password
          defaultValue={password.value}
          error={password.error}
          onChange={onChange}
          required
        />
        <Spacer />
        <Spacer />
        <Row>
          <Link to="/">{goBack}</Link>
          <Button aria-label={submit}>{submit}</Button>
        </Row>
      </form>
      <Spacer />

      <Row>
        <Link to="/forgotPassword">{forgotPassword}</Link>
        {isLoading && <Loader />}
      </Row>
    </span>
  );
};

export default Form;
