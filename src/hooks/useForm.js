import { useState } from "react";
import { useNavigate } from "react-router-dom";

const clone = (value) => JSON.parse(JSON.stringify(value));

const addKey = (map, rawKey) => {
  const [key, required] = rawKey.endsWith("!")
    ? [rawKey.slice(0, -1), true]
    : [rawKey, false];
  map[key] = { value: "", error: "", required };
  return map;
};

const updateState = (state, key) => {
  const { value, required } = state[key];

  if (value.length === 0 && required) {
    const error = `Please do not leave ${key} empty. It is a required field!`;
    state[key].error = error;
  }
  return state;
};

const checkForm = (oldState) => {
  const keys = Object.keys(oldState);
  const newState = keys.reduce(updateState, clone(oldState));
  const isInvalidField = (key) => Boolean(newState[key].error.length > 0);
  const isValidForm = keys.map(isInvalidField).filter(Boolean).length === 0;
  const results = { isValidForm, newState };
  return results;
};

const hackToClearAutoFillValuesFromInputFields = (state) => {
  const clearAutoFillForInputField = (key) => {
    const field = document.querySelector(`#${key}`) || { value: "" };
    field.value = "";
  };
  Object.keys(state).forEach(clearAutoFillForInputField);
};

const useForm = (keys) => {
  const initialState = keys.reduce(addKey, {});
  const [state, setState] = useState(initialState);
  const [isReady, setIsReady] = useState(false);

  const resetForm = () => {
    setState(initialState);
    hackToClearAutoFillValuesFromInputFields(initialState);
    setIsReady(false);
  };

  const onChange = (event) => {
    const field = event.target;
    const error = field.validationMessage;
    const value = field.value;

    const newState = clone(state);
    newState[field.id].value = value;
    newState[field.id].error = error;
    setState(newState);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const { isValidForm, newState } = checkForm(state);
    setState(newState);
    setIsReady(isValidForm);
    console.log(`onSubmit here`);
  };

  const onLoginSuccessful = (event) => {
    console.log(`onLoginSuccessful here`);
  };

  const redirectToNewPath = () => {
    console.log(`redirectToNewPath here`);
  };

  const results = {
    state,
    onChange,
    onSubmit,
    isReady,
    setIsReady,
    resetForm,
    onLoginSuccessful,
    redirectToNewPath
  };
  return results;
};

export default useForm;
