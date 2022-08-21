import { atom } from "recoil";

const userState = atom({
  key: "users",
  default: [],
});

export { userState };
