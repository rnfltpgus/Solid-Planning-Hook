import React from "react";

import styled from "styled-components";

const Filter = () => {
  return (
    <FilterComponents>
      <div className="filter-components">
        <div className="residents-count">입주민들 472</div>
        <button className="filter-btn">
          <img src="./svg/filter-icon.svg" alt="filter-icon" />
        </button>
      </div>
    </FilterComponents>
  );
};

export default Filter;

const FilterComponents = styled.section`
  display: flex;
  height: 5vh;

  .filter-components {
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 3.5vh;
    border-bottom: 2px solid black;
  }

  .residents-count {
    height: 3.5vh;
    color: #fff;
    padding: 0.4rem 0.6rem 0 0.6rem;
    background-color: #000;
    border-radius: 0.5rem 0.5rem 0 0;
  }

  .filter-btn {
    margin: auto 0;
    background-color: #fff;
    border: none;
    height: 3vh;
  }
`;
