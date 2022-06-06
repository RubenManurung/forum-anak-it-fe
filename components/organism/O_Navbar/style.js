import styled from "styled-components";

export const Navbar = styled.nav`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  align-content: center;
  background: #71695f;
  max-width: 1280px;
  margin: auto;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  z-index: 8;
  @media only screen and (max-width: 900px) {
    display: none;
  }
`;

export const NavbarMobile = styled.nav`
  display: none;
  @media only screen and (max-width: 900px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    align-content: center;
    background: #71695f;
    max-width: 1280px;
    margin: auto;
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    z-index: 8;
  }
`;

export const SideNavbar = styled.section`
  height: 100%;
  width: ${({ toggle }) => (toggle ? "250px" : "0px")};
  position: fixed;
  z-index: 1;
  top: 0;
  right: 0;
  background-color: #333333;
  overflow-x: hidden;
  transition: 0.8s;
  padding-top: 60px;
  text-align: right;
  a {
    padding: 8px 8px 8px 32px;
    text-decoration: none;
    font-size: 25px;
    color: #818181;
    display: block;
    transition: 0.3s;
  }

  a:hover {
    color: #f1f1f1;
  }

  @media screen and (max-height: 450px) {
    .sidenav {
      padding-top: 15px;
    }
    .sidenav a {
      font-size: 18px;
    }
  }
`;

export const ButtonClose = styled.button`
  margin-top: -50px;
  float: right;
  padding: 8px 20px;
  background: #ff5f2d;
  border: none;
  border-radius: 0.25rem;
`;

export const SearchContainer = styled.section`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  transition: 0.3s linear;
  background: #bbb5ae;
  border-radius: 0.25rem;
  width: ${({ isMobile }) => (isMobile ? "100%" : "42rem")};
  &::focus {
    background: #fff;
  }
`;

export const Search = styled.input`
  outline: none;
  padding: 0.5rem 1.25rem;
  border-radius: 0.25rem;
  background: inherit;
  border: none;
  width: 100%;
  color: #686662;
  &:focus {
    background: #fff;
  }
`;

export const StyledUl = styled.ul`
  display: flex;
  flex-direction: row;
  list-style: none;
`;

export const StyledLi = styled.li`
  padding: 16px;
  cursor: pointer;
  background: ${({ isActive }) => (isActive ? "#1f1f1f" : "transparent")};
  &:hover {
    background: #1f1f1f;
  }
`;

export const NavitemMobile = styled.a`
  cursor: pointer;
  &:hover {
    background: #1f1f1f;
  }

  @media only screen and (max-width: 900px) {
    margin-right: 24px;
  }
`;

export const DropDownItem = styled.p`
  display: ${({ isShow }) => (isShow ? "block" : "none")};
  width: 100%;
  padding: 20px 18px;
  text-align: left;
  color: #fff;
  margin: 0px 120px 0px 0px;
  &:hover {
    background: #1f1f1f;
  }
`;
