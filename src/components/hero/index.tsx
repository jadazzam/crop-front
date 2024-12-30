import React, { ReactNode } from 'react';
import Search, { SearchProps } from '../forms/Search';
import Image from 'next/image';
import { cropType } from '@/interfaces/crops/crop';
import Navbar from '@/components/navigation/navbar';

export const HeroSectionBlock = ({ children }: { children: ReactNode }) => {
  return (
    <div className="bg-cover bg-center h-screen flex items-end opacity-95"
         style={{ backgroundImage: 'url(/home.jpg)' }}>
      {children}
    </div>
  );
};

HeroSectionBlock.Navbar = function HeroSectionBlockNavbar() {
  return <Navbar bgColor="transparent" position="absolute" />;
};

HeroSectionBlock.Search = function HeroSectionBlockSearch({ search, setSearch }: SearchProps) {
  return (
    <div className="absolute inset-0 opacity-100 flex mt-5">
      <Search search={search} setSearch={setSearch} />
    </div>
  );
};

type HeroSectionBlockButtonProps = {
  // handleScroll: () => void,
  // crops: cropType[],
  hovered: boolean,
  setHovered: (value: boolean) => void
}

HeroSectionBlock.Button = function HeroSectionBlockButton({
                                                            // crops,
                                                            // handleScroll,
                                                            hovered,
                                                            setHovered
                                                          }: HeroSectionBlockButtonProps) {
  return (
    // crops?.length &&
    <div className="mx-auto relative rounded-full bottom-4" onMouseEnter={() => setHovered(true)}
         onMouseLeave={() => setHovered(false)}>
      <button
        className={`lg:h-36 lg:w-36 md:h-24 md:w-12 sm:h-7 sm:w-7 hover:backdrop-blur-sm rounded-full border-8 hover:border-secondary-500 border-primary-900 transform`}
        // onClick={handleScroll}
        // loading={loading}
      >
        <Image className="m-auto" sizes="(max-width: 768px) none, 33vw"
               src={hovered ? '/arrows-secondary.png' : '/arrows-primary.png'} alt="arrow"
               width="45"
               height="40" />
      </button>
    </div>
  );
};

type HeroSectionProps = {
  searchNode: ReactNode,
  buttonNode?: ReactNode,
}

const HeroSection = ({ searchNode, buttonNode }: HeroSectionProps) => {
  return (
    <HeroSectionBlock>
      <HeroSectionBlock.Navbar />
      {searchNode}
      {buttonNode}
    </HeroSectionBlock>
  );
};

export default HeroSection;