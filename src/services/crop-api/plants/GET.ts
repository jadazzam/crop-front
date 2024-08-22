'use server';
import {
  CROP_API_GET_PLANT_BY_ID,
  CROP_API_GET_PLANT_BY_NAME,
  CROP_API_GET_PLANTS
} from '@/services/crop-api/routes';
import { withoutAuth } from '@/services/crop-api/headers';
import { plantType } from '@/interfaces/plants/plant';
import axios from 'axios';

export const getPlants = async (): Promise<any> => {
  try {
    const url = CROP_API_GET_PLANTS;
    const response = await axios.get(url, {
      headers: withoutAuth
    });
    return response.data;
  } catch (err) {
    console.log('get all plants err');
    return null;
  }
};

export const getPlantById = async (id: string): Promise<plantType | null> => {
  const url = CROP_API_GET_PLANT_BY_ID.replace(':id', id);
  try {
    const response = await axios.get(url, {
      headers: withoutAuth
    });
    return response.data;
  } catch (err) {
    console.log('get plant by id err', err);
    return null;
  }
};

export const getPlantsByName = async (name: string | null) => {
  try {
    const response = await axios
      .get(CROP_API_GET_PLANT_BY_NAME, {
        headers: withoutAuth,
        params: {
          name
        }
      });
    return response.data;
  } catch (e) {
    console.log('get plants by search err', e);
    return;
  }
};