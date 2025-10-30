# 한화 이글스 클라이언트

리액트 기반 한화 이글스 팬 커뮤니티 웹 애플리케이션입니다.

## 🚀 기능

- 홈 페이지
- 커뮤니티 페이지
- 반응형 네비게이션
- GitHub Actions CI/CD
- GitHub Pages 자동 배포

## 🛠️ 기술 스택

- React 18
- TypeScript
- Vite
- React Router DOM
- GitHub Actions

## 🌐 배포

GitHub Pages를 통해 자동 배포됩니다:
https://kim-jaeseung.github.io/HanWhaEaglesClient/

## 📦 설치 및 실행

```bash
cd HanwhaIgilShootClient
npm install
npm run dev
```

## 🔧 빌드

```bash
npm run build
```

```
HanWhaEaglesClient
├─ HanwhaIgilShootClient
│  ├─ README.md
│  ├─ eslint.config.js
│  ├─ index.html
│  ├─ package-lock.json
│  ├─ package.json
│  ├─ postcss.config.js
│  ├─ public
│  │  ├─ fonts
│  │  ├─ img
│  │  │  ├─ baseballBack.svg
│  │  │  ├─ biLogo.svg
│  │  │  ├─ bottomImg.svg
│  │  │  ├─ cloudy.svg
│  │  │  ├─ logo.svg
│  │  │  ├─ mainBack.svg
│  │  │  ├─ mainTopBack.svg
│  │  │  ├─ sun.svg
│  │  │  └─ sunny.svg
│  │  └─ vite.svg
│  ├─ src
│  │  ├─ App.css
│  │  ├─ App.tsx
│  │  ├─ assets
│  │  │  └─ react.svg
│  │  ├─ components
│  │  │  ├─ AppRouter.tsx
│  │  │  ├─ BestPick.tsx
│  │  │  ├─ BiSection.tsx
│  │  │  ├─ BottomVideo.tsx
│  │  │  ├─ Footer.tsx
│  │  │  ├─ GlassContainer.tsx
│  │  │  ├─ Login.tsx
│  │  │  ├─ Navigation.tsx
│  │  │  ├─ News.tsx
│  │  │  ├─ PlayerInfo.tsx
│  │  │  └─ Weather.tsx
│  │  ├─ constants
│  │  │  ├─ NewsObj.ts
│  │  │  ├─ WeatherObj.ts
│  │  │  ├─ player.ts
│  │  │  └─ routes.ts
│  │  ├─ hooks
│  │  ├─ index.css
│  │  ├─ main.tsx
│  │  ├─ pages
│  │  │  ├─ CommunityPage.tsx
│  │  │  ├─ HomePage.tsx
│  │  │  └─ LoginPage.tsx
│  │  ├─ services
│  │  ├─ store
│  │  ├─ styles
│  │  │  └─ navigation.css
│  │  ├─ types
│  │  └─ utils
│  ├─ tailwind.config.js
│  ├─ tsconfig.app.json
│  ├─ tsconfig.json
│  ├─ tsconfig.node.json
│  └─ vite.config.ts
└─ README.md

```