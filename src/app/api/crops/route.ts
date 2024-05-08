import { withApiAuthRequired, getSession } from "@auth0/nextjs-auth0";
import { NextApiRequest, NextApiResponse } from "next";
import { getCrops } from "@/services/crop-api/crops/GET";

export const GET = withApiAuthRequired(async function fetchCrops(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    const crops = JSON.stringify(await getCrops());
    console.log("crops", crops);
    if (!crops) {
      throw new Error("Failed to fetch crops");
    }
    return new Response(crops);
  } catch (e) {
    console.error("Something went wrong : getAllCrops");
    throw new Error("Intenal server error");
  }
});