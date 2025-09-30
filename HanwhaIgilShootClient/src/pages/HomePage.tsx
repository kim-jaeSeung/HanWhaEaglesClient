import PlayerInfo from "../components/PlayerInfo";
import Weather from "../components/Weather";
import News from "../components/News";
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
      <div className="flex items-stretch w-[80%] gap-20 mt-80">
        <Weather />
        <News />
      </div>
    </div>
  );
}

export default HomePage;
