import React from "react";
import icon from "../assets/images/current-location.svg";

export default function CurrentLocation() {
  return (
    <>
      <div className="hidden bg-green p-3 rounded-full shadow-2xl items-center gap-2 sm:flex cursor-pointer">
        <img src={icon} alt="current location" className="w-[20px]" />
        <p>Current Location</p>
      </div>
      <div className="sm:hidden w-16 h-14 bg-green rounded-full block self-center content-center shadow-2xl cursor-pointer">
        <img src={icon} alt="current location" className="w-12 h-12 self-center justify-self-center" />
      </div>
    </>
  )
}