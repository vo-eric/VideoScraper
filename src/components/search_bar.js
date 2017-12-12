import React, { Component } from 'react';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: 'myon and shane'};
  }

  render() {
    return (
      <div className="search-bar">
        <input
          value = {this.state.term}
          placeholder="Enter a search term"
          onChange={event => this.onInputChange(event.target.value)}
        />
      </div>
    );
  }

  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
}
