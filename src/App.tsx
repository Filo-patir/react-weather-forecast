import React, { createContext, useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.css";
import Header from "./components/Header.tsx";
import { Body } from "./components/Body.tsx";
import { checkTheme, Theme } from "./utils/modeUtils.ts";
import { coords } from "./models/coords.ts";

type CoordsProps = {
    coords: coords | undefined;
    setCoords: React.Dispatch<React.SetStateAction<coords | undefined>> ;
  };

const coordsContext = createContext<CoordsProps|undefined>(undefined);
const themeContext = createContext<Theme>(checkTheme());
const queryClient = new QueryClient();

function App() {
  const [theme,setTheme] = useState(checkTheme())
  const [coords, setCoords] = useState<coords|undefined>();
  return (
    <themeContext.Provider value={theme}>
      <div className={`${theme === Theme.LIGHT ? "bg-dark-gradient text-white" : "bg-light-gradient"} sd:p-10 p-3`}>
    <QueryClientProvider client={queryClient}>
      <coordsContext.Provider value={{coords,setCoords}}>
      <Header theme={theme} setTheme={setTheme} setCoords={setCoords} />
        {
          coords ? <Body lat={coords.lat} lon={coords.lon} theme={theme} /> : <div className="flex justify-center items-center h-screen">
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-2xl font-bold">Please allow location access</h1>
            <button onClick={handleLocationClick} className="bg-blue-500 hover:bg-blue-700text-white font-bold py-2 px-4 rounded">Next Update ISA</button>
          </div>
          </div>
        }
      </coordsContext.Provider>
      </QueryClientProvider>
      </div>
    </themeContext.Provider>
  );
}

export default App;


function handleLocationClick(){
  
}