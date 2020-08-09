import React from 'react';
import { Link } from 'react-router-dom';

const CharacterDetail = (props) => {
  // console.log(props);
  return (
    <section className="details">
      <div className="character__details">
        <div className="left-container">
          <Link to="/" className="close">
            X{/* <span className="modal__close icon fas fa-times">X</span> */}
          </Link>
          <h2 className="character__details--name">{props.name}</h2>
          <div className="character__details__img-container">
            <img src={props.imgUrl} alt={props.name} />
          </div>
        </div>

        <div className="character__details--info">
          <ul className="character__details--ul">
            <li className="character__details--li">
              <h3 className="character__details--tittle">Species:</h3>
              {props.species}
            </li>
            <li className="character__details--li">
              <h3 className="character__details--tittle">Origin:</h3>{' '}
              {props.origin}
            </li>
            <li className="character__details--li">
              <h3 className="character__details--tittle">
                Number of episodes:
              </h3>
              {props.episode}
              {/* {episodeLength.length} */}
            </li>
            <li className="character__details--li">
              <h3 className="character__details--tittle">Status:</h3>
              {props.status}
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default CharacterDetail;
