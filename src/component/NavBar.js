import React, { useState, useEffect } from "react";
import { Container, Nav, Navbar as NavbarBs } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
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
    props.setFlag(!props.flag);
    props.setSearchTerm(e.target.value);
    props.SetChange("term");
    //console.log(props.searchTerm);
  };

  const showSideBar = () => {
    setSlideBar(!slideBar);
  };

  const setListPage = () => {

    if(props.isSEarchBarShow){
      window.location.reload();
      navigate("/FilmList");
    }
  };

  const showDownBar = () => {
    let str1 = document.getElementById("response-toggle-button");   
    str1.classList.add("hide-expand-arrow");
    let str2 = document.getElementById("down-bar");
    str2.classList.remove("after-down-bar");
    str2.classList.add("show-down-bar");
  }

  const hideDownBar = () => {
    let str1 = document.getElementById("response-toggle-button");   
    str1.classList.remove("hide-expand-arrow");
    let str2 = document.getElementById("down-bar");
    str2.classList.remove("show-down-bar");
    str2.classList.add("after-down-bar");
  }

  useEffect(() => {

    if(props.isSEarchBarShow){
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
    }
    // if (slideBar) {
    //   let str1 = document.getElementById("sidebar");
    //   let str2 = document.getElementById("menu");
    //   str1.classList.remove("after");
    //   str1.classList.add("apend");
    //   str2.classList.add("hidden");
    // } else {
    //   let str1 = document.getElementById("sidebar");
    //   let str2 = document.getElementById("menu");
    //   str1.classList.remove("apend");
    //   str1.classList.add("after");
    //   str2.classList.remove("hidden");
    // }
  }, [slideBar]);

  return (
    <div>
      <NavbarBs className="navbar navbar-light  shadow-sm level align-items-baseline hi">
        <Container fluid>
          <Nav className="me-auto">
            {props.isSEarchBarShow ? (<img
              className="menu"
              id="menu"
              src="images/nav/menu.png"
              alt="menu"
              onClick={(e) => {
                showSideBar();
              }}
            />):(<div className="secondSiteName">
            <h1 className="site">filmSEE.com</h1>
          </div>)}

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
              ) : (props.isSEarchBarShow ?
                <img
                  className="px-2 searchPng"
                  src="images/nav/search.png"
                  onMouseLeave={unSetMouse}
                  onMouseEnter={setMouse}
                  alt=""
                /> : null
              )}
            </Nav.Link>

            <Nav.Link to="#" as={NavLink}>
              <img className="px-2 user" src="/images/nav/user.png" alt="" />
            </Nav.Link>

            <Nav.Link to="/FilmList" as={NavLink}>
              <img
                className="px-2 home"
                src="/images/nav/home.png"
                alt=""
                onClick={(e) => setListPage()}
              />
            </Nav.Link>

            <Nav.Link to="/ContactUs" as={NavLink}>
              <img
                className="px-2 call-center"
                src="/images/nav/call-center.png"
                alt=""
              />
            </Nav.Link>
          </Nav>
        </Container>

        {
          props.isSEarchBarShow ?(<div className="siteName">
          <h1>filmSEE.com</h1>
        </div>):null
        }
 
      </NavbarBs>

      <div className="sidebar" id="sidebar">
        <SideBar
          setSlideBar={setSlideBar}
          setFlag={props.setFlag}
          flag={props.flag}
          setYear={props.setYear}
          SetChange={props.SetChange}
          setLanguage={props.setLanguage}
          setGener={props.setGener}
        />
      </div>

      <div className="response-toggle-button" id="response-toggle-button">
        <img className="px-2" src="/images/nav/expand-arrow.png" alt="" id="expand-arrow" onClick={(e)=>{showDownBar()}} />
      </div>

      
        <div className="down-bar" id="down-bar">
          {props.isSEarchBarShow ? (<>
          <p className="start pt-4">Search...</p>
          <p>Profile</p>
          <p>Home</p>
          <p>Contact Us</p>
          </>) : (
            <>
          <p className="start pt-4">Profile</p>
          <p>Home</p>
          <p>Contact Us</p>
            </>
          )}
          <div className="close-down-bar">
          <img
            className="px-2 close-img"
            src="/images/nav/close.png"
            alt=""
            onClick={(e) => {
              hideDownBar();
            }}
          />
        </div>
        </div>

        
    
    </div>
  );
};

export default NavBar;
