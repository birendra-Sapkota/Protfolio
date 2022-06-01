import React from "react";

import "..//Card/Card.css";
const Card = ({ emoji, heading, list1, list2, list3 }) => {
  return (
    <div className="cardview">
      <img src={emoji} alt=""></img>
      <div className="heading">
        <h1>{heading}</h1>
      </div>

      <div className="listitems">
        <span>{list1}</span>
        <span>{list2}</span>
        <span>{list3}</span>
      </div>

      <button className="card-button">Learn More</button>
    </div>
  );
};

export default Card;
