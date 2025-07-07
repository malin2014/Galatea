import { API_URL, fetchAPI } from "@/utils";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { IRecipe } from "../ReduxState/store/types";

/**
 * Sends a POST request to add a new recipe to the API.
 *
 * @param recipe - The recipe object to be added.
 * @returns A promise that resolves with the response from the API.
 */
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
 * Custom hook that provides mutation functions for managing recipes.
 *
 * This hook returns three mutation objects for adding, updating, and removing recipes.
 * Each mutation automatically invalidates the "recipes" query on success to ensure
 * the recipe list stays up-to-date.
 *
 * @returns An object containing:
 * - `add`: Mutation for adding a new recipe.
 * - `update`: Mutation for updating an existing recipe.
 * - `remove`: Mutation for deleting a recipe.
 *
 * @example
 * const { add, update, remove } = useRecipeMutation();
 * add.mutate(newRecipe);
 * update.mutate(updatedRecipe);
 * remove.mutate(recipeId);
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
