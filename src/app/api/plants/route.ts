import { getPlants } from '@/services/crop-api/plants/GET';


export async function GET(): Promise<Response> {
  const data = await getPlants();
  return new Response(JSON.stringify(data));
}