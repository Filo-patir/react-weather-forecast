import React, { useEffect } from 'react';

// import React, { createContext, useEffect, useState } from 'react';
// import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import './App.css';

// import { coords } from '@/models/coords';

// import { Body } from '@/components/Body';
// import Header from '@/components/Header';
import { useTest } from './contexts';

// import { checkTheme, Theme } from '@/utils/modeUtils';

// type CoordsProps = {
//   coords: coords | undefined;
//   setCoords: React.Dispatch<React.SetStateAction<coords | undefined>>;
// };

// const coordsContext = createContext<CoordsProps | undefined>(undefined);
// const themeContext = createContext<Theme>(checkTheme());
// const queryClient = new QueryClient();

export default function App() {
  // const [theme, setTheme] = useState(checkTheme());
  // const [coords, setCoords] = useState<coords | undefined>();

  const { test, setTest } = useTest();

  useEffect(() => {
    const timer = setInterval(() => {
      setTest('test ' + new Date().getTime());
    }, 1000);

    return () => clearInterval(timer);
  }, [setTest]);

  return (
    // <themeContext.Provider value={theme}>
    //   <div className={`${theme === Theme.LIGHT ? 'bg-dark-gradient text-white' : 'bg-light-gradient'} sd:p-10 p-3`}>
    //     <QueryClientProvider client={queryClient}>
    //       <coordsContext.Provider value={{ coords, setCoords }}>
    //         <Header theme={theme} setTheme={setTheme} setCoords={setCoords} />
    //         {coords ? (
    //           <Body lat={coords.lat} lon={coords.lon} theme={theme} />
    //         ) : (
    //           <div className="flex items-center justify-center h-screen">
    //             <div className="flex flex-col items-center justify-center">
    //               <h1 className="text-2xl font-bold">Please allow location access</h1>
    //               <button
    //                 onClick={handleLocationClick}
    //                 className="px-4 py-2 font-bold bg-blue-500 rounded hover:bg-blue-700text-white"
    //               >
    <>{test}</>
    // <>Next Update ISA {test}</>
    //               </button>
    //             </div>
    //           </div>
    //         )}
    //       </coordsContext.Provider>
    //     </QueryClientProvider>
    //   </div>
    // </themeContext.Provider>
  );
}

// function handleLocationClick() {
//   // TODO: Implement location click
// }
