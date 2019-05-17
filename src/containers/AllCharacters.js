import React, { PureComponent } from 'react';
import Characters from '../components/Characters';
import { getCharacters } from '../services/rickAndMortyApi';

export default class AllCharacters extends PureComponent {
  state = {
    characters: []
  }

  fetchCharacters = () => {
    getCharacters()
      .then(({ characters }) => this.setState(characters));
  }

  componentDidMount() {
    this.fetchCharacters();
  }

  render() {
    return <Characters characters={this.state.characters} />;
  }

}
