import { cropType } from "@/interfaces/crops/crop";

const getAllCrops = async (): Promise<cropType[] | null> => {
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
    return null;
  }
};
export async function GET(request: Request): Promise<Response | null> {
  try {
    const crops = await getAllCrops();
    return new Response(JSON.stringify(crops));
  } catch (e) {
    console.error("Something went wrong : getAllCrops");
    return null;
  }
}