import React from 'react';
import CharacterCard from './CharacterCard';
import PropTypes from 'prop-types';

const CharacterList = (props) => {
  const characters = props.characters();

  const dontExist =
    props.characters.length === 0 ? (
      <h2 className="item__container--text">
        This character doesn't exist.
        {/* <FontAwesomeIcon icon={faFrown} /> */}
      </h2>
    ) : (
      ''
    );

  const characterData = characters.map((character, index) => {
    return (
      <CharacterCard
        key={index}
        id={character.id}
        name={character.name}
        imgUrl={character.image}
        specie={character.species}
        status={character.status}
      />
    );
  });
  return (
    <>
      {dontExist}
      <section className="character__section">
        <ul className="character__list">{characterData}</ul>
      </section>
    </>
  );
};

export default CharacterList;
