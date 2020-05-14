import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ onVideoSelect, videos }) => {
  const videoItems = videos.map(video => (
    <VideoItem
      key={video.id.videoId}
      onVideoSelect={onVideoSelect}
      video={video}
    />
  ));

  return <ul className='related-videos'>{videoItems}</ul>;
};

export default VideoList;
