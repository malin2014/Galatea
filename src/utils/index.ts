export const API_URL = "http://localhost:4000/api/recipes";

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
