import styled from "styled-components";

export const Accordions = styled.button`
  background-color: transparent;
  color: #444;
  cursor: pointer;
  padding: 18px;
  width: 100%;
  border: none;
  text-align: left;
  outline: none;
  font-size: 14px;
  font-weight: normal;
  position: static;
  transition: 0.4s;
`;

export const Panel = styled.div`
  padding: 0 18px;
  display: none;
  margin-left: 32px;
  background-color: white;
  overflow: hidden;
  p {
    color: #000;
  }
`;

export const AccordionHeader = styled.div`
  transition: 0.4s;
`;

export const AccordionContent = styled.div`
  overflow: hidden;
  height: ${({ expanded }) => (expanded ? "auto" : 0)};
`;

export const NavitemMobile = styled.a`
  cursor: pointer;
  &:hover {
    background: #1f1f1f;
  }
`;
