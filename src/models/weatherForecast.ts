interface WeatherF {
  id: number;
  main: string;
  description: string;
  icon: string;
}

interface Main {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  sea_level: number;
  grnd_level: number;
  humidity: number;
  temp_kf: number;
}

interface Clouds {
  all: number;
}

interface Wind {
  speed: number;
  deg: number;
  gust: number;
}

interface Sys {
  pod: string;
}

interface CityCoord {
  lat: number;
  lon: number;
}

interface City {
  id: number;
  name: string;
  coord: CityCoord;
  country: string;
  population: number;
  timezone: number;
  sunrise: number;
  sunset: number;
}

interface ListItem {
  dt: number;
  main: Main;
  weather: WeatherF[];
  clouds: Clouds;
  wind: Wind;
  visibility: number;
  pop: number;
  sys: Sys;
  dt_txt: string;
}

export interface WeatherForecast {
  cod: string;
  message: number;
  cnt: number;
  list: ListItem[];
  city: City;
}