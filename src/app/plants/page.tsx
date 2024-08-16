'use client';
import type { plantType } from '@/interfaces/plants/plant';

import { useEffect, useState } from 'react';
import { PlantsList } from '@/components/plants/PlantsList';
import { cropType } from '@/interfaces/crops/crop';
import { searchPlantType } from '@/interfaces/plants/search';

export default function PlantsPage() {
  const [plants, setPlants] = useState<searchPlantType | null>(null);
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
        search={plants}
        setCrop={(crop: cropType) => console.log('crop added =>', crop)}
      ></PlantsList>
    </>
  );
}