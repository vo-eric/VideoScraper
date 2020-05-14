import React from 'react';

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div />;
  }

  const videoUrl = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <div className='video-detail'>
      <div className='video-detail__embedded-video'>
        <iframe src={videoUrl} />
      </div>
    </div>
  );
};

export default VideoDetail;
