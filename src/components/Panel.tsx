import React from 'react';

type Props = {
  theme: string;
} & React.ComponentProps<'div'>;

export const Panel = ({ children, className, theme }: Props) => {
  return (
    <div
      className={`flex justify-center items-center shadow-2xl py-3 ${theme === 'dark' ? 'bg-light-gray' : 'bg-dark-gray'} ${className}`}
    >
      {children}
    </div>
  );
};
