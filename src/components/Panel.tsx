import React from "react";

type Props = {
  children: React.ReactNode;
  className?:string
}

export const Panel = ({children,className}:Props) => {
  return (
    <div className={"flex flex-col justify-center items-center bg-light-gray dark:bg-dark-gray shadow-2xl py-3 " + className}>
        {children}
    </div>
  )
}