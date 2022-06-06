import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Main = styled.main`
  display: flex;
  padding: 0px 52px;
  max-width: 1290px;
  margin: auto;

  @media only screen and (max-width: 900px) {
    flex-direction: column;
    padding: 15px;
  }
`;

export const SubMain = styled.div`
  margin-right: 24px;
  margin-bottom: 24px;
  @media only screen and (max-width: 900px) {
    margin: 0;
  }
`;

export const StyledFieldSet = styled.fieldset`
  border-left: 0px;
  border-bottom: 0px;
  border-top: 1.5px solid #dddddd;
  border-right: 1.5px solid #dddddd;
`;

export const StyledLegend = styled.legend`
  margin: 0px 0px 10px 0px;
  @media only screen and (max-width: 900px) {
    margin: 0;
  }
`;

export const CommentSection = styled.section`
  display: flex;
  align-content: space-evenly;
  align-items: center;
  align-content: center;
  margin-left: ${({ subComment }) => subComment && "148px"};
  @media only screen and (max-width: 900px) {
    margin-left: ${({ subComment }) => subComment && "38px"};
  }
`;

export const ImageContainer = styled.div`
  margin: 20px 20px 0px 0px;
  @media only screen and (max-width: 900px) {
    margin: 0;
  }
`;

export const VoteArrow = styled(FontAwesomeIcon)`
  width: 20px;
  height: 20px;
  color: ${({ isClicked, isClickedDown }) => {
    if (isClicked) {
      return "#ffffff";
    } else if (isClickedDown) {
      return "#ffffff";
    } else {
      return "#000000";
    }
  }};
  background-color: ${({ isClicked, isClickedDown }) => {
    if (isClicked) {
      return "#33B95A";
    } else if (isClickedDown) {
      return "#FF5F2D";
    } else {
      return "#dddddd";
    }
  }};
  padding: 4px;
  cursor: pointer;
  margin: 0px 4px;

  &:hover {
    background: ${({ isup }) => (isup ? "#33B95A" : "#FF5F2D")};
    color: #fff;
  }
`;

export const LinkDiscussion = styled.a`
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

export const Aside = styled.aside`
  @media only screen and (max-width: 900px) {
    margin-top: 24px;
  }
`;

export const ContainerDiscussion = styled.div`
  display: flex;
  justify-content: start;
  flex-direction: row;
  align-content: center;
  align-items: center;
  text-align: left;
  align-self: start;
`;

export const NumberDiscussion = styled.span`
  background: #676057;
  color: #fff;
  text-align: center;
  display: flex;
  justify-content: space-between;
  padding: 5px;
`;
