import GlassContainer from "./GlassContainer";
import weather from "../constants/WeatherObj";
function Weather() {
  return (
    <GlassContainer title="날씨">
      <div className=" w-full flex items-center justify-between">
        <img className="w-[30%]" src="./img/sunny.svg" alt="날씨 아이콘" />
        <div>
          <p className="font-esamanru text-[1.5rem]">
            오늘은
            <span className="text-main-orange">승리하기</span>딱 좋은 날
          </p>
          <p className="font-esamanru text-gradient-white text-[3.5rem]">
            25.2℃
          </p>
        </div>
      </div>
      <div className="w-full flex justify-between gap-3 mt-6">
        {/* 최대 6개 까지 */}
        {weather.map((weatherItems, index) => (
          <div
            key={index}
            className=" w-full mini-glass-card flex flex-col  items-center p-2"
          >
            <p className="text-l">{weatherItems.time}</p>
            <img
              className="my-4"
              src={`./img/${weatherItems.icon}`}
              alt="날씨 아이콘"
            />
            <p className="text-l">{weatherItems.temperature}</p>
          </div>
        ))}
      </div>
    </GlassContainer>
  );
}

export default Weather;
