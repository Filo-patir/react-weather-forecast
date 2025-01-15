import React, { useEffect } from 'react';

import './App.css';

import { useParams } from 'react-router';

import useSearch from './api/searchLocation';
import { Body } from './components/Body';
import { useCoords, useTheme } from './contexts';

export default function App() {
  const { city } = useParams();
  const { coords, setCoords } = useCoords();
  const { theme } = useTheme();
  const { data: searchData, isPending: isSearchPending } = useSearch(city ?? '');
  useEffect(() => {
    if (city) {
      if (!isSearchPending && searchData.length > 0) {
        setCoords({ lat: searchData[0]?.latitude, lon: searchData[0]?.longitude });
      }
    }
  }, [isSearchPending]);

  return (
    <>
      {coords ? (
        <Body lat={coords.lat} lon={coords.lon} theme={theme} />
      ) : isSearchPending ? (
        <p>Loading ... </p>
      ) : (
        <p>Y3m mafe4 </p>
      )}
    </>
  );
}
