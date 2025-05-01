import { getPlants } from '@/services/crop-api/plants/GET';
import { NextResponse } from 'next/server';

export async function GET(): Promise<NextResponse> {
  try {
    return NextResponse.json(await getPlants());
  } catch (e) {
    return NextResponse.json({ error: 'Failed to fetch plants' }, { status: 500 });
  }
}