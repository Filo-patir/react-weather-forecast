import React, { useEffect } from 'react';

import './App.css';

import useLocation from './api/getLocation';
import useSearch from './api/searchLocation';
import { Body } from './components/Body';
import { Header } from './components/Header';
import { useCoords, useTheme } from './contexts';
import { Theme } from './utils/modeUtils';

export default function App() {
  const { coords, setCoords } = useCoords();
  const { theme, setTheme } = useTheme();
  const { data: location, isPending: isLocationPending } = useLocation();
  const path = window.location.pathname.replace('/', '').toString().split(',')[0];
  const { data: searchData, isPending: isSearchPending } = useSearch(path ?? '');
  useEffect(() => {
    if (path) {
      if (!isSearchPending && searchData.length > 0) {
        console.log(searchData);
        setCoords({ lat: searchData[0]?.latitude, lon: searchData[0]?.longitude });
      }
    } else {
      if (!isLocationPending && location)
        setCoords({ lat: location?.location.latitude, lon: location?.location.longitude });
    }
  }, [isSearchPending, isLocationPending]);

  document.body.className = `${theme === Theme.LIGHT ? 'bg-dark-gradient text-white' : 'bg-light-gradient'} min-h-screen`;
  return (
    <div className="p-3">
      <Header theme={theme} setTheme={setTheme} setCoords={setCoords} />
      {coords ? (
        <Body lat={coords.lat} lon={coords.lon} theme={theme} />
      ) : (
        <div className="flex flex-col items-center justify-center py-4">
          <h1 className="text-2xl font-bold text-center">Opps We ran into an error Wanna go to the live location?</h1>
          <button
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            onClick={() => {
              setCoords({ lat: location?.location.latitude, lon: location?.location.longitude });
            }}
          >
            Go Live
          </button>
        </div>
      )}
    </div>
  );
}
