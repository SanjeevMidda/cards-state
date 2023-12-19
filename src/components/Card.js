import React from "react";

const Card = ({ number, text, status, setStatus, onClick }) => {
  let styles = {
    transform: `translateY(${status ? "0px" : "170px"})`,
  };

  return (
    <div className="card" onClick={onClick} style={styles}>
      {!status ? <h1>{number}</h1> : <h3>{text}</h3>}
    </div>
  );
};

export default Card;
