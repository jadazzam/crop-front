'use client';
import React from 'react';
import { Footer } from './footer/Footer';

import Navbar, { NavbarType } from './navbar';

interface NavigationProps extends NavbarType {
  children: React.ReactNode;
}

const Navigation = ({ position, bgColor, children }: NavigationProps) => {
  return (
    <>
      <Navbar position={position} bgColor={bgColor} />
      {children}
      <Footer />
    </>

  );

};

export default Navigation;