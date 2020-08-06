import React from 'react';

const CharacterCard = (props) => {
  return (
    <li className="character__card">
      <div className="character__card__img-container">
        <img src={props.imgUrl} alt={props.name} />
      </div>
      <h2 className="character__card__name">{props.name}</h2>
      <p className="character__card__species">{props.specie}</p>
    </li>
  );
};

export default CharacterCard;
