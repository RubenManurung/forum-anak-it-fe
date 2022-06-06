import styled from "styled-components";

export const ScButton = styled.button`
  background-color: #dddddd;
  border: none;
  outline: none;
  border-radius: 5px;
  color: #635c53;
  font-size: 0.9rem;
  transition: all 0.2s ease-in-out;
  padding: 0.75rem 1.5rem;
  margin-top: 8px;
  margin-right: 8px;
  align-self: start;

  &:disabled {
    opacity: 0.3;
    cursor: unset;
    transform: unset !important;
  }

  &:hover {
    cursor: pointer;
  }
`;
