import React from 'react';
import Search from './Search';
import Image from 'next/image';
import { useUser } from '@auth0/nextjs-auth0/client';
import { cropType } from '@/interfaces/crops/crop';
import NavBar from '@/components/navigation/navbar';

interface SearchProps {
  search: string,
  setSearch: (value: string) => void,
  handleScroll: () => void,
  crops: cropType[]
}

const HeroSection = ({ search, setSearch, handleScroll, crops }: SearchProps) => {
  const { user } = useUser();
  const [hovered, setHovered] = React.useState(false);
  return (
    <div className="bg-cover bg-center h-screen flex items-end opacity-95"
         style={{ backgroundImage: 'url(/home.jpg)' }}>
      <NavBar bgColor="transparent" position="absolute" />
      <div className="absolute inset-0 opacity-100 flex mt-5">
        <Search search={search} setSearch={setSearch} />
      </div>
      {(user && crops?.length) &&
        <div className="mx-auto relative rounded-full bottom-4" onMouseEnter={() => setHovered(true)}
             onMouseLeave={() => setHovered(false)}>
          <button
            className={`lg:h-36 lg:w-36 md:h-24 md:w-12 sm:h-7 sm:w-7 hover:backdrop-blur-sm rounded-full border-8 hover:border-secondary-500 border-primary-900 transform`}
            onClick={handleScroll}
            // loading={loading}
          >
            <Image className="m-auto" sizes="(max-width: 768px) none, 33vw"
                   src={hovered ? '/arrows-secondary.png' : '/arrows-primary.png'} alt="arrow"
                   width="45"
                   height="40" />
          </button>
        </div>
      }
    </div>
  );
};

export default HeroSection;