import React, { PureComponent } from 'react'

export default class GifList extends PureComponent {

  genTiles = () =>   {
    let tiles = []
    this.props.images.map((image, dex) => {
      tiles.push(<li style={{'margin': '15px'}} key={dex}><img style={{width: '30vw'}} src={image} alt='Gif search result'/></li>);
    });
    return tiles;
  }

  render(){

    return(
      <ul>
        {this.genTiles()}
      </ul>
    )
  }
}
