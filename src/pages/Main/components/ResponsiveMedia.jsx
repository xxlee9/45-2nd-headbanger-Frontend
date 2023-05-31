import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
const ResponsiveMedia = () => {
  const [isVideo, setIsVideo] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsVideo(window.innerWidth >= 700);
    };
    handleResize(); // 초기 실행
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [window.innerWidth]);
  return (
    <MediaContainer>
      {isVideo ? (
        <video src="/images/Main/camping3.mp4" loop muted autoPlay />
      ) : (
        <img src="/images/Main/camping.png" alt="캠핑 배너" />
      )}
    </MediaContainer>
  );
};
export default ResponsiveMedia;

const MediaContainer = styled.div`
  width: 100%;
  height: 790px;
  margin-top: 110px;
  video {
    width: 2200px;
    height: 700px;
    object-fit: cover;
    object-position: top right;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
