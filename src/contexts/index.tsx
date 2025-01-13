import React from 'react';

import { CoordsProvider } from './coords.context';
import { QueryProvider } from './query.provider';
import { ThemeProvider } from './theme.context';

export * from './coords.context';
export * from './theme.context';

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider>
      <QueryProvider>
        <CoordsProvider>{children}</CoordsProvider>
      </QueryProvider>
    </ThemeProvider>
  );
};
