import styled from "styled-components";

export const FieldInput = styled.input`
  outline: none;
  border: 0.5px solid #e2e2e2;
  padding: 0.75rem 1.25rem;
  transition: box-shadow 0.2s linear;
  border-radius: 5px;
  flex: 1;
  font-size: 16px;
  line-height: 24px;
  background: #fff;

  ${({ errorInput }) =>
    errorInput
      ? "box-shadow: 0 0 0 2px #FF5F2D;"
      : "border: 0.5px solid #e2e2e2;"};

  ::placeholder {
    color: #b4b4b4;
    background: #fff;
  }

  :focus {
    box-shadow: 0 0 0 2px #33b95a;
    outline: none;
  }
`;
