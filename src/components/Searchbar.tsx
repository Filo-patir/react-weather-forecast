import React from "react";

export default function Searchbar() {
  const [placeholder, setPlaceholder] = React.useState("Search for your preferred city...");
  window.addEventListener("resize", handleWindowResize);
  function handleWindowResize() {
    if (window.innerWidth < 640) {
      setPlaceholder("City Search");
    } else {
      setPlaceholder("Search for your preferred city...");
    }
  }
  return (
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
      />

    </div>
  );
}