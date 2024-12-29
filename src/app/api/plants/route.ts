import { getPlants } from '@/services/crop-api/plants/GET';
import { NextResponse } from 'next/server';

export async function GET(): Promise<NextResponse> {
  return NextResponse.json(await getPlants());
}