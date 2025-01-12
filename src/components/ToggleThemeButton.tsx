import React from 'react';
import dark from '@/assets/images/dark-mode.svg';
import light from '@/assets/images/light-mode.svg';

import { Theme } from '@/utils/modeUtils';

export const ToggleThemeButton = ({ theme, setTheme }: { theme: Theme; setTheme: (theme: Theme) => void }) => {
  const toggleTheme = () => {
    setTheme(theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT);
  };
  return (
    <>
      <div className="flex-col items-center justify-center hidden w-24 md:flex">
        <div
          className="flex items-center justify-start w-20 border-2 border-black rounded-full cursor-pointer bg-light-gray dark:justify-end"
          onClick={toggleTheme}
        >
          <div className="w-5 h-5 m-2 bg-black rounded-full"></div>
        </div>
        <p className="py-3 transition-all">{theme} Mode</p>
      </div>
      <div className="content-center self-center block w-16 rounded-full shadow-2xl md:hidden h-14 bg-slate-300 dark:bg-darker-gray">
        <img
          src={theme === Theme.DARK ? dark : light}
          alt="theme-toggle"
          className="w-12 h-12 cursor-pointer justify-self-center"
          onClick={toggleTheme}
        />
      </div>
    </>
  );
};
