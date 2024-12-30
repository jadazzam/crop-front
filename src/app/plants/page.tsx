'use client';
import React, { useEffect, useState } from 'react';
import { PlantsList } from '@/components/plants/List';
import { searchType } from '@/interfaces/plants/search';
import Search from '@/components/forms/Search';
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
        .then((res: Response) => res.json())
        .then(res => {
          if (!res.error && res.data?.length) setPlants(res);
        });
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