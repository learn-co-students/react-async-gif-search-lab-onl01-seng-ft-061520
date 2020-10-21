import React, { PureComponent } from 'react';
import GifSearch from '../components/GifSearch'
import GifList from '../components/GifList'

export default class GiftListContainer extends PureComponent{
  constructor(props){
    super(props)
    this.state = {
      images: []
    }
  }

  componentDidMount(){
    let images = [];
    let baseLink = 'https://api.giphy.com/v1/gifs/search?q=dolphin&api_key=pfTscgWZSuRgV1GqKJaQ8viWxoVSK7lu&rating=g';
    fetch(baseLink)
      .then(response => response.json())
        .then(json => {
          let images = [];
          for(let i=0; i<3; i++){
            images.push(json.data[i].images.original.url);
          }
          this.setState({images: images});
    });
  }

  handleSubmit = (terms, e) => {
    e.preventDefault();

    let searchLink = `https://api.giphy.com/v1/gifs/search?q=${terms}&api_key=pfTscgWZSuRgV1GqKJaQ8viWxoVSK7lu&rating=g`
    fetch(searchLink)
      .then(response => response.json())
        .then(json => {
          let images = [];
          for(let i=0; i<3; i++){
            images.push(json.data[i].images.original.url);
          }
          this.setState({images: images});
        });
  }

  render(){

    return(
      <div>
      <GifSearch handleSubmit={this.handleSubmit} />
      <GifList images={this.state.images} />
      </div>
    )
  }
}
