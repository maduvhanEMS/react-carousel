import React from "react";

function Arrow({ icon, direction, handleClick }) {
  return (
    <button className={`button ${direction}`} onClick={handleClick}>
      {icon}
    </button>
  );
}

export default Arrow;
