import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => {
  const url = video.snippet.thumbnails.default.url;

  return (
    <li onClick={ () => onVideoSelect(video)} className="related-video">
        <img className="related-videos-thumb" src={url} />
        <p className="related-videos-text">
          {video.snippet.title}
        </p>

    </li>
  );
};

export default VideoListItem;
