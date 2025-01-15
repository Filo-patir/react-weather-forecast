import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import SearchSuggestions from './SearchSuggestions';

const searchContext = React.createContext<string | undefined>(undefined);

export default function Searchbar() {
  const [placeholder, setPlaceholder] = useState('Search for your preferred city...');
  const [inputValue, setInputValue] = useState('');
  const [searchQuery, setSearchQuery] = useState<string | undefined>();
  const navigate = useNavigate();
  const timer = useRef(
    setTimeout(() => {
      setSearchQuery(inputValue);
    }, 500),
  );
  window.addEventListener('resize', handleWindowResize);
  const onValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => {
      setSearchQuery(inputValue);
    }, 500);
  };
  const handleOnClick = (cityname?: string) => {
    setInputValue('');
    setSearchQuery(undefined);
    if (cityname) {
      navigate(`/${cityname}`);
    }
  };
  function handleWindowResize() {
    if (window.innerWidth < 640) {
      setPlaceholder('City Search');
    } else {
      setPlaceholder('Search for your preferred city...');
    }
  }
  return (
    <>
      <div className="flex items-center justify-center w-3/5 h-full border-2 border-black rounded-full bg-light-gray">
        <img className="w-6 h-6 m-4" src="https://img.icons8.com/ios-filled/50/000000/search--v1.png" alt="search" />
        <input
          className="w-full p-3 text-black bg-transparent focus:outline-none"
          type="text"
          placeholder={placeholder}
          value={inputValue}
          onChange={onValueChange}
        />
      </div>
      <searchContext.Provider value={searchQuery}>
        {searchQuery && <SearchSuggestions searchQuery={searchQuery} onClick={handleOnClick} />}
      </searchContext.Provider>
    </>
  );
}
