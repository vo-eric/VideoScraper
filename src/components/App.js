import React, { Component } from 'react';

import SearchBar from './SearchBar';
import VideoList from './VideoList.js';
import VideoItem from './VideoItem.js';
import Header from './Header';
import VideoDetail from './VideoDetail.js';
import youtube from '../apis/youtube';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { videos: [], selectedVideo: null };

    this.onSubmit = this.onSubmit.bind(this);
    this.onVideoSelect = this.onVideoSelect.bind(this);
  }

  async onSubmit(term) {
    const response = await youtube.get('/search', {
      params: {
        q: term,
      },
    });
    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0],
    });
  }

  onVideoSelect(video) {
    this.setState({ selectedVideo: video });
  }

  render() {
    return (
      <div>
        <Header />
        <div className='main-content'>
          <SearchBar onSubmit={this.onSubmit} />
          <div className='video-content'>
            <VideoDetail video={this.state.selectedVideo} />
            <VideoList
              videos={this.state.videos}
              onVideoSelect={this.onVideoSelect}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
