import React from "react";

import styled from "styled-components";

const Banner = () => {
  return (
    <Container>
      <div className="banner-character"></div>
      <div className="banner-background"></div>
    </Container>
  );
};

export default Banner;

const Container = styled.header`
  display: flex;
  width: 100vw;
  height: 20vh;
  top: 0;
  margin-bottom: 5vh;
  justify-content: center;
  position: sticky;

  .banner-character {
    width: 30vw;
    height: 100%;
    z-index: 7;
    background-color: #fbb03b;
    position: absolute;
  }

  .banner-background {
    width: 100%;
    background-color: #0e162f;
  }
`;
