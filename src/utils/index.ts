export const API_URL = "http://localhost:4000/api/recipes";

/**
 * Fetches data from the specified API endpoint and returns the response as JSON.
 *
 * @template T - The expected type of the response data.
 * @param url - The URL to fetch data from.
 * @param options - Optional fetch options (such as method, headers, body, etc.).
 * @returns A promise that resolves to the response data of type `T`.
 * @throws {Error} If the network response is not ok.
 */
export const fetchAPI = async <T = unknown>(
  url: string,
  options = {}
): Promise<T> => {
  const response = await fetch(url, options);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json() as Promise<T>;
};
