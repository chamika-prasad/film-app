import React from "react";
import ParticlesBackground from "../component/ParticlesBackground";
import './FilmList.css'
import NavBar from "../component/NavBar";
import SideBar from "../component/SideBar";

const FilmList = () => {
  return (
    <div>
      <div className="particle">
        <ParticlesBackground />
      </div>
      <div className="content">
        <NavBar />
      </div>
    </div>
  );
};

export default FilmList;
