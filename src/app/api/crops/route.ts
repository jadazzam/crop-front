import { cropType } from "@/interfaces/crop";

const allCrops = async (): Promise<cropType[]> => {
  try {
    const res = await fetch(`http://localhost:8080/crops`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    return await res.json();
  } catch (err) {
    console.log("get all crops err", err);
    return [];
  }
};
export async function GET(request: Request) {
  const crops = await allCrops();
  return new Response(JSON.stringify(crops));
}