import React from 'react';

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div />;
  }

  const videoUrl = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <div className='video-detail'>
      <div className='embedded-video'>
        <iframe src={videoUrl} />
      </div>

      <h1>{video.snippet.title}</h1>
      <h1>{video.snippet.description}</h1>
    </div>
  );
};

export default VideoDetail;
