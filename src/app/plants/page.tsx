'use client';
import React, { useEffect, useState } from 'react';
import { PlantsList } from '@/components/plants/List';
import { cropType } from '@/interfaces/crops/crop';
import { searchType } from '@/interfaces/plants/search';
import Search from '@/components/hero/Search';
import { useRouter, useSearchParams } from 'next/navigation';
import { handleSearch } from '@/api/actions/plants';

export default function PlantsPage() {
  const router = useRouter();
  const [search, setSearch] = useState<string>('');
  const [plants, setPlants] = useState<searchType | null>(null);
  const param = useSearchParams().get('search');

  const getPlantsByName = async (name: string) => {
    const response = await handleSearch(name);
    setSearch(name);
    if (response) setPlants(response);
    return search;
  };

  useEffect(() => {
    if (param) {
      getPlantsByName(param);
      if (param) router.replace('/plants');
    } else
      fetch('/api/plants')
        .then((res) => res.json())
        .then((res) => setPlants(res))
        .catch(e => console.log('GET Plants error', e));
  }, [param]);

  return (
    <>
      <Search search={search} setSearch={getPlantsByName} />
      <PlantsList
        search={plants}
      ></PlantsList>
    </>
  );
}