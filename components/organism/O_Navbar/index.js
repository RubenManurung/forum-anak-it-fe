import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import O_Accordion from "@components/organism/O_Accordion";
import O_Modal from "@components/organism/O_Modal";
import FormInput from "@components/molecules/FormInput";
import { MENU_LIST } from "./constatant";
import {
  Navbar,
  NavbarMobile,
  SideNavbar,
  ButtonClose,
  Search,
  SearchContainer,
  StyledUl,
  StyledLi,
  NavitemMobile,
  DropDownItem,
  PrButton,
} from "./style";
import PrimaryButton from "@components/atom/PrimaryButton";

const Index = () => {
  const [hamburgerToggle, setHamburgerToggle] = useState(false);
  const [selectedMenuNav, setSelectedMenuNav] = useState("");
  const [userAccount, setUserAccount] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [errorValidation, setErrorValidation] = useState({});

  const handleMenuSelect = (title) => {
    setSelectedMenuNav(title);
  };

  const validationLogin = (data) => {
    let errorValidation = {};
    if (selectedMenuNav === "Register") {
      if (!data.name) {
        errorValidation.name = "wajib diisi";
      }
    }
    if (!data.email) {
      errorValidation.email = "wajib diisi";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(data.email)) {
      errorValidation.email = "format email salah";
    }

    if (!data.password) {
      errorValidation.password = "wajib diisi";
    }

    if (Object.keys(errorValidation).length === 0) {
      alert(`Berhasil ${selectedMenuNav}`);
    }

    return errorValidation;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "name" && e.target.value) {
      errorValidation.name = "";
    }
    if (name === "email" && e.target.value) {
      errorValidation.email = "";
    }
    if (name === "password" && e.target.value) {
      errorValidation.password = "";
    }

    setUserAccount({
      ...userAccount,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorValidation(validationLogin(userAccount));
  };

  return (
    <>
      <NavbarMobile style={{ background: " #71695f" }}>
        <h3 style={{ color: "#fff", marginLeft: 24, padding: 4 }}>
          Forum Anak IT
        </h3>
        <button
          onClick={() => setHamburgerToggle(!hamburgerToggle)}
          style={{
            marginRight: "24px",
            display: "flex",
            justifyContent: "center",
            padding: 6,
          }}
        >
          <FontAwesomeIcon
            icon={faBars}
            style={{
              width: 16,
              height: 16,
              color: "#222222",
            }}
          />
        </button>

        <SideNavbar id="mySidenav" toggle={hamburgerToggle}>
          <div style={{ margin: 20 }}>
            <ButtonClose onClick={() => setHamburgerToggle(!hamburgerToggle)}>
              <FontAwesomeIcon
                icon={faClose}
                style={{
                  width: 16,
                  height: 16,
                  color: "#fff",
                }}
              />
            </ButtonClose>
            <div style={{ marginBottom: 20 }}>
              <SearchContainer isMobile={true}>
                <Search type="text" placeholder="Search" />
                <div
                  style={{
                    position: "absolute",
                    height: 20,
                    width: 20,
                    right: 10,
                  }}
                >
                  <FontAwesomeIcon
                    icon={faSearch}
                    style={{
                      width: 16,
                      height: 16,
                      color: "#222222",
                      marginRight: "8px",
                    }}
                  />
                </div>
              </SearchContainer>
            </div>

            {MENU_LIST.map((value, idx) => {
              return (
                <O_Accordion
                  key={idx}
                  title={value.title}
                  selectedMenuNav={selectedMenuNav}
                  handleMenuSelect={handleMenuSelect}
                >
                  {value.subMenu.map((v, i) => {
                    return <NavitemMobile key={i}>{v}</NavitemMobile>;
                  })}
                </O_Accordion>
              );
            })}
          </div>
        </SideNavbar>
      </NavbarMobile>

      <Navbar>
        <h3 style={{ color: "#fff" }}>Forum Anak IT</h3>
        <SearchContainer>
          <Search type="text" placeholder="Search" />
          <div
            style={{ position: "absolute", height: 20, width: 20, right: 10 }}
          >
            <FontAwesomeIcon
              icon={faSearch}
              style={{
                width: 16,
                height: 16,
                color: "#222222",
                marginRight: "8px",
              }}
            />
          </div>
        </SearchContainer>

        <StyledUl>
          {MENU_LIST.map((value, idx) => {
            return (
              <React.Fragment key={idx}>
                <StyledLi
                  onClick={() => {
                    setSelectedMenuNav(value.title);
                  }}
                  onMouseEnter={() => {
                    if (value.title == "Categories") {
                      setSelectedMenuNav(value.title);
                    } else {
                      setSelectedMenuNav("");
                    }
                  }}
                  isActive={selectedMenuNav === value.title}
                  key={idx}
                >
                  <a style={{ color: "#fff", textDecoration: "none" }}>
                    {value.title}
                  </a>
                </StyledLi>
                <div
                  style={{
                    position: "absolute",
                    top: 57,
                    background: "#635C53",
                  }}
                >
                  <NavitemMobile
                    onMouseLeave={() => {
                      if (value.title == "Categories") {
                        setSelectedMenuNav("");
                      }
                    }}
                  >
                    {value.subMenu.map((val, idx) => {
                      return (
                        <DropDownItem
                          key={idx}
                          isShow={selectedMenuNav === "Categories"}
                        >
                          {val}
                        </DropDownItem>
                      );
                    })}
                  </NavitemMobile>
                </div>
              </React.Fragment>
            );
          })}
        </StyledUl>
      </Navbar>
      <O_Modal
        open={selectedMenuNav === "Login" || selectedMenuNav === "Register"}
        onClose={() => {
          setSelectedMenuNav("");
          setUserAccount({
            name: "",
            email: "",
            password: "",
          });
          setErrorValidation({});
        }}
        title={selectedMenuNav === "Login" ? "Login" : "Register"}
      >
        <form onSubmit={handleSubmit} autoComplete={"off"}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {selectedMenuNav === "Register" && (
              <div>
                <FormInput
                  inputCategory="normal"
                  inputName="name"
                  inputType="text"
                  title={"Name"}
                  isIcon={false}
                  value={userAccount.name}
                  errorInput={!!errorValidation.name}
                  validateInputError={errorValidation.name}
                  inputPlaceHolder={"Input Name"}
                  onChange={handleChange}
                />
              </div>
            )}
            <div>
              <FormInput
                inputCategory="normal"
                inputName="email"
                inputType="email"
                title={"Email"}
                isIcon={false}
                value={userAccount.email}
                errorInput={!!errorValidation.email}
                validateInputError={errorValidation.email}
                inputPlaceHolder={"Input your email"}
                onChange={handleChange}
              />
            </div>
            <div>
              <FormInput
                inputCategory="normal"
                inputName="password"
                inputType="password"
                title={"Password"}
                isIcon={false}
                value={userAccount.password}
                errorInput={!!errorValidation.password}
                validateInputError={errorValidation.password}
                inputPlaceHolder={"Input your password"}
                onChange={handleChange}
              />
            </div>
            <PrimaryButton type="submit">Login</PrimaryButton>
          </div>
        </form>
      </O_Modal>
    </>
  );
};

export default Index;
