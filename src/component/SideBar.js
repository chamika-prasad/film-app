import React from "react";
import { SideBarMenu } from "../data/sidebarmenu";
import "./SideBar.css";
import SideBarMenuData from "./SideBarMenuData";

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
          return <SideBarMenuData item={item} index={index} key={index} />;
        })}
      </div>
    </div>
  );
};

export default SideBar;
