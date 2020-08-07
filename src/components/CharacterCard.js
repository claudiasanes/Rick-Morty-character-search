import React from 'react';
import { Link } from 'react-router-dom';

const CharacterCard = (props) => {
  return (
    <Link to={`/CharacterDetail/${props.id}`}>
      <li className="character__card">
        <div className="character__card__img-container">
          <img src={props.imgUrl} alt={props.name} />
        </div>
        <h2 className="character__card__name">{props.name}</h2>
        <p className="character__card__species">{props.specie}</p>
      </li>
    </Link>
  );
};

export default CharacterCard;
