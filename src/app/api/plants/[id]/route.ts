import { plantType } from "@/interfaces/plants/plant";
import { NextRequest } from "next/server";

const getPlantById = async (id: string): Promise<plantType | null> => {
  try {
    const res = await fetch(`http://localhost:8080/plants/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    return await res.json();
  } catch (err) {
    console.log("get plant by id err", err);
    return null;
  }
};
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } },
): Promise<Response> {
  try {
    const { id } = params;
    const plant: plantType | null = await getPlantById(id);
    return new Response(JSON.stringify(plant));
  } catch (err) {
    console.log("get plan by id err", err);
    return new Response(null);
  }
}