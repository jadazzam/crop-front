import { putType } from "@/interfaces/crops/crop";
import { withAuth } from "@/services/crop-api/headers";
import { CROP_API_PUT_CROP } from "@/services/crop-api/routes";
import axios from "axios";

export async function putCrop(props: { id: string; data: putType }) {
  const { id, data } = props;
  let url = CROP_API_PUT_CROP;
  if (id) url = url.replace(":id", id);
  try {
    const response = await axios.put(url, data, { headers: await withAuth() });
    return response.data;
  } catch (e) {
    console.error(`Error PUT Crop id: ${id}`, e);
    return null;
  }
}