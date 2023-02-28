import React, { useState, useEffect } from "react";
import { Container, Nav, Navbar as NavbarBs } from "react-bootstrap";
import { NavLink,useNavigate } from "react-router-dom";
import "./NavBar.css";
import SideBar from "./SideBar";

const NavBar = (props) => {
  const [showSearchBar, setShowsearchBar] = useState(false);
  const [slideBar, setSlideBar] = useState(false);
  const navigate = useNavigate();

  const unSetMouse = () => {
    setShowsearchBar(false);
  };

  const setMouse = () => {
    setShowsearchBar(true);
  };

  const handleChange = (e) => {
    props.setSearchTerm(e.target.value);
    props.SetChange(!props.change)
    //console.log(props.searchTerm);
  }

  const showSideBar = () => {
    setSlideBar(!slideBar);
  };

  const setListPage = () => {
    window.location.reload();
    navigate('/FilmList');
  }

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
       
        className="navbar navbar-light  shadow-sm level align-items-baseline hi"
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
                  // value={props.searchTerm}
                  onChange={handleChange}
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

            <Nav.Link to="#" as={NavLink}>
              <img className="px-2" src="images/nav/home.png" alt="" onClick={(e) => setListPage()}/>
            </Nav.Link>

            <Nav.Link to="#" as={NavLink}>
              <img className="px-2" src="images/nav/call-center.png" alt="" />
            </Nav.Link>
          </Nav>
        </Container>
        <div className="siteName">
        <h1>filmSEE.com</h1>
      </div>
      </NavbarBs>

      <div className="sidebar" id="sidebar">
        <SideBar setSlideBar={setSlideBar} setYear={props.setYear} SetChange={props.SetChange} change={props.change} setLanguage={props.setLanguage} setGener={props.setGener}/>
      </div>
    </div>


  );
};

export default NavBar;
