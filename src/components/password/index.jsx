import { Fragment } from "react";

import Input from "../input";
import Label from "../label";
import useLanguage from "../../templates/language";

const Password = (props) => {
  const {
    value,
    error,
    onChange,
    id = "password",
    autoComplete = "on",
    pattern = "[a-zA-Z0-9_]{6,}",
    ...rest
  } = props;
  const { translate } = useLanguage();
  const placeholder = translate("password");

  return (
    <Fragment>
      <Input
        placeholder={placeholder}
        type="password"
        value={value}
        error={error}
        onChange={onChange}
        id={id}
        autoComplete={autoComplete}
        pattern={pattern}
        data-testid="password-input"
        {...rest}
      />
      <Label htmlFor="password" error={error} data-testid="password-label">
        {error}
      </Label>
    </Fragment>
  );
};

export default Password;
