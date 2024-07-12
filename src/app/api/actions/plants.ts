import { getPlantsByName } from '@/services/crop-api/plants/GET';

export const handleSearch = async (formData: FormData) => {
  'use client';
  const search = formData.get('search') as string | null;
  const plants = await getPlantsByName(search);
  return plants;
};