import React from 'react';

import { TestProvider } from './test.context';

export * from './test.context';

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <TestProvider>
      <>{children}</>
    </TestProvider>
  );
};
