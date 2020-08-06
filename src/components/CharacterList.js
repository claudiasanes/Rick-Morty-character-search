import React from 'react';
import CharacterCard from './CharacterCard';

const CharacterList = (props) => {
  const characterData = props.characters.map((character, index) => {
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
    <section className="character__section">
      <ul className="character__list">{characterData}</ul>
    </section>
  );
};

export default CharacterList;
