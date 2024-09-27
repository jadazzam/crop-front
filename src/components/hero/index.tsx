import Search from './Search';
import React from 'react';
import LoginButton from '@/components/buttons/Login';

interface SearchProps {
  search: string,
  setSearch: (value: string) => void
}

const HeroSection = ({ search, setSearch }: SearchProps) => {
  return (
    <>
      <div className="bg-cover bg-center h-screen flex items-end opacity-95 bg-black"
           style={{ backgroundImage: 'url(/home.jpg)' }}>
        <div className="absolute inset-0 opacity-100 flex">
          <LoginButton />
          <Search search={search} setSearch={setSearch} />
        </div>
      </div>
    </>
  );
};

export default HeroSection;