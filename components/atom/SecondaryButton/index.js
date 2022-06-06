import React from "react";
import { ScButton } from "./style";

const Index = (props) => {
  const { type, children, ...nativeProps } = props;
  return (
    <ScButton type={type} {...nativeProps}>
      {children}
    </ScButton>
  );
};

export default Index;
