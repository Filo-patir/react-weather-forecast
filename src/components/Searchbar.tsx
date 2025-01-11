import React, { useRef, useState } from "react";
import SearchSuggestions from "./SearchSuggestions.tsx";

const searchContext = React.createContext<string | undefined>(undefined);

export default function Searchbar({setCoords}) {
  const [placeholder, setPlaceholder] = useState("Search for your preferred city...");
  const [inputValue, setInputValue] = useState("");
  const [searchQuery,setSearchQuery] = useState<string | undefined>();
  const timer = useRef<NodeJS.Timeout>(
    setTimeout(() => {
      setSearchQuery(inputValue);
    }, 500)
  );
  window.addEventListener("resize", handleWindowResize);
  const onValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    clearTimeout(timer.current)
    timer.current = setTimeout(() => {
      setSearchQuery(inputValue);
    }, 500);
  };
  const handleOnClick = (lat?: number, lon?: number) => {
    setInputValue("");
    setSearchQuery(undefined);
    if (lat && lon)
    {
      setCoords({lat, lon})
    }
  };
  function handleWindowResize() {
    if (window.innerWidth < 640) {
      setPlaceholder("City Search");
    } else {
      setPlaceholder("Search for your preferred city...");
    }
  }
  return (
    <>
    <div className="bg-light-gray border-2 border-black rounded-full flex items-center justify-center
    w-3/5 h-full">
      <img
        className="w-6 h-6 m-4"
        src="https://img.icons8.com/ios-filled/50/000000/search--v1.png"
        alt="search"
      />
      <input
        className="p-3 w-full bg-transparent focus:outline-none text-black"
        type="text"
        placeholder={placeholder}
        value={inputValue}
        onChange={onValueChange}
      />
    </div>
    <searchContext.Provider value={searchQuery}>
        { searchQuery && <SearchSuggestions searchQuery={searchQuery} onClick={handleOnClick}  /> }
    </searchContext.Provider>
    </>
  );
}