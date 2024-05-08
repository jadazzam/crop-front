import { cropType } from "@/interfaces/crops/crop";
import { NextRequest } from "next/server";
import { getCropById } from "@/services/crop-api/crops/GET";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } },
) {
  const { id } = params;
  const crop: cropType | null = await getCropById(id);
  return new Response(JSON.stringify(crop));
}