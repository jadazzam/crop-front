import { getPlantsByName } from '@/services/crop-api/plants/GET';

export const handleSearch = async (search: string) => {
  'use client';
  const plants = await getPlantsByName(search);
  return plants;
};