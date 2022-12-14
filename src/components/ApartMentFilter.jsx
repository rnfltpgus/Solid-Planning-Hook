import React, { useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";

import { userState, ownApartMentState, filterState } from "../recoil/atom";

import styled from "styled-components";

const ApartMentFilter = () => {
  const user = useRecoilValue(userState);
  const ownCount = useSetRecoilState(ownApartMentState);
  const isFilter = useSetRecoilState(filterState);
  const [filterAppear, setFilterAppear] = useState(false);

  const handleToggleButton = () => {
    setFilterAppear(!filterAppear);
    filterReset();
  };

  const filterReset = () => {
    ownCount(0);
    isFilter(false);
  };

  const handleReplaceFilter = (value) => {
    if (!value) {
      filterReset();
      return;
    }

    ownCount(value);
    isFilter(true);
  };

  return (
    <FilterComponents>
      <div className="filter-components">
        <div className="filter-section-name">
          {filterAppear ? "화섬 아파트 NFT" : `입주민들 ${user.length}명`}
        </div>
        <button
          className="filter-toggle-btn"
          onClick={handleToggleButton}
        ></button>
      </div>
      {filterAppear && (
        <ul className="filter-list">
          <span className="own-apartment">보유 아파트</span>
          <li>
            <button
              className="filter-btn"
              onClick={() => handleReplaceFilter(0)}
            >
              전체
            </button>
          </li>
          <li>
            <button
              className="filter-btn"
              onClick={() => handleReplaceFilter(5)}
            >
              5개 이상
            </button>
          </li>
          <li>
            <button
              className="filter-btn"
              onClick={() => handleReplaceFilter(4)}
            >
              4개
            </button>
          </li>
          <li>
            <button
              className="filter-btn"
              onClick={() => handleReplaceFilter(3)}
            >
              3개
            </button>
          </li>
          <li>
            <button
              className="filter-btn"
              onClick={() => handleReplaceFilter(2)}
            >
              2개
            </button>
          </li>
          <li>
            <button
              className="filter-btn"
              onClick={() => handleReplaceFilter(1)}
            >
              1개
            </button>
          </li>
        </ul>
      )}
    </FilterComponents>
  );
};

export default ApartMentFilter;

const FilterComponents = styled.section`
  height: 8vh;
  display: flex;
  flex-direction: column;

  .filter-components {
    width: 100%;
    height: 3.5vh;
    display: flex;
    justify-content: space-between;
    border-bottom: 0.1rem solid black;
  }

  .filter-section-name {
    height: 3.5vh;
    color: #fff;
    padding: 0.6rem 0.6rem 0 0.6rem;
    background-color: #000;
    border-radius: 0.5rem 0.5rem 0 0;
    font-size: 0.8rem;
    font-weight: bold;
  }

  .filter-toggle-btn {
    display: inline-block;
    width: 25px;
    height: 25px;
    background: url(./svg/filter-icon.svg) no-repeat center center / 100% 100%;
    appearance: none;
    border: none;
  }

  .filter-list {
    margin-top: 0.5rem;
    display: flex;

    .own-apartment {
      font-weight: bold;
      margin: auto 0;
    }
  }

  .filter-btn {
    height: 3vh;
    margin-left: 1vw;
    border: none;
    background-color: #fff;
    cursor: pointer;

    :hover {
      border-radius: 0.6rem;
      color: #fff;
      background-color: #000;
    }
  }
`;
