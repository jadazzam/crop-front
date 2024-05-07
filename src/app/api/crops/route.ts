import { cropType } from "@/interfaces/crops/crop";
import { withApiAuthRequired, getSession } from "@auth0/nextjs-auth0";
import { NextApiRequest, NextApiResponse } from "next";
import jwt from "jsonwebtoken";
import * as dotenv from "dotenv";

dotenv.config();

const getAllCrops = async (
  token: string | undefined,
): Promise<cropType[] | null> => {
  try {
    const res = await fetch(`http://localhost:8080/crops`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    return await res.json();
  } catch (err) {
    console.log("get all crops err", err);
    return null;
  }
};

export const GET = withApiAuthRequired(async function getCrops(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    const session = await getSession();
    if (!session) {
      throw new Error("session not found");
    }
    const secret = process.env.AUTH0_SECRET ?? "";
    const token = jwt.sign(session.user, secret);
    const crops = JSON.stringify(await getAllCrops(token));
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