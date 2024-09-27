import { getPlantsByName } from '@/services/crop-api/plants/GET';

export const handleSearch = async (search: string) => {
  const plants = await getPlantsByName(search);
  return plants;
};