import { atom } from "recoil";

export const modalState = atom({
  key: "modalState", // 고유한 key
  default: false, // 기본값
});
