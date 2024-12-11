import React from 'react';
import styled from 'styled-components';

const PhotosContainer = styled.div`
  padding: 4rem 2rem;
  text-align: center;
`;

const PhotosGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
`;

const Photo = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

function Photos() {
  return (
    <PhotosContainer>
      <h1>Photo Gallery</h1>
      <PhotosGrid>
        <Photo src="https://s3.amazonaws.com/jjalbritton.media/pics/VideoCapture_20241004-211519.jpg" alt="Performance 1" />
        <Photo src="https://s3.amazonaws.com/jjalbritton.media/pics/VideoCapture_20241005-182005.jpg" alt="Performance 2" />
        <Photo src="https://s3.amazonaws.com/jjalbritton.media/pics/VideoCapture_20241005-182051.jpg" alt="Performance 3" />
      </PhotosGrid>
    </PhotosContainer>
  );
}

export default Photos;