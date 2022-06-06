import React from "react";
import { AccordionHeader, AccordionContent, NavitemMobile } from "./style";

const Index = (props) => {
  const { title, selectedMenuNav, handleMenuSelect, setOpenModal, children } =
    props;

  const isSelected = selectedMenuNav === title;

  const handleClick = () => {
    if (isSelected) {
      handleMenuSelect("");
      return;
    }

    handleMenuSelect(title);
  };

  return (
    <>
      <AccordionHeader
        onClick={() => {
          handleClick();
        }}
      >
        <NavitemMobile>{title}</NavitemMobile>
      </AccordionHeader>
      <AccordionContent expanded={isSelected}>{children}</AccordionContent>
    </>
  );
};

export default Index;
