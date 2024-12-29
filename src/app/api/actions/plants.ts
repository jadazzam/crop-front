import { getPlantsByName } from '@/services/crop-api/plants/GET';

export const handleSearch = async (search: string) => {
  return await getPlantsByName(search);
};