import { withApiAuthRequired, getSession } from "@auth0/nextjs-auth0";
import { NextApiRequest, NextApiResponse } from "next";
import { getCrops } from "@/services/crop-api/crops/GET";
import { postCrop } from "@/services/crop-api/crops/POST";

export const GET = withApiAuthRequired(async function fetchCrops(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    const crops = JSON.stringify(await getCrops());
    if (!crops) {
      throw new Error("Failed to fetch crops");
    }
    return new Response(crops);
  } catch (e) {
    console.error("Something went wrong : getAllCrops");
    throw new Error("Intenal server error");
  }
});

export const POST = withApiAuthRequired(async function createCrop(
  req: Request,
) {
  try {
    const body = await req.json();
    const response = await postCrop(body).then((res) => res.data);
    return new Response(JSON.stringify(response), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (e) {
    console.log("Post crop fail", e);
    return new Response("Error POST Crop", { status: 500 });
  }
});