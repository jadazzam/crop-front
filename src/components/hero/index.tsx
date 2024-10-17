import React from 'react';
import Search from './Search';
import LoginButton from '@/components/buttons/Login';
import { Button } from '@mui/material';
import Image from 'next/image';
import { UserProfile } from '@auth0/nextjs-auth0/client';
import { cropType } from '@/interfaces/crops/crop';

interface SearchProps {
  search: string,
  setSearch: (value: string) => void,
  handleScroll: () => void,
  user: UserProfile | undefined,
  crops: cropType[]
}

const HeroSection = ({ search, setSearch, handleScroll, user, crops }: SearchProps) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <>
      <div className="bg-cover bg-center h-screen flex items-end opacity-95 bg-black"
           style={{ backgroundImage: 'url(/home.jpg)' }}>
        <div className="absolute inset-0 opacity-100 flex">
          <LoginButton />
          <Search search={search} setSearch={setSearch} />
        </div>
        {(user && crops?.length) && <button
          className="absolute mb-1 lg:h-36 lg:w-36 md:h-24 md:w-12 sm:h-7 sm:w-7 hover:backdrop-blur-sm rounded-full border-8 hover:border-secondary-500 border-primary-900 left-1/2 transform -translate-x-1/2"
          onClick={handleScroll}
          // loading={loading}
        >
          <div className="m-auto" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>

            <Image className="m-auto" sizes="(max-width: 768px) none, 33vw"
                   src={hovered ? '/arrows-secondary.png' : '/arrows-primary.png'} alt="arrow"
                   width="45"
                   height="40" />
          </div>
        </button>}
      </div>
    </>
  );
};

export default HeroSection;