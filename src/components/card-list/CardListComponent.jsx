import React from "react";

function CardListComponent({ showData, ...props }) {
  return (
    <>
      <h1>This is list</h1>
      {showData.map((monster) => (
        <p key={monster.id}>{monster.name}</p>
      ))}
    </>
  );
}

export default CardListComponent;
