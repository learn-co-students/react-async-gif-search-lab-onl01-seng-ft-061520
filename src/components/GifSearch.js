import React, { Component } from 'react'

export default class GifSearch extends Component{
  constructor(){
    super()
    this.state = {
      terms: ""
    }
  }

  handleChange = () => {
    let terms = document.getElementById('search-field').value
    this.setState({terms: terms});
  }

  render(){
    return(
      <form id="search-form" name="search-form" onSubmit={e => this.props.handleSubmit(this.state.terms, e)}>
        <input type="text" id="search-field" name="search-field"  onChange={this.handleChange} />
        <input type="submit" id="submit" value="Search" />
      </form>
    )
  }
}
