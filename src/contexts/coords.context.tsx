import React, { createContext, useContext, useState } from 'react';
import { coords } from '@/models/coords';

type CoordsContextProps = {
  coords: coords | undefined;
  setCoords: (coords: coords) => void;
};

export const CoordsContext = createContext<CoordsContextProps | null>(null);

export const useCoords = () => {
  const context = useContext(CoordsContext);
  if (!context) {
    throw new Error('useCoords must be used within a CoordsProvider');
  }
  return context;
};

export const CoordsProvider = ({ children }: { children: React.ReactNode }) => {
  const [coords, setCoords] = useState<coords>();

  return <CoordsContext.Provider value={{ coords, setCoords }}>{children}</CoordsContext.Provider>;
};
