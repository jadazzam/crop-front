'use client';
import { FormEvent, useEffect, useState } from 'react';
import { getPlantsByName } from '@/services/crop-api/plants/GET';
import { PlantsList } from '@/components/plants/list';
import { cropType } from '@/interfaces/crops/crop';
import { CropsList } from '@/components/crops/list';
import { plantType } from '@/interfaces/plants/plant';
import { useUser } from '@auth0/nextjs-auth0/client';
import HeroSection from '@/components/hero';
import axios from 'axios';

export default function Page() {
  const { user, error, isLoading } = useUser();
  const [crops, setCrops] = useState<cropType[]>([]);
  const [plants, setPlants] = useState<plantType[]>([]);
  const [search, setSearch] = useState(null);
  //
  const fetchCrops = async () => {
    if (!user) return [];
    return await axios.get('/api/crops').then(res => {
      console.log('res crops', res);
      if (res.status === 200 && res.data) {
        return res.data;
      }
    }).then(crops => setCrops(crops));
  };

  const fetchPlants = async () => {
    return await fetch('/api/plants')
      .then((res) => res.json())
      .then((plants) => {
        if (plants?.data?.length > 0) setPlants(plants.data);
      });
  };
  useEffect(() => {
    fetchPlants();
  }, []);

  useEffect(() => {
    user && fetchCrops();
  }, [user]);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const formDataObject: any = {};
    for (const [key, value] of formData.entries()) {
      formDataObject[key] = formData.get('search');
    }
    try {
      if (formDataObject?.search) {
        const res = await getPlantsByName(formDataObject.search);
        if (res?.data) setSearch(res.data);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  }

  if (!plants)
    return (
      <div>
        <button onClick={fetchPlants}>Refresh</button>
      </div>
    );
  console.log('crops', crops, 'plants', plants, 'search', search);


  return (
    <>
      <HeroSection />
      {crops?.length > 0 && (
        <div>
          <CropsList
            data={crops}
            setMyCrop={(crop) => {
              const res = crops.filter((_c) => _c.id !== crop.id);
              setCrops(res);
            }}
          ></CropsList>
        </div>
      )}
      {/*<form onSubmit={onSubmit}>*/}
      {/*  <input type="text" name="search" />*/}
      {/*  <button type="submit">Submit</button>*/}
      {/*</form>*/}
      {/*{search ? (*/}
      {/*  <PlantsList*/}
      {/*    setCrop={(crop) => setCrops([...crops, crop])}*/}
      {/*    data={search}*/}
      {/*  ></PlantsList>*/}
      {/*) : (*/}
      {/*  <PlantsList*/}
      {/*    setCrop={(crop: cropType) => setCrops([...crops, crop])}*/}
      {/*    data={plants}*/}
      {/*  />*/}
      {/*)}*/}
    </>
  );
}