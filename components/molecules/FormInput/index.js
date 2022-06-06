import React from "react";
import InputContainer from "./InputContainer";
import A_Label from "@components/atom/A_Label";
import A_Input from "@components/atom/A_Input";
import TextError from "@components/atom/TextError";
import IconContainer from "./IconContainer";

const FormInput = (props) => {
  const {
    title,
    inputValue,
    isIcon,
    activeInputElement,
    errorInput,
    validateInputError,
    inputCategory,
    inputName,
    inputType,
    inputPlaceHolder,
    children,
    ...nativeProps
  } = props;

  return (
    <>
      <A_Label
        title={title}
        activeInputElement={activeInputElement === inputName}
        errorLabel={errorInput}
      />

      <InputContainer>
        <A_Input
          inputType={inputType}
          inputName={inputName}
          inputValue={inputValue}
          errorInput={errorInput}
          inputPlaceHolder={inputPlaceHolder}
          {...nativeProps}
        />

        {isIcon && <IconContainer>{children}</IconContainer>}
      </InputContainer>
      <TextError>{validateInputError}</TextError>
    </>
  );
};

export default FormInput;
