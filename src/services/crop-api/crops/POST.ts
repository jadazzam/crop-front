import { createType } from "@/interfaces/crops/crop";
import { withAuth } from "@/services/crop-api/headers";
import { CROP_API_POST_CROP } from "@/services/crop-api/routes";
import axios from "axios";

export async function postCrop(data: createType, complete: boolean = true) {
  const url = `${CROP_API_POST_CROP}?complete=${complete}`;
  return await axios.post(url, data, { headers: await withAuth() });
}