import React from 'react';

const VideoItem = ({ video, onVideoSelect }) => {
  const url = video.snippet.thumbnails.medium.url;

  return (
    <li
      onClick={() => onVideoSelect(video)}
      className='related-videos__video-item'
    >
      <img
        className='related-videos__thumbnail'
        src={url}
        alt={video.snippet.title}
      />
      <p className='related-videos-text'>{video.snippet.title}</p>
    </li>
  );
};

export default VideoItem;
