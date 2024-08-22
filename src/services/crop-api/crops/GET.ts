import { cropType } from '@/interfaces/crops/crop';
import { withAuth } from '@/services/crop-api/headers';
import {
  CROP_API_GET_CROP_BY_ID,
  CROP_API_GET_CROPS
} from '@/services/crop-api/routes';
import axios from 'axios';

export const getCrops = async (
  complete: boolean = true
): Promise<cropType[]> => {
  try {
    const url = `${CROP_API_GET_CROPS}?complete=${complete}`;
    const response = await axios.get(url, {
      headers: await withAuth()
    });
    return response.data;
  } catch (e) {
    throw new Error('Get crops err', { cause: e });
  }
};

export const getCropById = async (id: string): Promise<cropType> => {
  if (!id) throw new Error('id is required');
  try {
    let url = CROP_API_GET_CROP_BY_ID.replace(':id', id);
    const res = await fetch(url, {
      method: 'GET',
      headers: await withAuth()
    });
    return await res.json();
  } catch (err) {
    console.log('get crop by id err', err);
    throw new Error('Get crops err', { cause: err });
  }
};