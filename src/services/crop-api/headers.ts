import fs from "fs";
import jwt from "jsonwebtoken";
import { getSession } from "@auth0/nextjs-auth0";

// const privateKey = process.env.JWT_PRIVATE_KEY ?? "";
//
// const secret = fs.readFileSync(privateKey, {
//   encoding: "utf8",
// });

export const withAuth = async () => {
  const session = await getSession();
  if (!session) {
    throw new Error("session not found");
  }
  const secret = process.env.AUTH0_SECRET ?? "";
  const token = jwt.sign(session.user, secret, {
    algorithm: "HS256",
  });
  return {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };
};

// "Content-Type": "multipart/form-data"

export const withoutAuth = {
  "Content-Type": "application/json",
};