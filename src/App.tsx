import './App.css';
import { Providers, useCoords, useTheme } from './contexts';
import { Body } from './components/Body';
import { Header } from './components/Header';
import { Theme } from './utils/modeUtils';


export default function App() {
  const {coords, setCoords} = useCoords()
  const { theme, setTheme } = useTheme()

  
  return (
    <Providers>
      <div className={`${theme === Theme.LIGHT ? 'bg-dark-gradient text-white' : 'bg-light-gradient'} sd:p-10 p-3 h-full`}>
            <Header theme={theme} setTheme={setTheme} setCoords={setCoords} />
            {coords ? (
              <Body lat={coords.lat} lon={coords.lon} theme={theme} />
            ) : (
              <div className="flex items-center justify-center h-dvh">
                <div className="flex flex-col items-center justify-center">
                  <h1 className="text-2xl font-bold">Please allow location access</h1>
                  <button
                    onClick={ () => {}}
                    className="px-4 py-2 font-bold bg-blue-500 rounded hover:bg-blue-700text-white">
                    Next Update ISA
                  </button>
                </div>
              </div>
            )}
          </div>
    </Providers>
  );
}