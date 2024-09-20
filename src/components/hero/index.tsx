import Search from './Search';
import React from 'react';
import { searchPlantType } from '@/interfaces/plants/search';
import LoginButton from '@/components/buttons/Login';

interface SearchProps {
  setSearch: (search: searchPlantType) => void;
  setName: (name: string) => void;
}

const HeroSection = ({ setSearch, setName }: SearchProps) => {
  return (
    <>
      <div className="bg-cover bg-center h-screen flex items-end opacity-95 bg-black"
           style={{ backgroundImage: 'url(/home.jpg)' }}>
        <div className="absolute inset-0 opacity-100 flex">
          <LoginButton text="Login" />
          <Search setName={setName} setSearch={setSearch} />
        </div>
      </div>
    </>
  );
};

export default HeroSection;