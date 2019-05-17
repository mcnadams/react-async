import React, { PureComponent } from 'react';
import Characters from '../components/Characters';
import { getCharacters } from '../services/rickAndMortyApi';

export default class AllCharacters extends PureComponent {
  state = {
    characters: [],
    page: 1,
    totalPages: 1
  }

  fetchCharacters = () => {
    getCharacters(this.state.page)
      .then(({ totalPages, characters }) => this.setState({ totalPages, characters }));
  }

  pageBack = () => {
    const prevPage = this.state.page - 1;
    this.setState({ page: prevPage });
    return this.fetchCharacters();
  }

  pageForward = () => {
    const nextPage = this.state.page + 1;
    this.setState({ page: nextPage });
    return this.fetchCharacters();
  }

  componentDidMount() {
    this.fetchCharacters();
  }

  render() {
    return (
      <section>
        <button onClick={() => { this.pageBack(); }} disabled={this.state.page <= 1}>prev page</button>
        <button onClick={() => { this.pageForward(); }} disabled={this.state.page >= this.state.totalPages}>next page</button>
        <p>page {this.state.page || 1 } of {this.state.totalPages || '*' }</p>
        <Characters characters={this.state.characters} />
      </section>
    );
  }

}
