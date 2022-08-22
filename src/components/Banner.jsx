import React from "react";

import styled from "styled-components";

const Banner = () => {
  return (
    <BannerContainer>
      <div className="banner-char">
        <img src="./svg/banner-char.svg" alt="banner-char" />
      </div>
      <div className="banner-pattern">
        <img src="./svg/banner-pattern.svg" alt="banner-pattern" />
      </div>
    </BannerContainer>
  );
};

export default Banner;

const BannerContainer = styled.header`
  top: 0;
  position: sticky;
  margin-bottom: 5vh;
  z-index: 99;

  .banner-char {
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .banner-pattern {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
