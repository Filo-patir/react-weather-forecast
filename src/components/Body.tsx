import React from 'react';
import * as motion from 'motion/react-client';

import useWeatherData from '../api/fetchData';
import { WeatherData } from '../models/WeatherData';
import { WeatherForecast } from '../models/WeatherForecast';
import { Theme, ToIcon } from '../utils/';
import { toLocalDayMonth, toLocalTime } from '../utils/timeUtils';
import DayForecast from './DayForecast';
import HourlyForecast from './HourlyForecast';
import { Panel } from './Panel';
import CurrentWeatherDetails from './WeatherItem';

export function Body({ lat, lon, theme }: { lat: number; lon: number; theme: Theme }) {
  const {
    data: fetchWeatherData,
    isPending,
    isError,
    error,
    refetch: refetchWeatherData,
  } = useWeatherData({ key: 'weather', lat, lon });
  const {
    data: fetchWeatherForecast,
    isPending: isForecastPending,
    isError: isForecastError,
    error: forecastError,
  } = useWeatherData({ key: 'forecast', lat, lon });

  if (isPending || isForecastPending) {
    return <p className="w-full text-center">Loading...</p>;
  }

  if (isError || isForecastError) {
    return (
      <p>
        Error: {error?.message} {forecastError?.message}
      </p>
    );
  }

  const weatherData = fetchWeatherData as WeatherData;
  const weatherForecast = fetchWeatherForecast as WeatherForecast;

  setInterval(() => {
    refetchWeatherData();
  }, 60000);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
    >
      <main className="flex flex-col items-center justify-center w-full gap-4 py-8 sm:flex-row sm:flex-wrap">
        <Panel className="flex-col w-full py-11 sm:w-1/3" theme={theme}>
          <h2 className="py-6 text-3xl text-center w-full">{`${weatherData.name}, ${weatherData.sys.country}`}</h2>
          <div className="flex flex-col items-center justify-center py-6">
            <h1 id="time" className="text-6xl font-bold">
              {toLocalTime(weatherData.dt, weatherData.timezone)}
            </h1>
            <p>{toLocalDayMonth(weatherData.dt, weatherData.timezone)}</p>
          </div>
        </Panel>
        <Panel className="flex-col flex-wrap justify-around w-full gap-4 py-8 sm:w-1/2 sm:flex-row" theme={theme}>
          <div className="flex flex-col items-center justify-center w-1/4 text-center">
            <div>
              <h1>{weatherData.main.temp.toFixed(0)}&#8451;</h1>
              <p>Feels like: {weatherData.main.feels_like.toFixed(0)}&#8451;</p>
            </div>
            <div className="hidden p-3 sm:flex flex-col items-center justify-center">
              <div className="flex items-center justify-center py-3">
                <img className="w-1/3 h-1/3" src={`${ToIcon('01d')}`} alt="weather icon" />
                <div className="flex flex-col items-center justify-center px-3">
                  <h6>Sunrise</h6>
                  <p>{toLocalTime(weatherData.sys.sunrise, weatherData.timezone)}</p>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <img className="w-1/3 h-1/3" src={`${ToIcon('01n')}`} alt="weather icon" />
                <div className="flex flex-col items-center justify-center px-3">
                  <h6>Sunset</h6>
                  <p>{toLocalTime(weatherData.sys.sunset, weatherData.timezone)}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center w-1/3 justify-items-center">
            <img src={`${ToIcon(weatherData.weather[0].icon)}`} alt="weather icon" />
            <h4 className="py-3">{weatherData.weather[0].main}</h4>
          </div>
          <div className="flex flex-row flex-wrap items-center justify-center gap-4">
            <CurrentWeatherDetails
              icon={require(`../assets/images/humidity_${theme === Theme.LIGHT ? 'white' : 'black'}.png`)}
              title="Humidity"
              value={weatherData.main.humidity.toString() + ' %'}
            />
            <CurrentWeatherDetails
              icon={require(`../assets/images/wind_${theme === Theme.LIGHT ? 'white' : 'black'}.png`)}
              title="Wind Speed"
              value={`${weatherData.wind.speed.toString()} km/h`}
            />
            <CurrentWeatherDetails
              icon={require(`../assets/images/pressure_${theme === Theme.LIGHT ? 'white' : 'black'}.png`)}
              title="Pressure"
              value={weatherData.main.pressure + ' hPa'}
            />
            <CurrentWeatherDetails
              icon={require(`../assets/images/visibility_${theme === Theme.LIGHT ? 'white' : 'black'}.png`)}
              title="Visibility"
              value={weatherData.visibility / 1000 + ' km'}
            />
          </div>
          <div className="flex items-center justify-center w-full gap-3 sm:hidden">
            <div className="flex items-center justify-center w-1/3 px-3">
              <img className="px-3 w-2/3" src={`${ToIcon('01d')}`} alt="weather icon" />
              <div className="flex flex-col items-center justify-center">
                <h6>Sunrise</h6>
                <p>{toLocalTime(weatherData.sys.sunrise, weatherData.timezone)}</p>
              </div>
            </div>
            <div className="flex items-center justify-center w-1/3 px-3">
              <img className="w-2/3 px-3" src={`${ToIcon('01n')}`} alt="weather icon" />
              <div className="flex flex-col items-center justify-center">
                <h6>Sunset</h6>
                <p>{toLocalTime(weatherData.sys.sunset, weatherData.timezone)}</p>
              </div>
            </div>
          </div>
        </Panel>
        <Panel className="flex-col w-full sm:w-1/4" theme={theme}>
          <h3>5 Days Forecast</h3>
          {weatherForecast.list
            .filter((item) => item.dt_txt.includes('12:00:00'))
            .map((item) => {
              return (
                <DayForecast
                  key={item.dt}
                  day={toLocalDayMonth(item.dt, weatherData.timezone)}
                  icon={`${ToIcon(item.weather[0].icon)}`}
                  temp={item.main.temp.toFixed(0) + '℃'}
                />
              );
            })}
        </Panel>
        <Panel className="flex flex-col w-full sm:w-8/12" theme={theme}>
          <h3>Hourly Forecast</h3>
          <div className="flex w-full overflow-x-auto">
            {weatherForecast.list.slice(0, 7).map((item) => {
              return (
                <HourlyForecast
                  key={item.dt}
                  icon={`${ToIcon(item.weather[0].icon)}`}
                  temp={item.main.temp.toFixed(0) + '℃'}
                  time={toLocalTime(item.dt, weatherData.timezone)}
                  wind={item.wind.speed.toFixed(0) + ' km/h'}
                  wind_dir={item.wind.deg}
                />
              );
            })}
          </div>
        </Panel>
      </main>
    </motion.div>
  );
}
