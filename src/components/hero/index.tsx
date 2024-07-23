import Search from './search';
import React from 'react';
import { searchPlantType } from '@/interfaces/plants/search';

interface SearchProps {
  setSearch: (search: searchPlantType) => void;
}

const HeroSection = ({ setSearch }: SearchProps) => {
  return (
    <>
      <div className="relative bg-cover bg-center h-screen" style={{ backgroundImage: 'url(/home-hero.svg)' }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative flex flex-col justify-center h-full text-center text-white ml-8 md:ml-8 lg:ml-16">
          <h1 className="text-5xl font-bold">Protect, Preserve and Thrive</h1>
          <p className="mt-4 text-lg">Discover how to grow your crops</p>
          <Search setSearch={setSearch} />
        </div>

      </div>
    </>
  );
};

export default HeroSection;