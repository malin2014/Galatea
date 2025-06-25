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
      <div className="my-4">
        <button
          onClick={() => add.mutate(mockRecipe)}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Add Recipe
        </button>
      </div>
      <RecipeDetailWithQuery
        {...query}
        onRemove={(id: string) => remove.mutate(id)}
      />
    </>
  );
};
