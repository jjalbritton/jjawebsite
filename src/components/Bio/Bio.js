import React from 'react';
import styled from 'styled-components';

const BioContainer = styled.div`
  padding: 4rem 2rem;
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
`;

const BioTitle = styled.h1`
  margin-bottom: 2rem;
  font-size: 2.5rem;
`;

const BioText = styled.p`
  font-size: 1.2rem;
  line-height: 1.8;
`;

function Bio() {
  return (
    <BioContainer>
      <BioTitle>Bio</BioTitle>
      <BioText>
        I'm a passionate singer and guitarist, playing rock. My music is a blend of whiskey and molasses, and I perform regularly at venues across the commonwealth. Stay tuned for my upcoming
        shows!
      </BioText>
    </BioContainer>
  );
}

export default Bio;