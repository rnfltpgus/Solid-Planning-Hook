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

const ownApartMentState = atom({
  key: "ownApartMent",
  default: "",
});

const filterState = atom({
  key: "filter",
  default: false,
});

export {
  userState,
  searchState,
  searchingState,
  ownApartMentState,
  filterState,
};
