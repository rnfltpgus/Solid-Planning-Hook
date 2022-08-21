import React, { useEffect } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";

import { userState } from "../recoil/atom";
import UserInformation from "./UserInformation";

import styled from "styled-components";
import Filter from "./Filter";

const UserList = () => {
  const catchUsers = useSetRecoilState(userState);
  const user = useRecoilValue(userState);

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

  return (
    <UserListComponents>
      <Filter />
      <ul className="user-list">
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

const UserListComponents = styled.div``;
