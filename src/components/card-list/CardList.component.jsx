import React from "react";
import './CardList.styles.css'

function CardListComponent({ monsters, ...props }) {
  return (
    <>
      <div className='card-list'>
        {monsters.map(({ id, name, email }) => (
          <div className='card-container' key={`${id}`}>
            <img
              src={`https://robohash.org/${id}?set=set2&size=180x180`}
              alt={`monster ${id}`}
            />
            <h2>{name}</h2>
            <p>{email}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default CardListComponent;
