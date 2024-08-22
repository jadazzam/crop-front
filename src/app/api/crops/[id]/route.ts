import { cropType } from '@/interfaces/crops/crop';
import { NextRequest } from 'next/server';
import { getCropById } from '@/services/crop-api/crops/GET';
import { putCrop } from '@/services/crop-api/crops/PUT';

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  if (!params?.id) throw new Error('id is required');
  const { id } = params;
  const crop: cropType = await getCropById(id);
  return new Response(JSON.stringify(crop));
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  const crop = await putCrop({
    id: id,
    data: {
      active: false
    }
  });
  return new Response(JSON.stringify(crop));
}