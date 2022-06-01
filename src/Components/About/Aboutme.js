import React from "react";
import "../../Components/About/Aboutme.css";
import heart from "../../img/heartemoji.png";
import Card from "../Card/Card";

const Aboutme = () => {
  return (
    <div className="Aboutme">
      {/* left side  */}
      <div className="left-side">
        <span> About me</span>
        <span> Why choose me?</span>
        <span>
          {" "}
          I am a full stack developer with the experiences of developing various
          web application using django, react and javascript.Strong professional
          with a B Sc(Hons) Computing willing to be an asset for an organization
        </span>

        <div className="abt-btn-wrapper">
          <button className="button about-downloadcv-button">
            Download CV
          </button>
          <button className="button about-hire-button">Hire Me</button>
        </div>

        <div className="about-blur-background1"></div>
      </div>
      {/* Right side */}
      <div className="right-side">
        {/* first python card  */}
        <div style={{ left: "17rem", top: "-2rem" }}>
          <Card
            emoji={heart}
            heading={"Backend"}
            list1={"Python, Djnago, Flask"}
            list2={"MatplotLib, Plotly, pandas"}
            list3={"AWS, Rest API"}
          ></Card>
        </div>
        {/* second card- react js  */}
        <div style={{ top: "7rem", left: "2rem" }}>
          <Card
            emoji={heart}
            heading={"Frontend"}
            list1={"Javascript, ReactJs, Redux "}
            list2={"Chart.js, Axios"}
            list3={"JQuerry"}
          ></Card>
        </div>
        {/* Database cart  */}
        <div style={{ top: "17rem", left: "17rem" }}>
          <Card
            emoji={heart}
            heading={"Database"}
            list1={"PostgreSQL"}
            list2={"SQLite"}
            list3={"MySQL"}
          ></Card>
          <div className="about-blur-background2"></div>
        </div>
      </div>
    </div>
  );
};

export default Aboutme;
