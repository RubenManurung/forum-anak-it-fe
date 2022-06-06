import React from "react";
import { TextLabel } from "./style";

const Index = (props) => {
  const { title, activeInputElement, errorLabel } = props;

  return (
    <TextLabel active={activeInputElement} errorLabel={errorLabel}>
      {title}
    </TextLabel>
  );
};

export default Index;
