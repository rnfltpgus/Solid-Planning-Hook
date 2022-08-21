import React from "react";

import styled from "styled-components";

const Header = () => {
  return (
    <HeaderContainer>
      <h1>화섬 아파트 지구家 입주민들</h1>
      <span>화섬 아파트에 입주한 입주민들입니다.</span>
      <span>같이 화성에 가는 날을 기다리며 화목하게 지내봐요!</span>
      <div className="search-input">
        <input placeholder="검색어를 입력하세요." type="text" />
        <button>
          <img src="./svg/search-icon.svg" alt="search-icon" />
        </button>
      </div>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  margin-bottom: 10vh;

  h1 {
    margin-top: 3vh;
    margin-bottom: 2.5vh;
    font-size: 2rem;
    font-weight: bold;
  }

  span {
    margin-top: 0.7rem;
  }

  .search-input {
    display: flex;
    margin-top: 5vh;

    input {
      width: 30vw;
      height: 4vh;
      border-radius: 0.7rem;
      margin-right: 0.5rem;
    }

    button {
      margin: auto 0;
      background-color: #fff;
      border: none;
      height: 3vh;
    }
  }
`;
