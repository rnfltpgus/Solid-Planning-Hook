import React from "react";
import { useRecoilValue } from "recoil";

import { userState } from "../recoil/atom";
import styled from "styled-components";

const Filter = () => {
  const user = useRecoilValue(userState);

  return (
    <FilterComponents>
      <div className="filter-components">
        <div className="residents-count">{`입주민들 ${user.length}명`}</div>
        <button className="filter-btn">
          <img src="./svg/filter-icon.svg" alt="filter-icon" />
        </button>
      </div>
    </FilterComponents>
  );
};

export default Filter;

const FilterComponents = styled.section`
  height: 5vh;
  display: flex;

  .filter-components {
    width: 100%;
    height: 3.5vh;
    display: flex;
    justify-content: space-between;
    border-bottom: 0.1rem solid black;
  }

  .residents-count {
    height: 3.5vh;
    color: #fff;
    padding: 0.6rem 0.6rem 0 0.6rem;
    background-color: #000;
    border-radius: 0.5rem 0.5rem 0 0;
    font-size: 0.8rem;
  }

  .filter-btn {
    height: 3vh;
    margin: auto 0;
    background-color: #fff;
    border: none;
    cursor: pointer;
  }
`;
