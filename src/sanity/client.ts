import { createClient } from "next-sanity";
import { apiVersion, dataset, projectId } from "./env";

export const client = createClient({
  projectId: projectId || "placeholder",
  dataset,
  apiVersion,
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
});

export const isSanityConfigured = !!projectId;

export async function safeFetch<T>(
  query: string,
  params?: Record<string, unknown>
): Promise<T | null> {
  if (!isSanityConfigured) return null;
  try {
    return await client.fetch<T>(query, params ?? {}, {
      next: { revalidate: 60 },
    });
  } catch (error) {
    console.error("Sanity fetch error:", error);
    return null;
  }
}
