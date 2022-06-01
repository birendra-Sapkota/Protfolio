import React from "react";
import "../Introduction/Intro.css";
import linkedin from "../../img/linkedin.png";
import github from "../../img/github.png";
import Facebook from "../../img/Facebook.png";
import profile from "../../img/profile.png"

const Introduction = (props) => {
  return (
    <div className="introduction">
      <div className="intro-left">
        <div className="intro-name">
          <span>Hey! I Am </span>
          <span>Birendra Sapkota</span>
          <span>
            I am Python and ReactJs Developer with an experience of more than 3
            years
          </span>
        </div>
        <button className="button into-button">Hire Me</button>
        <div className="social-icons">
          <a href="#" target="_blank">
            <img src={github} alt="Github"></img>
          </a>
          <a href="#" target='_blank'>
            <img src={linkedin} alt="linkedIn"></img>
          </a>
          <a href="#" target='_blank'>
            <img src={Facebook} alt="Facebook"></img>
          </a>
        </div>
      </div>
      <div className="intro-right">
      
      <img src={profile} alt=""></img>
   
      
      </div>
    </div>
  );
};

export default Introduction;
