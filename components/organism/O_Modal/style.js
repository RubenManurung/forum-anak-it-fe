import styled from "styled-components";

export const RootContainer = styled.div`
  display: ${(props) => (props.open ? "block" : "none")};
  position: fixed;
  z-index: 999;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
`;

export const ModalContentContainer = styled.div`
  position: relative;
  top: 50%;
  transform: translate(0, -50%);
  background-color: #fefefe;
  margin: auto;
  padding: 32px;
  border: 1px solid #888;
  transition: 0.4s all ease-in;
  border-radius: 8px;
  width: 550px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  -webkit-animation-name: animatetop;
  -webkit-animation-duration: 0.4s;
  animation-name: animatetop;
  animation-duration: 0.4s @-webkit-keyframes animatetop {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes animatetop {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @media only screen and (max-width: 900px) {
    max-width: 80%;
    margin: 10%;
  }
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;
