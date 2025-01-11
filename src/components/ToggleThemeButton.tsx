import React from "react";
import light from "../assets/images/light-mode.svg";
import dark from "../assets/images/dark-mode.svg";
import { Theme } from "../utils/modeUtils.ts";
export const ToggleThemeButton = ({theme, setTheme}) => {

  const toggleTheme = () => {
    setTheme(theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT);
  };
  return (
    <>
      <div className="hidden flex-col justify-center items-center w-24 md:flex">
        <div
          className="bg-light-gray border-black border-2 flex justify-start items-center rounded-full w-20 dark:justify-end cursor-pointer"
          onClick={toggleTheme}
        >
          <div className="bg-black rounded-full w-5 h-5 m-2"></div>
        </div>
        <p className="py-3 transition-all">
          {theme} Mode
        </p>
      </div>
      <div className="md:hidden w-16 h-14 bg-slate-300 rounded-full block self-center content-center dark:bg-darker-gray shadow-2xl">
        <img
          src={theme === Theme.DARK ? dark : light}
          alt="theme-toggle"
          className="cursor-pointer w-12 h-12 justify-self-center"
          onClick={toggleTheme}
        />
      </div>
    </>
  );
};
