/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // 한화 이글스 브랜드 색상
        "main-orange": "#fc4e00",
        "dim-black": "#555555",
        "dark-black": "#333333",
        "silver-black": "#777777",
        "dark-gray": "#bdbdbd",
        "light-gray": "#f5f5f5",
        "cloudy-gray": "#f9f9f9",
        "main-gray": "#dddddd",
        "custom-black": "#1a1a1a",
      },
      fontFamily: {
        pretendard: [
          "Pretendard Variable",
          "Pretendard",
          "-apple-system",
          "BlinkMacSystemFont",
          "system-ui",
          "Roboto",
          "Helvetica Neue",
          "Segoe UI",
          "Apple SD Gothic Neo",
          "Noto Sans KR",
          "Malgun Gothic",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "sans-serif",
        ],
        esamanru: [
          "esamanru",
          "Pretendard Variable",
          "Pretendard",
          "Apple SD Gothic Neo",
          "Noto Sans KR",
          "sans-serif",
        ],
        korean: [
          "Pretendard Variable",
          "Pretendard",
          "Apple SD Gothic Neo",
          "Noto Sans KR",
          "Malgun Gothic",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
};
