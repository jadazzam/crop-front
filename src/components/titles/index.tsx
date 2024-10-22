import React, { FC, ReactNode } from 'react';

interface HeadingSecondaryProps {
  children: ReactNode,
  className?: string
}

const HeadingSecondary: FC<HeadingSecondaryProps> = ({ children, className }) => {
  return (
    <span className={`heading-4 text-2xl ${className}`}>{children}</span>
  );
};

export default HeadingSecondary;