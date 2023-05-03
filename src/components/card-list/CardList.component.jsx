import React from "react";
import "./CardList.styles.css";
import CardComponent from "../card-component/Card.component";

function CardListComponent({ monsters }) {
  return (
    <>
      <div className='card-list'>
        {monsters.map((monster, index) => (
          <CardComponent monster={monster} key={`monster-${index}`} />
        ))}
      </div>
    </>
  );
}

export default CardListComponent;
