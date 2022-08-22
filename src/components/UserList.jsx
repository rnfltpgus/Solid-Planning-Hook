import React, { useState, useEffect } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";

import { userState, searchState, searchingState } from "../recoil/atom";
import Filter from "./Filter";
import Pagination from "./Pagination";
import UserInformation from "./UserInformation";

import styled from "styled-components";

const UserList = () => {
  let user = useRecoilValue(userState);
  const catchUsers = useSetRecoilState(userState);
  const searchKeyword = useRecoilValue(searchState);
  const searchingKeyword = useRecoilValue(searchingState);
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

  if (searchingKeyword) {
    handleUserAction();
  }

  return (
    <UserListComponents>
      <Filter limit={limit} setLimit={setLimit} />
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
        users={user.length}
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
