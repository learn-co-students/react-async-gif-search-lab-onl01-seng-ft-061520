import React, { Component } from 'react';

class GifSearch extends Component {
  constructor() {
    super();
    this.state = {
      keywords: ''
    };
  }

  changeKeywords = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  searchSubmit = (event) => {
    event.preventDefault()
    if (!!this.state.keywords) {
      this.props.handleSearch(this.state)
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.searchSubmit}>
          <input type="text" name="keywords" onChange={this.changeKeywords} value={this.state.keywods} />
          <button type="submit">Search Gifs</button>
        </form>
      </div>
    );
  }

}

export default GifSearch;
