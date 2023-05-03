import React from "react";
import "./Card.styles.css";

let props = {};

const CardComponent = ({ monster } = props) => {
  const { id, name, email } = monster;
  return (
    <div className='card-container' key={id}>
      <img
        src={`https://robohash.org/${id}?set=set2&size=180x180`}
        alt={`monster ${id}`}
      />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
};

export default CardComponent;
