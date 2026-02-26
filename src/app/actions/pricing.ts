import { headers } from "next/headers";

export async function getCurrencyFromGeo() {
  const country = (await headers()).get("x-vercel-ip-country");
  if (country === "IN") return "INR";

  return "USD";
}