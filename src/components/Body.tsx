import React from "react";
import useWeatherData from "../api/fetchData.ts";
import { Panel } from "./Panel.tsx";
import DayForecast from "./DayForecast.tsx";
import HourlyForecast from "./HourlyForecast.tsx";
import CurrentWeatherDetails from "./WeatherItem.tsx";
import { toLocalDayMonth, toLocalTime } from "../utils/timeUtils.ts";
import { WeatherData } from "../models/weatherData.ts";
import { WeatherForecast } from "../models/weatherForecast.ts";
import { ToIcon } from "../utils/iconUtils.ts";

export function Body({lat, lon, theme }) {
  const weatherData = useWeatherData({key: "weather", lat, lon})
  const weatherForecast = useWeatherData({key: "forecast", lat, lon})
  if (weatherData.isPending || weatherForecast.isPending) {
      return <p>Loading...</p>
  }
  else if (weatherData.isError || weatherForecast.isError) {
      return <p>Error: {weatherData.error?.message} {weatherForecast.error?.message}</p>
  }
  else {
    const data: WeatherData = weatherData.data
    const forecast: WeatherForecast = weatherForecast.data
    setInterval(() => {
      weatherData.refetch()
    }, 60000)
      return (
          <main className="flex flex-col items-center justify-center gap-4 w-full py-8 sm:flex-row sm:flex-wrap">
          <Panel className="w-full py-11 sm:w-1/3 flex-col" theme={theme}>
            <h2 className="text-3xl py-6">{`${data.name}, ${data.sys.country}`}</h2>
            <div className="flex flex-col items-center justify-center py-6">
              <h1 id="time" className="text-6xl font-bold">{toLocalTime(data.dt, data.timezone)}</h1>
              <p>{toLocalDayMonth(data.dt, data.timezone)}</p>
            </div>
          </Panel>
          <Panel className="w-full justify-between flex-wrap sm:w-1/2 flex-col sm:flex-row py-8 gap-4" theme={theme}>
            <div className="flex flex-col items-center justify-center w-1/5 text-center">
              <div>
                <h1>{data.main.temp.toFixed(0)}&#8451;</h1>
                <p>Feels like: {data.main.feels_like.toFixed(0)}&#8451;</p>
              </div>
              <div className="hidden sm:block w-1/2 py-3">
                <div className="flex justify-center items-center py-3">
                  <img
                    className="px-3"
                    src={`${ToIcon("01d")}`}
                    alt="weather icon"
                  />
                  <div className="flex flex-col items-center justify-center">
                    <h6>Sunrise</h6>
                    <p>{toLocalTime(data.sys.sunrise,data.timezone)}</p>
                  </div>
                </div>
                <div className="flex justify-center items-center">
                  <img
                    className="px-3"
                    src={`${ToIcon("01n")}`}
                    alt="weather icon"
                  />
                  <div className="flex flex-col items-center justify-center">
                    <h6>Sunset</h6>
                    <p>{toLocalTime(data.sys.sunset,data.timezone)}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-items-center w-1/3">
              <img
              src={`${ToIcon(data.weather[0].icon)}`}
              alt="weather icon"
              />
              <h4 className="py-3">{data.weather[0].main}</h4>
            </div>
            <div className="flex flex-wrap flex-row justify-center items-center gap-4">
              <CurrentWeatherDetails
                icon={theme === "light" ? require("../assets/images/humidity_white.png") : require("../assets/images/humidity_black.png")}
                title="Humidity"
                value={data.main.humidity.toString() + " %"}
              />
              <CurrentWeatherDetails
                icon={theme === "light" ? require("../assets/images/wind_white.png") : require("../assets/images/wind_black.png")}
                title="Wind Speed"
                value={`${data.wind.speed.toString()} km/h`}
              />
              <CurrentWeatherDetails
                icon={theme === "light" ? require("../assets/images/pressure_white.png") : require("../assets/images/pressure_black.png")}
                title="Pressure"
                value={data.main.pressure + " hPa"}
              />
              <CurrentWeatherDetails
                icon="https://openweathermap.org/img/wn/01d@2x.png"
                title="09:03"
                value="24&#8451;"
              />
            </div>
            <div className="flex sm:hidden justify-center items-center gap-3 w-full">
              <div className="flex justify-center items-center w-1/3 px-3">
                <img
                  className="h-32 px-3"
                  src={`${ToIcon("01d")}`}
                  alt="weather icon"
                />
                <div className="flex flex-col items-center justify-center">
                  <h6>Sunrise</h6>
                  <p>{toLocalTime(data.sys.sunrise,data.timezone)}</p>
                </div>
              </div>
              <div className="flex justify-center items-center w-1/3 px-3">
                <img
                className="h-32 px-3"
                src={`${ToIcon("01n")}`}
                alt="weather icon"
                />
                <div className="flex flex-col items-center justify-center">
                  <h6>Sunset</h6>
                  <p>{toLocalTime(data.sys.sunset,data.timezone)}</p>
                </div>
              </div>
            </div>
          </Panel>
          <Panel className="w-full sm:w-1/4 flex-col" theme={theme}>
            <h3>5 Days Forecast</h3>
            {forecast.list.filter(
              (item) => item.dt_txt.includes("12:00:00")
            ).map((item) => {
              return (
                <DayForecast
                  key={item.dt}
                  day={toLocalDayMonth(item.dt, data.timezone)}
                  icon={`${ToIcon(item.weather[0].icon)}`}
                  temp={item.main.temp.toFixed(0) + "℃"}
                />
              )
            })}
          </Panel>
          <Panel className="w-full sm:w-8/12 flex flex-col" theme={theme}>
            <h3>Hourly Forecast</h3>
            <div className="flex">
              {
                forecast.list.slice(
                  0,
                  7
                ).map(
                  (item) => {
                    return (
                      <HourlyForecast
                        key={item.dt}
                        icon={`${ToIcon(item.weather[0].icon)}`}
                        temp={item.main.temp.toFixed(0) + "℃"}
                        time={toLocalTime(item.dt, data.timezone)}
                        wind={item.wind.speed.toFixed(0) + " km/h"}
                        wind_dir={item.wind.deg}
                      />
                    )
                  }
                )
              }
            </div>
          </Panel>
        </main>
      )
  }
}