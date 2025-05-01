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
    const fetchPlants = async () => {
      try {
        if (param) {
          getPlantsByName(param);
          if (param) router.replace('/plants');
        } else {
          const res = await fetch('/api/plants');
          if (!res.ok) throw new Error(`Server error: ${res.status}`);
          const data = await res.json();
          if (data.error) throw new Error(data.error);
          if (data.data?.length) setPlants(data);
        }
      } catch (err) {
        console.error('Fetch error:', err);
      }
    };
    fetchPlants();
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