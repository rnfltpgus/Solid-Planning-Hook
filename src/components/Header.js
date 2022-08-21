import React from "react";

import { FaSearch } from "react-icons/fa";
import styled from "styled-components";

const Header = () => {
  return (
    <Container>
      <h1>화섬 아파트 지구家 입주민들</h1>
      <span>화섬 아파트에 입주한 입주민들입니다.</span>
      <span>같이 화성에 가는 날을 기다리며 화목하게 지내봐요!</span>
      <div className="search-input">
        <input placeholder="  검색어를 입력하세요." type="text" />
        <button>
          <FaSearch />
        </button>
      </div>
    </Container>
  );
};

export default Header;

const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  margin-bottom: 10vh;

  .search-input {
    display: flex;
    margin-top: 3vh;

    input {
      width: 20vw;
      height: 3vh;
      border-radius: 0.7rem;
      margin-right: 0.5rem;
    }

    button {
      background-color: #fff;
      border: none;
      height: 3vh;
    }
  }
`;
