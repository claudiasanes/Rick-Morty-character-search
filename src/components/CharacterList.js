import React from 'react';
import CharacterCard from './CharacterCard';
import emptyState from '../images/rick-emptyState.png';

const CharacterList = (props) => {
  const characters = props.characters();
  const dontExist =
    characters.length === 0 ? (
      <div className="dont-exist">
        <h2 className="item__container--text">
          This character doesn't exist is this universe, try in another one{' '}
        </h2>
        <div className="empty-state-container">
          <img className="empty-state" src={emptyState} alt="eee" />
        </div>
      </div>
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
      <section className="character__section">
        {dontExist}
        <ul className="character__list">{characterData}</ul>
      </section>
    </>
  );
};

//   const isCharacter = () => {
//     if (characters !== undefined) {
//       characters.map((character, index) => {
//         return (
//           <section className="character__section">
//             <ul className="character__list">
//               <CharacterCard
//                 key={index}
//                 id={character.id}
//                 name={character.name}
//                 imgUrl={character.image}
//                 specie={character.species}
//                 status={character.status}
//               />
//             </ul>
//           </section>
//         );
//       });
//     } else {
//       return (
//         <h2 className="item__container--text">This character doesn't exist.</h2>
//       );
//     }
//   };

//   return <>{isCharacter}</>;
// };

export default CharacterList;
