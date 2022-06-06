import styled from "styled-components";

export const TextLabel = styled.label`
  font-size: 12px;
  text-align: start;
  margin-left: 2px;

  ${({ active }) =>
    active &&
    `
    color: #068EC8;
  `}
  ${({ errorLabel }) =>
    errorLabel &&
    `
  color: #FF0000;`}
`;
