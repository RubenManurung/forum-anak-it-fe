import React from "react";
import { PrButton } from "./style";

const Index = (props) => {
  const { type, children, ...nativeProps } = props;
  return (
    <PrButton type={type} {...nativeProps}>
      {children}
    </PrButton>
  );
};

export default Index;
