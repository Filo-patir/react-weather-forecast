import React from 'react';
import icon from '@/assets/images/current-location.svg';

export default function CurrentLocation() {
  return (
    <>
      <div className="items-center hidden gap-2 p-3 rounded-full shadow-2xl cursor-pointer bg-green sm:flex">
        <img src={icon} alt="current location" className="w-[20px]" />
        <p>Current Location</p>
      </div>
      <div className="content-center self-center block w-16 rounded-full shadow-2xl cursor-pointer sm:hidden h-14 bg-green">
        <img src={icon} alt="current location" className="self-center w-12 h-12 justify-self-center" />
      </div>
    </>
  );
}
