import React from "react";
import { EyeIcon } from "./style";

const IconContainer = (props) => {
  const { children } = props;
  return <EyeIcon>{children}</EyeIcon>;
};

export default IconContainer;
