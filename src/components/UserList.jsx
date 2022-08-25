import React, { useState, useEffect } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";

import {
  userState,
  filterState,
  searchState,
  searchingState,
  ownApartMentState,
} from "../recoil/atom";
import ApartMentFilter from "./ApartMentFilter";
import Pagination from "./Pagination";
import UserInformation from "./UserInformation";

import styled from "styled-components";

const UserList = () => {
  let user = useRecoilValue(userState);
  const catchUsers = useSetRecoilState(userState);
  const isFilter = useRecoilValue(filterState);
  const ownCount = useRecoilValue(ownApartMentState);
  const searchKeyword = useRecoilValue(searchState);
  const isKeyword = useRecoilValue(searchingState);
  const [limit, setLimit] = useState(8);
  const [page, setPage] = useState(1);
  const [message, setMessage] = useState(null);
  const offset = (page - 1) * limit;

  useEffect(() => {
    async function getUsersData() {
      try {
        const response = await fetch("./data/data.json");
        const data = await response.json();

        if (data.length > 0) {
          catchUsers(data);
        }
      } catch (error) {
        console.error(error);
      }
    }

    getUsersData();
  }, [catchUsers]);

  const handleUserAction = () => {
    if (user.includes(!searchKeyword)) {
      setMessage("요청한 검색결과가 없습니다.");
      return;
    }

    user = user.filter((user) => {
      const { nickname, oname, building_count } = user;
      const keyWord = searchKeyword.toLowerCase();
      const building = String(building_count);

      return (
        nickname.toLowerCase().includes(keyWord) ||
        oname.toLowerCase().includes(keyWord) ||
        building.includes(searchKeyword)
      );
    });
  };

  if (isKeyword) {
    handleUserAction();
  }

  const handleFilteredList = () => {
    user = user.filter((user) => {
      if (ownCount === 5) {
        return user.building_count >= ownCount;
      }

      return user.building_count === ownCount;
    });
  };

  if (isFilter) {
    handleFilteredList();
  }

  return (
    <UserListComponents>
      <ApartMentFilter />
      <ul className="user-list">
        {message && <span className="no-searching-message">{message}</span>}
        {user &&
          user.slice(offset, offset + limit).map((user, index) => {
            const { id, nickname, oname, building_count } = user;

            return (
              <li key={index}>
                <UserInformation
                  id={id}
                  nickname={nickname}
                  oname={oname}
                  buildingCount={building_count}
                />
              </li>
            );
          })}
      </ul>
      <Pagination
        user={user.length}
        limit={limit}
        page={page}
        setPage={setPage}
      />
    </UserListComponents>
  );
};

export default UserList;

const UserListComponents = styled.div`
  .no-searching-message {
    color: #fc67b7;
    font-weight: bold;
    text-decoration: underline;
    text-underline-position: under;
  }
`;
