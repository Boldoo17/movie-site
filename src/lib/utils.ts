import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
const API_KEY = "f39690f9830ce804b7894ac1def4f7e9";
const BASE_URL =
  "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1";

export const fetchMovies = async (
  endpoint: string,
  params: Record<string, string> = {}
) => {
  const query = new URLSearchParams({
    api_key: API_KEY,
    language: "en-US",
    ...params,
  });

  const url = `${BASE_URL}/${endpoint}?${query}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to fetch data: ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};
export const fetchFromTmdb = async (
  endpoint: string,
  params: Record<string, string> = {}
) => {
  const queryParams = new URLSearchParams({
    api_key: API_KEY,
    language: "en-US",
    ...params,
  });

  const url = `${BASE_URL}/${endpoint}?${queryParams}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Error fetching data: ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};
