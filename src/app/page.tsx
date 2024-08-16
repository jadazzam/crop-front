'use client';
import { FormEvent, useEffect, useState } from 'react';
import { getPlantsByName } from '@/services/crop-api/plants/GET';
import { PlantsList } from '@/components/plants/PlantsList';
import { cropType } from '@/interfaces/crops/crop';
import { CropsList } from '@/components/crops/list';
import { plantType } from '@/interfaces/plants/plant';
import { useUser } from '@auth0/nextjs-auth0/client';
import HeroSection from '@/components/hero';
import axios from 'axios';
import { searchPlantType } from '@/interfaces/plants/search';

export default function Page() {
  const { user, error, isLoading } = useUser();
  const [crops, setCrops] = useState<cropType[]>([]);
  const [plants, setPlants] = useState<plantType[]>([]);
  const [search, setSearch] = useState<searchPlantType | null>(null);
  //
  // const fetchCrops = async () => {
  //   if (!user) return [];
  //   return await axios.get('/api/crops').then(res => {
  //     if (res.status === 200 && res.data) {
  //       return res.data;
  //     }
  //   }).then(crops => setCrops(crops));
  // };
  //
  // const fetchPlants = async () => {
  //   return await fetch('/api/plants')
  //     .then((res) => res.json())
  //     .then((plants) => {
  //       if (plants?.data?.length > 0) setPlants(plants.data);
  //     });
  // };
  // useEffect(() => {
  //   fetchPlants();
  // }, []);

  // useEffect(() => {
  //   user && fetchCrops();
  // }, [user]);

  // if (!plants)
  //   return (
  //     <div>
  //       <button onClick={fetchPlants}>Refresh</button>
  //     </div>
  //   );
  console.log('crops', crops, 'plants', plants, 'search', search);


  return <>
    <HeroSection setSearch={(search: searchPlantType) => {
      setSearch(search);
    }} />
    {/*{crops?.length > 0 && (*/}
    {/*  <div>*/}
    {/*    <CropsList*/}
    {/*      data={crops}*/}
    {/*      setMyCrop={(crop) => {*/}
    {/*        const res = crops.filter((_c) => _c.id !== crop.id);*/}
    {/*        setCrops(res);*/}
    {/*      }}*/}
    {/*    ></CropsList>*/}

    {/*  </div>*/}
    {/*)}*/}
    {/*<form onSubmit={onSubmit}>*/}
    {/*  <input type="text" name="search" />*/}
    {/*  <button type="submit">Submit</button>*/}
    {/*</form>*/}
    {/*  <PlantsList*/}
    {/*    setCrop={(crop) => setCrops([...crops, crop])}*/}
    {/*    data={search}*/}
    {/*  ></PlantsList>*/}
    {/*) : (*/}
    {search && <PlantsList
      setCrop={(crop: cropType) => setCrops([...crops, crop])}
      search={search}
    />}
  </>;
}