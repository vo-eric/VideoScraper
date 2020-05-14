import React, { Component } from 'react';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { term: '' };

    this.onInputChange = this.onInputChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onInputChange(event) {
    this.setState({ term: event.target.value });
  }

  onSubmit(event) {
    event.preventDefault();
    this.props.onSubmit(this.state.term);
  }

  render() {
    return (
      <div className='search-bar'>
        <form onSubmit={this.onSubmit}>
          <input
            value={this.state.term}
            placeholder='Enter a search term'
            onChange={this.onInputChange}
          />
        </form>
      </div>
    );
  }
}
