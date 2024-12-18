import React from 'react';
import styled from 'styled-components';

const HomeContainer = styled.div`
  background-color: #572932;
  color: #DFD1A7;
  padding: 4rem 2rem;
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

const MainImage = styled.img`
  width: 35%;
  height: auto;
  margin-bottom: 1rem;
  border-radius: 10px;
`;

function Home() {
    const imageUrl = 'https://s3.amazonaws.com/jjalbritton.media/pics/cropped.jpg';
  return (
    <HomeContainer>
         <MainImage src={imageUrl} alt="Main performance image" />
      <Title>J.J. Albritton</Title>
      <Subtitle>Singer, guitarist, solo entertainer in Bradenton, FL.</Subtitle>
      <Subtitle>941-209-8340</Subtitle>
      <Subtitle>jj@jjalbritton.com</Subtitle>
      <Button href="https://youtu.be/AeQWwXxScQs">Demo Video</Button>
      <Button href="/calendar">View My Calendar</Button>
    </HomeContainer>
  );
}

export default Home;