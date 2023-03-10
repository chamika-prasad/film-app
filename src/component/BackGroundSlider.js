import React, { useEffect, useState } from "react";
import "./BackGroundSlider.css";
import images from "../data/data";
import NavBar from "./NavBar";
import GetStartButton from "./GetStartButton";

const BackGroundSlider = () => {
  const [currentState, setCurrentState] = useState(0);
  const [temp, setTemp] = useState(0);
  const [flag, setFalg] = useState(false);
  const bgImageStyle = {
    backgroundImage: `url(${images[currentState].url})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    height: "100%",
    transition: "background-image 2s",
  };

    const goToNext = (index) => {
      console.log(index);
      // setCurrentState(index);
      // setFalg(!flag)
      // let str1 = document.getElementById(currentState);
      // str1.classList.remove("select-bg");
      // let str2 = document.getElementById(index);
      // setCurrentState(index);
      // str2.classList.add("select-bg");
    };

  useEffect(() => {
    if (currentState !== 0) {
      let value = currentState - 1;
      let str = document.getElementById(value);
      str.classList.remove("select-bg");
    } else {
      let str = document.getElementById(0);
      str.classList.add("select-bg");
      let str1 = document.getElementById(5);
      str1.classList.remove("select-bg");
    }

    if (temp !== currentState) {
      setTemp(currentState);
      let str = document.getElementById(currentState);
      str.classList.add("select-bg");
    }

    setTimeout(() => {
      if (currentState === 5) {
        setCurrentState(0);
        setFalg(!flag)
      } else {
        setCurrentState(currentState + 1);
        setFalg(!flag)
      }
    }, 5000);
  }, [flag]);

  return (
    <div className="container-style">
      <div style={bgImageStyle}></div>
      <div className="transparent-bg position-absolute top-0 start-0"></div>
      <div className="name film position-absolute ">film</div>
      <div className="name see position-absolute text-uppercase">see</div>
      <div className="startButton position-absolute">
        <GetStartButton />
      </div>
      <div className="discription position-absolute mt-5 pt-5">
        <span>
          <strong>W</strong>
        </span>
        elcome to{" "}
        <b>
          <strong>FILM SEE</strong>
        </b>
        , your ultimate destination for downloading your favorite movies! Our
        site is dedicated to providing you with a vast collection of films,
        ranging from blockbuster hits to cult classics and everything in
        between.
        <br />
        &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;At{" "}
        <b>
          <strong>FILM SEE</strong>
        </b>
        , we understand that everyone has different tastes in movies, which is
        why we offer a wide variety of genres, including action, comedy,
        romance, horror, and more. Our simple and user-friendly interface allows
        you to easily browse and download films in just a few clicks.
        <br />
        &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;We take pride in
        offering high-quality, high-definition downloads that you can enjoy on
        any device, whether it's your laptop, tablet, or smartphone. Plus, our
        download speeds are lightning-fast, so you won't have to wait long to
        start watching your favorite movies.
        <br />
        &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;At{" "}
        <b>
          <strong>FILM SEE</strong>
        </b>
        , we're committed to providing you with the best possible experience
        when it comes to downloading movies. That's why we constantly update our
        collection with the latest releases , as well as timeless classics. And
        if you can't find what you're looking for, just let us know???we'll do our
        best to make it available for you.
        <br />
        &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;So
        if you're a movie lover looking for a reliable and easy way to download
        films, look no further than <b>FILM SEE</b>. We're here to help you
        build your personal movie library, one download at a time.
      </div>
      <div className="position-absolute mainIndicator bottom-0 start-50 translate-middle-x pb-3">
        <div className="carousel-bullt d-flex">
          {images.map((item, index) => (
            <span
              key={index}
              onClick={(e) => console.log('clicked')}
              id={index}
              className="indicator"
            ></span>
          ))}
        </div>
      </div>
      <div className="position-absolute top-0 p-5 response">
        <h4 className="" style={{color:"white"}}>Any Thing No Longer Support !!</h4>
      </div>
    </div>
  );
};

export default BackGroundSlider;
