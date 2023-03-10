/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="text-white pt-5 pb-4">
      <div className="containar text-center text-md-left">
        <div className="row text-center text-md-left row-1" >
          <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 mx-auto mt-3 " style={{paddingLeft:"35px"}}>
            <h5 className="text-uppercase mb-4 font-weight-bold">About Us</h5>
            <p className="">
              The Most Eminent Travel Consultant Service provider in major
              cities and overseas with reliability since 2022. We are committed
              to provide reliable client support.
            </p>

            <div style={{ textAlign: "justify" }}>
              <ul className="list-unstyled list-inline">
                <li className="list-inline-item">
                  <a
                    href="#"
                    className="btn-floating btn-sm text-white"
                    style={{ fontSize: "23px", paddingRight: "5px" }}
                  >
                    {/* <i className="fab fa-twitter"></i> */}
                    <img src="/images/footer/twitter.png" alt=""/>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a
                    href="#"
                    className="btn-floating btn-sm text-white"
                    style={{ fontSize: "23px", paddingRight: "5px" }}
                  >
                    {/* <i className="fab fa-facebook"></i> */}
                    <img src="/images/footer/facebook.png" alt="" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a
                    href="#"
                    className="btn-floating btn-sm text-white"
                    style={{ fontSize: "23px", paddingRight: "5px" }}
                  >
                    {/* <i className="fab fa-youtube"></i> */}
                    <img
                      src="/images/footer/youtube.png"
                      alt="youtube"
                    />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a
                    href="#"
                    className="btn-floating btn-sm text-white"
                    style={{ fontSize: "23px" }}
                  >
                    {/* <i className="fab fa-linkedin-in"></i> */}
                    <img src="/images/footer/linkedin.png" alt="" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 mx-auto mt-3" style={{paddingLeft:"65px"}}>
            <h5 className="text-uppercase mb-4 font-weight-bold">
              {" "}
              Visa Services{" "}
            </h5>

            <ul style={{ textAlign: "justify" }}>
              <li>Green Card</li>
              <li>PR Applicants</li>
              <li>Visa Consultancy</li>
              <li>Travel Insurance</li>
              <li>Abroad Study</li>
              <li>Internatioal Permit</li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold">Contact</h5>
            <p>
              <i
                class="fa-solid fa-envelope"
                style={{ paddingRight: "8px" }}
              ></i>
              info@example.com
            </p>

            <p>
              <i
                className="fas fa-phone mr-3"
                style={{ paddingRight: "8px" }}
              ></i>
              +94 (77) 456 7890
            </p>

            <p>
              <i
                className="fas fa-home mr-3"
                style={{ paddingRight: "8px" }}
              ></i>
              78, Udula Road, Ratnapura, Srilanka
            </p>
          </div>

          <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold">Location</h5>
            {/* https://google-map-generator.com/ */}
            <div class="mapouter">
              <div class="gmap_canvas">
                <iframe
                  width="250"
                  height="150"
                  id="gmap_canvas"
                  src="https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed"
                ></iframe>
              </div>
            </div>
          </div>
        </div>

        <hr className="mb-4" />

        <div className="row align-items-center row-2">

            <p className="text-center">
              &copy;Copyright 2023 DuideME. All rights reserved.
            </p>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
