import React, { useState, useEffect } from "react";
import { Container, Nav, Navbar as NavbarBs } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
import SideBar from "./SideBar";

const NavBar = () => {
  const [showSearchBar, setShowsearchBar] = useState(false);
  const [slideBar, setSlideBar] = useState(false);

  const unSetMouse = () => {
    setShowsearchBar(false);
  };

  const setMouse = () => {
    setShowsearchBar(true);
  };

  const showSideBar = () => {
    setSlideBar(!slideBar);
  };

  useEffect(() => {
    if (slideBar) {
      let str1 = document.getElementById("sidebar");
      let str2 = document.getElementById("menu");
      str1.classList.remove("after");
      str1.classList.add("apend");
      str2.classList.add("hidden");
    } else {
      let str1 = document.getElementById("sidebar");
      let str2 = document.getElementById("menu");
      str1.classList.remove("apend");
      str1.classList.add("after");
      str2.classList.remove("hidden");
    }
  }, [slideBar]);

  return (
    <div>
      <NavbarBs
        sticky="top"
        className="navbar navbar-light  shadow-sm level align-items-baseline"
      >
        <Container fluid>
          <Nav className="me-auto">
            <img
              className="menu"
              id="menu"
              src="images/nav/menu.png"
              alt="menu"
              onClick={(e) => {
                showSideBar();
              }}
            />
          </Nav>

          <Nav>
            <Nav.Link to="#" as={NavLink}>
              {showSearchBar ? (
                <input
                  type="text"
                  className="search-hover"
                  onMouseLeave={unSetMouse}
                  onMouseEnter={setMouse}
                  placeholder="search here..."
                />
              ) : (
                <img
                  className="px-2 searchPng"
                  src="images/nav/search.png"
                  onMouseLeave={unSetMouse}
                  onMouseEnter={setMouse}
                  alt=""
                />
              )}
            </Nav.Link>

            <Nav.Link to="#" as={NavLink}>
              <img className="px-2" src="images/nav/user.png" alt="" />
            </Nav.Link>

            <Nav.Link to="/" as={NavLink}>
              <img className="px-2" src="images/nav/home.png" alt="" />
            </Nav.Link>

            <Nav.Link to="#" as={NavLink}>
              <img className="px-2" src="images/nav/call-center.png" alt="" />
            </Nav.Link>
          </Nav>
        </Container>
      </NavbarBs>

      <div className="sidebar" id="sidebar">
        <SideBar setSlideBar={setSlideBar} />
      </div>
    </div>
  );
};

export default NavBar;
