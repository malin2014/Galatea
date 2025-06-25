import { API_URL, fetchAPI } from "@/utils";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { IRecipe } from "../ReduxState/store/types";

const addRecipe = async (recipe: IRecipe) => {
  return await fetchAPI(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(recipe),
  });
};

const updateRecipe = async (recipe: IRecipe) => {
  return await fetchAPI(`${API_URL}/${recipe.id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(recipe),
  });
};

export const removeRecipe = async (id: string) => {
  return await fetchAPI(`${API_URL}/${id}`, { method: "DELETE" });
};

/**
 * Custom React hook that provides mutation functions for managing recipes.
 *
 * This hook returns three mutation objects (`add`, `update`, and `remove`) for adding,
 * updating, and removing recipes, respectively. Each mutation automatically invalidates
 * the "recipes" query on success to ensure data consistency.
 *
 * @returns An object containing:
 * - `add`: Mutation for adding a recipe.
 * - `update`: Mutation for updating a recipe.
 * - `remove`: Mutation for removing a recipe.
 *
 * @example
 * const { add, update, remove } = useRecipeMutation();
 * add.mutate(newRecipe);
 */
export const useRecipeMutation = () => {
  const queryClient = useQueryClient();

  const add = useMutation({
    mutationFn: addRecipe,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["recipes"] }),
  });

  const update = useMutation({
    mutationFn: updateRecipe,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["recipes"] }),
  });

  const remove = useMutation({
    mutationFn: removeRecipe,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["recipes"] }),
  });

  return { add, update, remove };
};
