import React from 'react';

type Props = {
  day: string;
  icon: string;
  temp: string;
};

export default function DayForecast({ day, icon, temp }: Props) {
  return (
    <div className="flex items-center justify-between w-full gap-2 px-3 py-2">
      <div className="w-1/2">{day}</div>
      <div>{temp}</div>
      <img className="w-8" src={icon} alt={icon} />
    </div>
  );
}
