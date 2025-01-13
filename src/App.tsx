import React from 'react';

import './App.css';

import { Body } from './components/Body';
import { Header } from './components/Header';
import { useCoords, useTheme } from './contexts';
import { Theme } from './utils/modeUtils';

export default function App() {
  const { coords, setCoords } = useCoords();
  const { theme, setTheme } = useTheme();

  document.body.className = `${theme === Theme.LIGHT ? 'bg-dark-gradient text-white' : 'bg-light-gradient'} min-h-screen`;

  return (
    <div className="p-3">
      <Header theme={theme} setTheme={setTheme} setCoords={setCoords} />
      {coords ? (
        <Body lat={coords.lat} lon={coords.lon} theme={theme} />
      ) : (
        <div className="flex flex-col items-center justify-center py-4">
          <h1 className="text-2xl font-bold">Please allow location access</h1>
          <button onClick={() => {}} className="px-4 py-2 font-bold bg-blue-500 rounded hover:bg-blue-700text-white">
            Next Update ISA
          </button>
        </div>
      )}
    </div>
  );
}
