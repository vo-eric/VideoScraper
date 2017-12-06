import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => {
  const url = video.snippet.thumbnails.default.url;

  return (
    <li onClick={ () => onVideoSelect(video)} className="related-video">
      <div className="related-videos-thumbnail">
        <img src={url} />
      </div>
      <div className="related-videos-text">
        {video.snippet.title}
      </div>
    </li>
  );
};

export default VideoListItem;
