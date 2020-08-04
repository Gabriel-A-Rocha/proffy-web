import React from "react";
import { Link } from "react-router-dom";

import logoImg from "../../assets/logo.svg";
import landingImg from "../../assets/landing.svg";

import studyIcon from "../../assets/icons/study.svg";
import giveClassesIcon from "../../assets/icons/give-classes.svg";
import purpleHeartIcon from "../../assets/icons/purple-heart.svg";

import "./styles.css";

function Landing() {
  return (
    <div id="page-landing">
      <div id="page-landing-content" className="container">
        <div className="logo-container">
          <img src={logoImg} alt="Proffy" />
          <h2>Your online learning platform</h2>
        </div>

        <img src={landingImg} alt="Learning platform" className="hero-image" />

        <div className="buttons-container">
          <Link to="/study" className="study">
            <img src={studyIcon} alt="Study" />
            Study
          </Link>

          <Link to="/give-classes" className="give-classes">
            <img src={giveClassesIcon} alt="Give classes" />
            Teach
          </Link>
        </div>

        <span className="total-connections">
          Total of 200 connections made
          <img src={purpleHeartIcon} alt="Purple heart" />
        </span>
      </div>
    </div>
  );
}

export default Landing;
