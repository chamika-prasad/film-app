import React,{useEffect, useState} from "react";
import { SideBarMenu } from "../data/sidebarmenu";
import "./SideBar.css";
import SideBarMenuData from "./SideBarMenuData";
import { SideBarData } from "../data/sidebardata";
import { FilmData } from "../data/filmdata";

const SideBar = (props) => {
  const setSideBar = () => {
    props.setSlideBar(false);
  };

  return (
    <div className="closeButton">
      <div className="d-flex justify-content-between align-items-baseline">
      <img
        className="px-2 close"
        src="images/nav/close.png"
        alt=""
        onClick={(e) => {
          setSideBar();
        }}
      />
      <div className="sidebarSiteName">
        <h1>filmSEE.com</h1>
      </div>
      </div>
      <div className="py-3 Main">
        {SideBarMenu.map((item, index) => {
          return <SideBarMenuData item={item} setFlag={props.setFlag} flag={props.flag} index={index} key={index} setYear={props.setYear} SetChange={props.SetChange} setLanguage={props.setLanguage} setGener={props.setGener}/>;
        })}
      </div>
    </div>
  );
};

export default SideBar;
