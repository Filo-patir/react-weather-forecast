import React from 'react';

import { Theme } from '../utils/modeUtils';

type Props = {
  theme: string;
} & React.ComponentProps<'div'>;

export const Panel = ({ children, className, theme }: Props) => {
  return (
    <div
      className={`flex justify-center items-center rounded-3xl shadow-2xl p-3 ${theme === Theme.DARK ? 'bg-light-gray' : 'bg-dark-gray'} ${className}`}
    >
      {children}
    </div>
  );
};
