import { plantType } from "@/interfaces/plants/plant";

const getManyPlants = async (): Promise<any> => {
  try {
    const res = await fetch(`http://localhost:8080/plants`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    let response = await res.json();
    if (response) response = response.data;
    return response;
  } catch (err) {
    console.log("get all plants err");
    return null;
  }
};

export async function GET(): Promise<Response> {
  try {
    const res = JSON.stringify(await getManyPlants());
    return new Response(res);
  } catch (e) {
    console.error("Something went wrong : getManyPlants");
    return new Response(null);
  }
}