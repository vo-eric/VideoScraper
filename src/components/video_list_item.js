import React from 'react';

const VideoListItem = (props) => {
  const imageLink = props.video.snippet.thumbnails.default.url;
  return (
    <li>
      <div>
        <img src={imageLink} />
      </div>
      <div>
        {props.video.snippet.title}
      </div>
    </li>
  );
};

export default VideoListItem;
