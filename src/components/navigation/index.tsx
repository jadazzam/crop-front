'use client';
import React from 'react';
import { Footer } from './footer/Footer';

import Navbar, { NavbarType } from './navbar';

interface NavigationProps extends NavbarType {
  children: React.ReactNode;
}

const Navigation = ({ position, bgColor, children }: NavigationProps) => {
  return (
    <div className={`min-h-screen flex flex-col`}>
      <Navbar position={position} bgColor={bgColor} />
      <div className="flex-1 my-5">
        {children}
      </div>
      <Footer />
    </div>

  );

};

export default Navigation;