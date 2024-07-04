import Search from './search';
import React from 'react';

const HeroSection = () => {
  return (
    <>
      <div className="relative bg-cover bg-center h-screen" style={{ backgroundImage: 'url(/home-hero.svg)' }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
          <h1 className="text-5xl font-bold">Protect, Preserve and Thrive</h1>
          <p className="mt-4 text-lg">Discover how to grow your crops</p>
          <a href="/cta-link"
             className="mt-6 px-8 py-3 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-700">
            Get Started
          </a>
        </div>
        <Search />
      </div>
    </>
  );
};

export default HeroSection;