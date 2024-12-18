'use server';
import {
  CROP_API_GET_PLANT_BY_ID,
  CROP_API_GET_PLANT_BY_NAME,
  CROP_API_GET_PLANTS
} from '@/services/crop-api/routes';
import { withoutAuth } from '@/services/crop-api/headers';
import { plantType } from '@/interfaces/plants/plant';
import { searchType } from '@/interfaces/plants/search';

export const getPlants = async (): Promise<plantType[]> => {
  try {
    const res: Response = await fetch(CROP_API_GET_PLANTS, {
      headers: withoutAuth,
      cache: 'force-cache'
    });
    return res.json();
  } catch (e) {
    throw new Error(`${e}`);
  }
};

export const getPlantById = async (id: string): Promise<plantType> => {
  const url = CROP_API_GET_PLANT_BY_ID.replace(':id', id);
  try {
    if (!id || isNaN(Number(id))) new Error(`Param incorrect`);
    return await fetch(url, {
      headers: withoutAuth,
      cache: 'force-cache'
    }).then((res: Response) => res.json());
  } catch (err) {
    throw new Error(`${err}`);
  }

};

export const getPlantsByName = async (name: string | null): Promise<searchType> => {
  console.log('name', name);
  try {
    return await fetch(`${CROP_API_GET_PLANT_BY_NAME}?name=${name}`, {
      headers: withoutAuth,
      cache: 'force-cache'
    }).then((res: Response) => res.json());
  } catch (e) {
    throw new Error(`get Plant by search error : ${e} for search: ${name}`);
  }
};