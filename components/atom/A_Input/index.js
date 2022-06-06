import React from "react";
import { FieldInput } from "./style";

const Input = (props) => {
  const {
    inputName,
    inputType,
    errorInput,
    inputPlaceHolder,
    inputValue,
    ...nativeProps
  } = props;

  return (
    <FieldInput
      id={inputName}
      type={inputType}
      value={inputValue}
      name={inputName}
      errorInput={errorInput}
      autoComplete="off"
      placeholder={inputPlaceHolder}
      {...nativeProps}
    />
  );
};

export default Input;
