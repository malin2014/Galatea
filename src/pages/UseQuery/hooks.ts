import { API_URL, fetchAPI } from "@/utils";
import { useQuery } from "@tanstack/react-query";

export const useRecipes = <T>() =>
  useQuery<T>({
    queryKey: ["recipes"],
    queryFn: () => fetchAPI<T>(API_URL),
    staleTime: 300,
  });
