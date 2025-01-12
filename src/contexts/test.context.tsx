import React, { createContext, useContext, useState } from 'react';

type TestContextProps = {
  test: string;
  setTest: (test: string) => void;
};

export const TestContext = createContext<TestContextProps | null>(null);

export const useTest = () => {
  const context = useContext(TestContext);
  if (!context) {
    throw new Error('useTest must be used within a TestProvider');
  }
  return context;
};

export const TestProvider = ({ children }: { children: React.ReactNode }) => {
  const [test, setTest] = useState<string>('');

  return <TestContext.Provider value={{ test, setTest }}>{children}</TestContext.Provider>;
};
