import React, { Component } from 'react';

export default class GifList extends Component {

  render() {
    return (
      <div>
        <img src={this.props.gifUrl} alt={this.props.gifUrl}/>
      </div>
    );
  }

}
