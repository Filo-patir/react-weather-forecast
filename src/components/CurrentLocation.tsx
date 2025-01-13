import React from 'react';

import useLocation from '../api/getLocation';
import icon from '../assets/images/current-location.svg';

export default function CurrentLocation({ setCoords }: { setCoords: (coords: { lat: number; lon: number }) => void }) {
  const { data: fetchLocationData } = useLocation();
  const setCurrentLocation = () => {
    setCoords({
      lat: fetchLocationData?.location.latitude,
      lon: fetchLocationData?.location.longitude,
    });
  };
  return (
    <>
      <div
        className="items-center hidden gap-2 p-3 rounded-full shadow-2xl cursor-pointer bg-green sm:flex"
        onClick={setCurrentLocation}
      >
        <img src={icon} alt="current location" className="w-[20px]" />
        <p>Current Location</p>
      </div>
      <div
        className="content-center self-center block w-16 rounded-full shadow-2xl cursor-pointer sm:hidden h-14 bg-green"
        onClick={setCurrentLocation}
      >
        <img src={icon} alt="current location" className="self-center w-12 h-12 justify-self-center" />
      </div>
    </>
  );
}
