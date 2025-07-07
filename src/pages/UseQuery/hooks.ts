import { API_URL, fetchAPI } from "@/utils";
import { useQuery } from "@tanstack/react-query";

/**
 * Custom React hook that fetches recipes data using React Query.
 *
 * @template T - The expected data type of the fetched recipes.
 * @returns The result of the `useQuery` hook, containing the recipes data, loading, and error states.
 *
 * @example
 * const { data, isLoading, error } = useRecipes<Recipe[]>();
 */
export const useRecipes = <T>() =>
  useQuery<T>({
    queryKey: ["recipes"],
    queryFn: () => fetchAPI<T>(API_URL),
    staleTime: 300,
  });
