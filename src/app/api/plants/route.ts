import { getPlants } from '@/services/crop-api/plants/GET';
import { plantType } from '@/interfaces/plants/plant';


export async function GET(): Promise<Response> {
  const data: plantType[] = await getPlants();
  return new Response(JSON.stringify(data));
}