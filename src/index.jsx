import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyCKNSAM4DdCJtkhB-Fhqy3x6MHRAcY3caw';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { videos: [] };
    YTSearch({key: API_KEY, term: 'myon and shane 54'}, (videos) => {
      this.setState({ videos });
      console.log(videos);
    })
  }

  render() {
    return (
      <div className="main-page">
        <SearchBar />
        <div className="video-main">
          <VideoDetail video={this.state.videos[0]}/>
          <VideoList videos={this.state.videos} />
        </div>
      </div>
    );
  }
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<App/>, document.querySelector('#root'));
});
