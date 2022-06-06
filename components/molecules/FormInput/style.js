import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  transition: 0.3s linear;
  background: #ffffff;
  margin-bottom: 2px;
  font-weight: 700;
`;

export const EyeIcon = styled.div`
  position: absolute;
  height: 20px;
  width: 20px;
  right: 10px;

  :hover {
    border: 2px solid #068ec8;
  }
`;
