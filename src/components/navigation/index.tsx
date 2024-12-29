'use client';

import Navbar, { NavbarType } from './navbar';

const Navigation = ({ position, bgColor }: NavbarType) => {
  return <Navbar position={position} bgColor={bgColor} />;
};

export default Navigation;