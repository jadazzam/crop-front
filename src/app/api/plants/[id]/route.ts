import { plantType } from '@/interfaces/plants/plant';
import { NextRequest } from 'next/server';
import { getPlantById } from '@/services/crop-api/plants/GET';

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
): Promise<Response> {
  const { id } = params;
  const plant: plantType = await getPlantById(id);
  return new Response(JSON.stringify(plant));
}