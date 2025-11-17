export type Category =
  | "전체"
  | "법률/일반"
  | "블로그"
  | "마케팅"
  | "쇼핑몰"
  | "학생"
  | "업무용"
  | "유튜브"
  | "글짓기"
  | "교육"
  | "엔터테인먼트"
  | "기타";

export interface Post {
  id: string;
  title: string;
  desc: string;
  author: string;
  views: number;
  comments: number;
  likes: number;
  category: Category;
  createdAt: string; // ISO string
}

export const CATEGORIES: Category[] = [
  "전체",
  "법률/일반",
  "블로그",
  "마케팅",
  "쇼핑몰",
  "학생",
  "업무용",
  "유튜브",
  "글짓기",
  "교육",
  "엔터테인먼트",
  "기타",
];
