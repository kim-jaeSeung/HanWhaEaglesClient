function Weather() {
  return (
    <div>
      <h2>날씨</h2>
      <div className="weather-glass rounded-3xl p-6">
        <div className="flex items-center ">
          <img src="./img/sunny.svg" alt="날씨 아이콘" />
          <div>
            <p className="font-esamanru">
              오늘은 <span className="text-main-orange">승리하기</span> 딱 좋은
              날
            </p>
            <p className="font-esamanru text-gradient-white text-[8rem]">
              25.2℃
            </p>
          </div>
        </div>
        <div>
          <div>
            <p>14.5℃</p>
            <img src="" alt="날씨 아이콘" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Weather;
