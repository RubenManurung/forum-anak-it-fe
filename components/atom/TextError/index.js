import React from "react";
import { ErrorText } from "./style";

const TextError = (props) => {
  const { children } = props;
  return <ErrorText>{children}</ErrorText>;
};

export default TextError;
