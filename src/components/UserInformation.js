import styled from "styled-components";

const UserInformation = ({ nickname, oname, buildingCount }) => {
  return (
    <UserContainer>
      <div className="user-profile-img">
        <img src="./svg/profile-img.svg" alt="profile-img" />
      </div>
      <div className="user-profile-detail">
        <div className="user-info">
          <div>{nickname}</div>
          <div>{`지구家 아파트 ${buildingCount}개`}</div>
        </div>
        <div className="user-id">
          <div>{nickname}</div>
          <div>{oname}</div>
        </div>
      </div>
    </UserContainer>
  );
};

export default UserInformation;

const UserContainer = styled.div`
  width: 42vw;
  height: 10vh;
  padding: 1rem;
  margin-bottom: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1vw;
  box-sizing: border-box;
  border: 1px solid black;
  border-radius: 1rem;

  .user-profile-img {
    width: 20%;
    height: 100%;
    text-align: center;
  }

  .user-profile-detail {
    width: 80%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 3vh;

    .user-info {
      display: flex;
      gap: 5vw;
    }

    .user-id {
      display: flex;
      gap: 1vw;
    }
  }
`;
