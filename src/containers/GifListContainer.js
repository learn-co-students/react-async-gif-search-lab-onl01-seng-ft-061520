import React, {Component} from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

export default class GifListContainer extends Component {
  constructor() {
    super();
    this.state = {
      gifUrls: []
    };
  }

  handleSearch = ({keywords}) => {
    fetch('https://api.giphy.com/v1/gifs/search?q=' + keywords + '&api_key=dc6zaTOxFJmzC&rating=g')
    .then(response => response.json())
    .then(json => {
      const firstThreeGifs = json.data.slice(0,3)
      const gifUrls = firstThreeGifs.map(gif => gif.images.original.url)
      this.setState({
        gifUrls: gifUrls,
        keywords: keywords
      })
    })
  }

  render() {
    return (
      <div>
        <GifSearch handleSearch={this.handleSearch} />
        {this.state.gifUrls.map(gifUrl => {
          return <GifList gifUrl={gifUrl} />
        })}
      </div>
    );
  }

}
