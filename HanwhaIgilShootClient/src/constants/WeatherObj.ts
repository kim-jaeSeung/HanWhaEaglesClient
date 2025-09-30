interface WeatherData {
  id: number;
  time: string;
  temperature: string;
  icon: string;
}

const weather: WeatherData[] = [
  {
    id: 1,
    time: "18시",
    temperature: "14.5℃",
    icon: "sun.svg",
  },
  {
    id: 2,
    time: "19시",
    temperature: "15.2℃",
    icon: "sun.svg",
  },
  {
    id: 3,
    time: "20시",
    temperature: "13.8℃",
    icon: "cloudy.svg",
  },
  {
    id: 4,
    time: "21시",
    temperature: "12.5℃",
    icon: "sun.svg",
  },
  {
    id: 5,
    time: "22시",
    temperature: "11.3℃",
    icon: "cloudy.svg",
  },
  {
    id: 6,
    time: "23시",
    temperature: "10.7℃",
    icon: "cloudy.svg",
  },
];

export default weather;
