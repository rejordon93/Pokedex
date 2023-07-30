import React from "react";

const Pokemon = (props) => {
  return (
    <div>
      <h2>{props.name}</h2>
      <img src={props.image} alt={props.name} />
      <p>Type: {props.type}</p>
    </div>
  );
};
export default Pokemon;
