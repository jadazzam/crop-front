'use client';
import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { cropType } from '@/interfaces/crops/crop';
import { useUser } from '@auth0/nextjs-auth0/client';
import HeroSection from '@/components/hero';
import { UserContext } from '../providers';
import { CropsList } from '@/components/crops/List';
import { cropsTitle } from '@/common/helpers';
import { TwoColumns } from '../layouts/blocks/TwoColumns';
import { FindMyPlantButton } from './page.buttons';

export default function Page() {
  const { user } = useUser();
  const [title, setTitle] = useState<string | null>(null);
  const [crops, setCrops] = useState([]);
  const [search, setSearch] = useState('');
  const router = useRouter();
  const ref = useRef<HTMLInputElement>(null);

  const handleScroll = () => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };
  const fetchCrops = () => {
    if (!user) return [];
    return fetch('/api/crops')
      .then((res) => res.json())
      .then((res) => setCrops(res))
      .catch(e => console.log('GET Crops error', e));
  };

  useEffect(() => {
    if (crops?.length) setTimeout(() => handleScroll(), 3000);
  });

  useEffect(() => {
    user && fetchCrops();
    setTitle(cropsTitle);
  }, [user]);

  return <>
    <UserContext.Provider value={user}>
      <HeroSection crops={crops} user={user} handleScroll={handleScroll} search={search} setSearch={(search) => {
        setSearch(search);
        router.push(`/plants?search=${search}`);
      }} />
      {/* TODO : the div below must become a template for all pages*/}
      {/*in order to have homogenous padding*/}
      <div className="px-5 lg:px-10">
        {crops?.length > 0 && (
          <div ref={ref}>
            <div className="text-center">
              <h2 className="heading-2">{title ? `My crops : ${title}` : `My crops`}</h2>
            </div>
            <CropsList
              data={crops}
              setMyCrop={(crop) => {
                const res = crops.filter((_c: cropType) => _c.id !== crop.id);
                setCrops(res);
              }}
            ></CropsList>
          </div>
        )}
        <TwoColumns title="Outdoor ? Indoor ? Pick your plants accordingly"
                    description={'Choosing the right plant for your space is essential for both its growth and\n' +
                      '          visual\n' +
                      '          appeal. Whether you&apos;re enhancing the ambiance of your indoor space or adding vibrance to your outdoor\n' +
                      '          garden, selecting the right plants can make all the difference.\n' +
                      '\n' +
                      '          Save your crop offers expert guidance to help you choose plants that thrive in your specific\n' +
                      '          environment. ' +
                      'Whether indoors or outdoors, we provide tailored solutions to create a green, vibrant\n' +
                      '          environment that suits your lifestyle and enhances your well-being.'}
                    src="/watering-couple-indoor.jpg" alt="watering couple indoor"
                    Cta={
                      <FindMyPlantButton />
                    }
                    imageDisplay="left"
        />
      </div>
    </UserContext.Provider>
  </>;
}