import { cropType } from "@/interfaces/crops/crop";
import { withAuth } from "@/services/crop-api/headers";
import {
  CROP_API_GET_CROP_BY_ID,
  CROP_API_GET_CROPS,
} from "@/services/crop-api/routes";

export const getCrops = async (
  complete: boolean = true,
): Promise<cropType[] | null> => {
  const url = `${CROP_API_GET_CROPS}?complete=${complete}`;
  try {
    const res = await fetch(url, {
      method: "GET",
      headers: await withAuth(),
    });
    return await res.json();
  } catch (err) {
    console.log("get all crops err", err);
    return null;
  }
};

export const getCropById = async (id: string): Promise<cropType | null> => {
  try {
    let url = CROP_API_GET_CROP_BY_ID.replace(":id", id);
    const res = await fetch(url, {
      method: "GET",
      headers: await withAuth(),
    });
    return await res.json();
  } catch (err) {
    console.log("get crop by id err", err);
    return null;
  }
};