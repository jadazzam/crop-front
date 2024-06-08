import { getPlants } from "@/services/crop-api/plants/GET";

export async function GET(): Promise<Response | void> {
  try {
    const res = JSON.stringify(await getPlants());

    return new Response(res);
  } catch (e) {
    console.error("Something went wrong : getManyPlants");
   throw new Error("GetManyPlants error");
  }
}