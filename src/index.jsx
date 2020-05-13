import dotenv from 'dotenv';
import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

dotenv.config();

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null,
    };
  }

  videoSearch(term) {
    YTSearch({ key: process.env.REACT_APP_API_KEY, term }, videos => {
      this.setState({ videos });
      if (!this.state.selectedVideo) {
        this.setState({ selectedVideo: videos[0] });
      }
    });
  }

  render() {
    const videoSearch = _.debounce(term => {
      this.videoSearch(term);
    }, 300);

    return (
      <div className='main-page'>
        <SearchBar onSearchTermChange={videoSearch} />
        <div className='video-main'>
          <VideoDetail video={this.state.selectedVideo} />
          <VideoList
            onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
            videos={this.state.videos}
          />
        </div>
      </div>
    );
  }
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<App />, document.getElementById('root'));
});
