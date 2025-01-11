import React from "react";
import { ToggleThemeButton } from "./ToggleThemeButton.tsx";
import Searchbar from "./Searchbar.tsx";
import CurrentLocation from "./CurrentLocation.tsx";

export default function Header({theme, setTheme, setCoords}) {
  return (
    <header className="flex justify-around sm:justify-between items-baseline ">
      <ToggleThemeButton theme={theme} setTheme={setTheme} />
      <Searchbar setCoords={setCoords} />
      <CurrentLocation />
    </header>
  );
}
