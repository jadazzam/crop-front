import { withApiAuthRequired, getSession } from '@auth0/nextjs-auth0';
import { getCrops } from '@/services/crop-api/crops/GET';
import { postCrop } from '@/services/crop-api/crops/POST';

export const GET = withApiAuthRequired(async function fetchCrops() {
  try {
    const crops = await getCrops();
    return new Response(JSON.stringify(crops), {
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (e) {
    console.error('Something went wrong : getAllCrops');
    return new Response(null);
  }
});

export const POST = withApiAuthRequired(async function createCrop(
  req: Request
) {
  try {
    const body = await req.json();
    const response = await postCrop(body).then((res) => res.data);
    return new Response(JSON.stringify(response), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (e) {
    console.error('Post crop fail', e);
    return new Response(null, { status: 500 });
  }
});