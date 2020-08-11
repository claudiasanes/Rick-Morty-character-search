import React from 'react';
import { Route, Switch } from 'react-router-dom';
import getDataFromApi from '../services/Api';
import Header from './Header';
import Filters from './Filters';
import CharacterDetail from './CharacterDetail';
import CharacterList from './CharacterList';
import '../stylesheets/App.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    // this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFilters = this.handleFilters.bind(this);
    this.renderFilteredCharacters = this.renderFilteredCharacters.bind(this);
    this.renderCharacterDetail = this.renderCharacterDetail.bind(this);

    this.state = {
      characters: [],
      inputValue: '',
      species: 'all',
    };
  }

  componentDidMount() {
    getDataFromApi().then((data) => {
      this.setState({ characters: data });
      // console.log(data);
    });
  }

  handleFilters(characters) {
    this.setState({ [characters.key]: characters.value });
  }

  renderFilteredCharacters() {
    return this.state.characters.filter((character) => {
      return character.name
        .toLowerCase()
        .includes(this.state.inputValue.toLowerCase());
    });
  }

  renderCharacterDetail(props) {
    // console.log(props);
    const characterId = parseInt(props.match.params.characterId);
    const character = this.state.characters.find((character) => {
      // console.log(character.id, characterId);
      return character.id === characterId;
    });
    return (
      <CharacterDetail
        id={character.id}
        name={character.name}
        imgUrl={character.image}
        species={character.species}
        status={character.status}
        origin={character.origin.name}
        episode={character.episode.length}
      />
    );
  }

  render() {
    // console.log(this.state);
    return (
      <div className="App">
        <Header />
        <Route exact path="/">
          <main className="main">
            <Filters
              handleInputChange={this.handleFilters}
              inputValue={this.state.inputValue}
              filterSpecies={this.state.species}
            />
            <CharacterList characters={this.renderFilteredCharacters} />
          </main>
        </Route>
        <Switch>
          <Route
            path="/CharacterDetail/:characterId"
            render={this.renderCharacterDetail}
          ></Route>
        </Switch>
      </div>
    );
  }
}

export default App;
