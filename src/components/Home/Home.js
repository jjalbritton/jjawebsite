import React from 'react';
import styled from 'styled-components';
import { useState, useEffect } from 'react';

const HomeContainer = styled.div`
  background-color: #572932;
  color: #DFD1A7;
  padding: 4rem 2rem;
  text-align: center;
`;

const MobileDiv = styled.div`
  background-color: #572932;
  color: #DFD1A7;
  padding: 0px 0px 0px 0px;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
`;

const Subtitle = styled.p`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const Button = styled.a`
  background-color: #DFD1A7;
  color: #333;
  padding: 0.75rem 1.5rem;
  font-size: 1.25rem;
  text-decoration: none;
  border-radius: 5px;
  width: 250px;
  height: 60px;
  text-align: center;
  display: inline-block;
  margin: 0 10rem;
  &:hover {
    background-color: #ffaa00;
  }
`;

const MobileButton = styled.a`
  background-color: #DFD1A7;
  color: #333;
  padding: 1rem 1.5rem;
  font-size: 1.25rem;
  text-decoration: none;
  border-radius: 5px;
  width: 250px;
  height: 60px;
  text-align: center;
  display: inline-block;
  margin: 15px;
  &:hover {
    background-color: #ffaa00;
  }
`;

const MainImage = styled.img`
  width: 35%;
  height: auto;
  margin-bottom: 1rem;
  border-radius: 10px;
`;

function Home() {
  const [isMobile, setIsMobile] = useState(false);
  const imageUrl = 'https://s3.amazonaws.com/jjalbritton.media/pics/cropped.jpg';

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768); // Define the threshold for mobile devices
    };
    
    // Initial check
    checkMobile();
    
    // Event listener for resizing
    window.addEventListener('resize', checkMobile);
    
    // Clean up on component unmount
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  return (
    <HomeContainer>
      {isMobile ? (
        <MobileDiv>
          <MainImage src={imageUrl} alt="Main performance image" />
          <Title>J.J. Albritton</Title>
          <Subtitle>Singer, guitarist, solo entertainer in Bradenton, FL.</Subtitle>
          <Subtitle>941-209-8340</Subtitle>
          <Subtitle>jj@jjalbritton.com</Subtitle>
          <MobileButton href="https://youtu.be/AeQWwXxScQs">Demo Video</MobileButton>
          <MobileButton href="/calendar">View My Calendar</MobileButton>
        </MobileDiv>
      ) : (
        <>
          <MainImage src={imageUrl} alt="Main performance image" />
          <Title>J.J. Albritton</Title>
          <Subtitle>Singer, guitarist, solo entertainer in Bradenton, FL.</Subtitle>
          <Subtitle>941-209-8340</Subtitle>
          <Subtitle>jj@jjalbritton.com</Subtitle>
          <Button href="https://youtu.be/AeQWwXxScQs">Demo Video</Button>
          <Button href="/calendar">View My Calendar</Button>
        </>
      )}
    </HomeContainer>
  );
}

export default Home;