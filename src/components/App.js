import React from 'react';
// import { Route, Switch } from 'react-router-dom';
import getDataFromApi from '../services/Api';
import Header from './Header';
import Filters from './Filters';
import CharacterDetail from './CharacterDetail';
import CharacterList from './CharacterList';
import '../stylesheets/App.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.renderFilteredCharacters = this.renderFilteredCharacters.bind(this);
    this.state = {
      characters: [],
      inputValue: '',
    };
  }

  componentDidMount() {
    getDataFromApi().then((data) => {
      this.setState({ characters: data });
      console.log(data);
    });
  }

  handleInputChange(inputValue) {
    this.setState({ inputValue: inputValue });
  }

  renderFilteredCharacters() {
    return this.state.characters.filter((character) => {
      return character.name.includes(this.state.inputValue);
    });
  }

  //   renderCharacterDetail(props) {
  // const charactersDetails = this.state.characters.
  //   }

  render() {
    return (
      <div className="App">
        <Header />
        <main className="main">
          <Filters
            handleInputChange={this.handleInputChange}
            inputValue={this.state.inputValue}
          />
          <CharacterList characters={this.renderFilteredCharacters} />
          {/* <Switch>
            <Route> */}
          <CharacterDetail />
          {/* </Route>
          </Switch> */}
        </main>
      </div>
    );
  }
}

export default App;
