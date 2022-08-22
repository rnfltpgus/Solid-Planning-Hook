import React, { useState, useEffect } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";

import { userState, searchState, searchingState } from "../recoil/atom";
import Filter from "./Filter";
import UserInformation from "./UserInformation";

import styled from "styled-components";

const UserList = () => {
  const catchUsers = useSetRecoilState(userState);
  const searchKeyword = useRecoilValue(searchState);
  const searchingKeyword = useRecoilValue(searchingState);
  let user = useRecoilValue(userState);
  const [message, setMessage] = useState(null);

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
      console.log(searchKeyword);
      setMessage("요청한 검색결과가 없습니다.");
      return;
    }

    user = user.filter((user) => {
      const { id, nickname, oname, building_count: buildingCount } = user;
      const keyWord = searchKeyword.toLowerCase();

      return (
        nickname.toLowerCase().includes(keyWord) ||
        oname.toLowerCase().includes(keyWord)
      );
    });
  };

  if (searchingKeyword) {
    handleUserAction();
  }

  return (
    <UserListComponents>
      <Filter />
      <ul className="user-list">
        {message && <span className="no-searching-message">{message}</span>}
        {user &&
          user.map((user) => {
            const { id, nickname, oname, building_count: buildingCount } = user;

            return (
              <li key={id}>
                <UserInformation
                  id={id}
                  nickname={nickname}
                  oname={oname}
                  buildingCount={buildingCount}
                />
              </li>
            );
          })}
      </ul>
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