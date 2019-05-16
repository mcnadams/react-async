import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Quotes from '../components/Quotes';
import { getQuotes } from '../services/futuramaApi';

export default class TopQuotes extends PureComponent {

  static propTypes = {
    count: PropTypes.number
  }

  static defaultProps = {
    count: 10
  }
  
  state = {
    quotes: []
  }

  fetchQuotes = () => {
    getQuotes(this.props.count)
      .then(quotes => this.setState({ quotes }));
  }

  componentDidMount() {
    this.fetchQuotes();
  }

  componentDidUpdate(prevProps) {
    if(prevProps.count !== this.props.count) {
      this.fetchQuotes();
    }
  }

  render() {
    return <Quotes quotes={this.state.quotes} />;
  }

}
