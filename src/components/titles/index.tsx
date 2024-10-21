import React, { FC, ReactNode } from 'react';

interface HeadingSecondaryProps {
  children: ReactNode,
}

const HeadingSecondary: FC<HeadingSecondaryProps> = ({ children }) => {
  return (
    <span className={`heading-4 text-2xl`}>{children}</span>
  );
};

export default HeadingSecondary;