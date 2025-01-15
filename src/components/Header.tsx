import React from 'react';

import { Theme } from '@/utils/modeUtils';

import CurrentLocation from './CurrentLocation';
import Searchbar from './Searchbar';
import { ToggleThemeButton } from './ToggleThemeButton';

export function Header({ theme, setTheme }: { theme: Theme; setTheme: (theme: Theme) => void }) {
  return (
    <header className="flex items-baseline justify-around sm:justify-between ">
      <ToggleThemeButton theme={theme} setTheme={setTheme} />
      <Searchbar />
      <CurrentLocation />
    </header>
  );
}
