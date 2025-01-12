import React from 'react';

import { Theme } from '@/utils/modeUtils';

import CurrentLocation from './CurrentLocation';
import Searchbar from './Searchbar';
import { ToggleThemeButton } from './ToggleThemeButton';

export default function Header({
  theme,
  setTheme,
  setCoords,
}: {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  setCoords: (coords: { lat: number; lon: number }) => void;
}) {
  return (
    <header className="flex items-baseline justify-around sm:justify-between ">
      <ToggleThemeButton theme={theme} setTheme={setTheme} />
      <Searchbar setCoords={setCoords} />
      <CurrentLocation />
    </header>
  );
}
