import { Fragment } from "react";
import Input from "../input";
import Label from "../label";
import useLanguage from "../../templates/language";

const Email = (props) => {
  const {
    value,
    error,
    onChange,
    id = "email",
    pattern = "[a-zA-Z0-9.]+@([a-zA-Z0-9]+.)+[a-zA-Z]{2,4}||[+0-9]{8,15}",
    ...rest
  } = props;
  const { translate } = useLanguage();
  const placeholder = translate("emailOrPhone");

  return (
    <Fragment>
      <Input
        placeholder={placeholder}
        type="text"
        value={value}
        error={error}
        onChange={onChange}
        pattern={pattern}
        id={id}
        data-testid="email-input"
        {...rest}
      />
      <Label htmlFor="email" error={error} data-testid="email-label">
        {error}
      </Label>
    </Fragment>
  );
};

export default Email;
