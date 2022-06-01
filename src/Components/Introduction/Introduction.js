import React from "react";
import "../Introduction/Intro.css";
import linkedin from "../../img/linkedin.png";
import github from "../../img/github.png";
import Facebook from "../../img/Facebook.png";
import profile from "../../img/profile.png";
import crown from "../../img/crown.png";
import vector from "../../img/Vector2.png";
import vector1 from "../../img/Vector1.png";
import thumb from "../../img/thumbup.png";
import coolsunglass from "../../img/coolsunglass.png";
import Floatingdiv from "../Floatingdiv/Floatingdiv";

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
          <a href="#" target="_blank">
            <img src={linkedin} alt="linkedIn"></img>
          </a>
          <a href="#" target="_blank">
            <img src={Facebook} alt="Facebook"></img>
          </a>
        </div>
      </div>
      <div className="intro-right">
        
        <img src={profile} alt=""></img>
        <img src={coolsunglass} alt=""></img>
        <div style={{top:'-1%', left:'68%'}}>
          <Floatingdiv image = {crown} text1='Python' text2= "Developer"></Floatingdiv>
        </div>

        <div style={{top:'16.5rem', left:'-2rem'}}>
        <Floatingdiv image = {thumb} text1='ReactJs' text2= "Developer"></Floatingdiv>
        </div>

        {/* Blur background div  */}
        <div className="blur-background" style={{background: "rgb(238,210,255)"}}>

        </div>
        <div className="blur-background" style={{
            background: "#C1F5FF",
            top: '17rem',
            width: '21rem',
            height: '11rem',
            left:'-9rem'}}>

        </div>
        <div className="blur-background" style={{
            background: "#edf1f7",
            top: '1rem',
            width: '21rem',
            height: '11rem',
            left:'-9rem'}}>

        </div>
      </div>
    </div>
  );
};

export default Introduction;
