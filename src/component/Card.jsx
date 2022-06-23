import React from "react";
import "./style.css";
import { MdKeyboardArrowRight } from "react-icons/md";

function Card({ title, icon, cardStyle, bodyStyle }) {
  return (
    <div className={`card ${cardStyle} `}>
      <div className={`card-icon  ${bodyStyle}`}>{icon}</div>
      <div className="card-body">
        <h4 className={`card-title ${bodyStyle}`}>{title}</h4>
        <h6 className="card-subtitle">
          start here <MdKeyboardArrowRight className="icon" />
        </h6>
      </div>
    </div>
  );
}

export default Card;
