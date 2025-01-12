import React from 'react';
import windIcon from '../assets/images/wind_dir.png';

type Props = {
  time: string;
  temp: string;
  icon: string;
  wind: string;
  wind_dir: number;
};

export default function HourlyForecast({ time, temp, icon, wind, wind_dir }: Props) {
  return (
    <div className="flex flex-col items-center justify-between gap-1 px-4 py-3">
      <div>{time}</div>
      <img className="h-1/5" src={icon} alt={icon} />
      <div>{temp}</div>
      <img src={windIcon} alt={wind_dir.toString()} style={{ transform: `rotate(${wind_dir}deg)` }} />
      <div>{wind}</div>
    </div>
  );
}
