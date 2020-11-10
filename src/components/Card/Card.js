import React from "react";
import "./Card.css";

const Card = (props) => {
  return (
    <div className="card-wrapper">
      <div className="thumbnail-wrapper">
        <img src="https://via.placeholder.com/640x360.png"></img>
      </div>
      <p className="name">{props.name}</p>
      <p className="desc">{props.desc}</p>
    </div>
  );
};

Card.defaultProps = {
  name: "Product Name",
  desc: "No description",
};

export default Card;
