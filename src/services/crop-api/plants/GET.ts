import {
  CROP_API_GET_PLANT_BY_ID,
  CROP_API_GET_PLANTS,
} from "@/services/crop-api/routes";
import { withoutAuth } from "@/services/crop-api/headers";
import { plantType } from "@/interfaces/plants/plant";

export const getPlants = async (): Promise<any> => {
  try {
    const res = await fetch(CROP_API_GET_PLANTS, {
      method: "GET",
      headers: withoutAuth,
    });

    return await res.json();
  } catch (err) {
    console.log("get all plants err");
    return null;
  }
};

export const getPlantById = async (id: string): Promise<plantType | null> => {
  let url = CROP_API_GET_PLANT_BY_ID.replace(":id", id);
  try {
    const res = await fetch(url, {
      method: "GET",
      headers: withoutAuth,
    });
    const response = await res.json();
    return response;
  } catch (err) {
    console.log("get plant by id err", err);
    return null;
  }
};