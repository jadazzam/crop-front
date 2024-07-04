'use client';
import type { plantType } from '@/interfaces/plants/plant';

import { useEffect, useState } from 'react';
import { PlantsList } from '@/components/plants/list';

export default function PlantsPage() {
  const [plants, setPlants] = useState<plantType[]>([]);
  useEffect(() => {
    fetch('/api/plants')
      .then((res) => res.json())
      .then((plants) => {
        console.log('plants in plant page', plants);
        if (plants?.data?.length > 0) setPlants(plants.data);
      });
  }, []);
  return (
    <>
      <PlantsList
        data={plants}
        setCrop={(crop) => console.log('crop added =>', crop)}
      ></PlantsList>
    </>
  );
}