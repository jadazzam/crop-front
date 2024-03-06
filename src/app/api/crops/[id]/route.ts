import { cropType } from "@/interfaces/crop";
import { NextRequest } from "next/server";

const cropById = async (id: string): Promise<cropType | null> => {
  try {
    const res = await fetch(`http://localhost:8080/crops/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    return await res.json();
  } catch (err) {
    console.log("get crop by id err", err);
    return null;
  }
};
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } },
) {
  const { id } = params;
  const crop: cropType | null = await cropById(id);
  return new Response(JSON.stringify(crop));
}