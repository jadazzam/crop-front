import { NextApiRequest, NextApiResponse } from "next";
import { cropType } from "@/interfaces/crop";
import type { responseError } from "@/interfaces/responseError";

// export default function cropHandler(
//   req: NextApiRequest,
//   res: NextApiResponse<cropType | responseError>,
// ) {
//   console.log("are we in [id] handler");
//   const { query } = req;
//   const { id } = query;
//   // const person = people.find((p) => p.id === id);
//   const crop = { id: "1", name: "name", type: "type", trefleId: "123" };
//
//   // User with id exists
//   return crop
//     ? res.status(200).json(crop)
//     : res.status(404).json({ message: `Crop with id: ${id} not found.` });
// }

export async function GET(request: Request) {
  const array = { id: "1", type: "type", name: "name", trefleId: "123" };
  return new Response(JSON.stringify(array));
}