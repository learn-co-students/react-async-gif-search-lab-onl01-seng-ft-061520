import React, { Component } from 'react'

export default class GifSearch extends Component {
  constructor() {
    super()
    this.state = {
      query: ''
    }
  }

  handleChange = (e) => {
    this.setState({
      query: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state)
    this.props.fetchGifs(this.state.query)
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange}></input>
        </form>
      </div>
    )
  }
}
