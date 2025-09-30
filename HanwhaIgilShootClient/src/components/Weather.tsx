function Weather() {
  return (
    <div className="flex-1">
      <h2 className="mb-4">날씨</h2>
      <div className="weather-glass rounded-3xl p-6">
        <div className="flex items-center ">
          <img src="./img/sunny.svg" alt="날씨 아이콘" />
          <div>
            <p className="font-esamanru text-[2rem]">
              오늘은
              <br />
              <span className="text-main-orange">승리하기</span>
              <br /> 딱 좋은 날
            </p>
            <p className="font-esamanru text-gradient-white text-[4rem]">
              25.2℃
            </p>
          </div>
        </div>
        <div className="flex justify-between mt-6">
          {/* 최대 6개 까지 */}
          <div className="mini-glass-card flex flex-col items-center p-2">
            <p className="text-l">18시</p>
            <img className="my-4" src="./img/cloudy.svg" alt="날씨 아이콘" />
            <p className="text-l">14.5℃</p>
          </div>
          <div className="mini-glass-card flex flex-col items-center p-2">
            <p className="text-l">18시</p>
            <img className="my-4" src="./img/cloudy.svg" alt="날씨 아이콘" />
            <p className="text-l">14.5℃</p>
          </div>
          <div className="mini-glass-card flex flex-col items-center p-2">
            <p className="text-l">18시</p>
            <img className="my-4" src="./img/cloudy.svg" alt="날씨 아이콘" />
            <p className="text-l">14.5℃</p>
          </div>
          <div className="mini-glass-card flex flex-col items-center p-2">
            <p className="text-l">18시</p>
            <img className="my-4" src="./img/cloudy.svg" alt="날씨 아이콘" />
            <p className="text-l">14.5℃</p>
          </div>
          <div className="mini-glass-card flex flex-col items-center p-2">
            <p className="text-l">18시</p>
            <img className="my-4" src="./img/cloudy.svg" alt="날씨 아이콘" />
            <p className="text-l">14.5℃</p>
          </div>
          <div className="mini-glass-card flex flex-col items-center p-2">
            <p className="text-l">18시</p>
            <img className="my-4" src="./img/cloudy.svg" alt="날씨 아이콘" />
            <p className="text-l">14.5℃</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Weather;
