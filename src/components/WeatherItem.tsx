import React from 'react';

export default function CurrentWeatherDetails({ icon, title, value }: { icon: string; title: string; value: string }) {
  return (
    <div className="flex flex-col items-center justify-center w-2/5">
      <img className="w-12 h-12" src={icon} alt={icon} />
      <div className="flex flex-col items-center justify-center">
        <span className="text-xs">{title}</span>
        <span className="text-xs">{value}</span>
      </div>
    </div>
  );
}
