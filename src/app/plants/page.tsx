'use client';
import type { plantType } from '@/interfaces/plants/plant';

import { useEffect, useState } from 'react';
import { PlantsList } from '@/components/plants/list';
import { cropType } from '@/interfaces/crops/crop';
import { searchPlantType } from '@/interfaces/plants/search';

export default function PlantsPage() {
  const [search, setSearch] = useState<searchPlantType | null>(null);
  useEffect(() => {
    fetch('/api/plants')
      .then((res) => res.json())
      .then((res) => setSearch(res))
      .catch(e => console.log('GET Plants error', e));
  }, []);
  return (
    <>
      <PlantsList
        search={search}
        setCrop={(crop: cropType) => console.log('crop added =>', crop)}
      ></PlantsList>
    </>
  );
}