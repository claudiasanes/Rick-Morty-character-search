import React from 'react';

class CharacterDetail extends React.Component {
  render() {
    return (
      <section className="details">
        <div className="character__details">
          <div className="character__details-img">
            <img src="vvv" alt="vvv" />
          </div>

          <div className="character__details--info">
            <h2 className="character__details--name">hola</h2>
            <ul className="character__details--ul">
              <li className="character__details--species">
                <h3>Species:</h3>
              </li>
              <li className="character__details--origin">
                <h3>Origin:</h3>
              </li>
              <li className="character__details--episode">
                <h3>Number of episodes:</h3>
              </li>
              <li className="character__details--status">
                <h3>Status:</h3>
              </li>
            </ul>
          </div>
        </div>
      </section>
    );
  }
}

export default CharacterDetail;
