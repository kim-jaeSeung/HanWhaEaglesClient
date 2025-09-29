import PlayerInfo from "../components/PlayerInfo";
function HomePage() {
  return (
    <div className="flex flex-col items-center">
      <div className="text-center">
        <img
          src="/img/mainBack.svg"
          alt="한화 이글스 메인 배경"
          className="w-full h-auto mx-auto mb-8"
        />
      </div>
      <PlayerInfo />
    </div>
  );
}

export default HomePage;
