"use client";
import { useRecipes } from "./hooks";
import { IRecipe } from "../ReduxState/store/types";
import { useRecipeMutation } from "./queries";
import { RecipeDetailWithQuery } from "@/common/RecipeDetails";
import { mockRecipe } from "@/mock";

export const UseQuery = () => {
  const query = useRecipes<IRecipe[]>();
  const { add, remove } = useRecipeMutation();

  return (
    <>
      <button
        onClick={() => add.mutate(mockRecipe)}
        className="button-glass p-2 cursor-pointer shadow-sm"
      >
        Add Recipe
      </button>
      <RecipeDetailWithQuery
        {...query}
        onRemove={(id: string) => remove.mutate(id)}
      />
    </>
  );
};
