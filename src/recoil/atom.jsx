import { atom } from "recoil";

const userState = atom({
  key: "users",
  default: [],
});

const searchState = atom({
  key: "search",
  default: "",
});

const searchingState = atom({
  key: "searching",
  default: false,
});

export { userState, searchState, searchingState };
