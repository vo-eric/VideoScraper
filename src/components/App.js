import React, { Component } from 'react';

import SearchBar from './SearchBar';
import VideoList from './VideoList.js';
import VideoItem from './VideoItem.js';
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
    this.setState({ videos: response.data.items });
  }

  onVideoSelect(video) {
    this.setState({ selectedVideo: video });
  }

  render() {
    return (
      <div className='main-page'>
        <SearchBar onSubmit={this.onSubmit} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          videos={this.state.videos}
          onVideoSelect={this.onVideoSelect}
        />
      </div>
    );
  }
}

export default App;
