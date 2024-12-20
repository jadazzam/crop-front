import React, { FC, ReactNode } from 'react';

interface HeadingSecondaryProps {
  children: ReactNode,
  className?: string
}

const HeadingSecondary: FC<HeadingSecondaryProps> = ({ children, className }) => {
  return (
    <h2 className={`mb-5 ${className}`}>{children}</h2>
  );
};

export default HeadingSecondary;