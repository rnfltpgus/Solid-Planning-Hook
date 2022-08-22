import React, { useState } from "react";
import { useSetRecoilState } from "recoil";

import { searchState, searchingState } from "../recoil/atom";

import styled from "styled-components";

const Header = () => {
  const searching = useSetRecoilState(searchingState);
  const searchKeyword = useSetRecoilState(searchState);
  const [search, setSearch] = useState("");

  const onChange = (event) => {
    setSearch(event.target.value);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    searching(true);
    searchKeyword(search);
    setSearch("");
  };

  return (
    <HeaderContainer>
      <h1>화섬 아파트 지구家 입주민들</h1>
      <span>화섬 아파트에 입주한 입주민들입니다.</span>
      <span>같이 화성에 가는 날을 기다리며 화목하게 지내봐요!</span>
      <form className="search-input">
        <input
          placeholder="검색어를 입력하세요."
          type="text"
          value={search}
          onChange={onChange}
        />
        <button onClick={handleSearch}>
          <img src="./svg/search-icon.svg" alt="search-icon" />
        </button>
      </form>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 8vh;

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
    position: relative;
    display: flex;
    margin-top: 5vh;

    input {
      width: 33vw;
      height: 4vh;
      border-radius: 0.7rem;
      margin-right: 0.5rem;
    }

    button {
      right: 1rem;
      top: 0.4rem;
      position: absolute;
      background-color: #fff;
      border: none;
      cursor: pointer;
    }
  }
`;
