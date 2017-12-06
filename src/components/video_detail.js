import React from 'react';

const VideoDetail = ({video}) => {
  if (!video) {
    return <div> Loading...</div>
  }
  const videoId = video.id.videoId;
  const embedUrl = `https://www.youtube.com/embed/${videoId}`;



  return (
    <div>
      <iframe src={embedUrl} />
    </div>
  );
}

export default VideoDetail;
