import React from "react";
import { Container } from "./style";

const InputContainer = (props) => {
  const { active, errorInput, children } = props;
  return (
    <Container active={active} errorDivContainer={errorInput}>
      {children}
    </Container>
  );
};

export default InputContainer;
