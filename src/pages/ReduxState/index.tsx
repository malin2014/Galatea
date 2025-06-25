"use client";
import { useDispatch } from "react-redux";
import { addRecipe, removeRecipe } from "./store/reducers";
import { useRecipes } from "./hooks";
import { RecipeDetailWithQuery } from "@/common/RecipeDetails";
import { mockRecipe } from "@/mock";

export const State = () => {
  const dispatch = useDispatch();
  const state = useRecipes();

  return (
    <>
      <button
        onClick={() => dispatch(addRecipe(mockRecipe))}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Add Recipe
      </button>
      <RecipeDetailWithQuery
        {...state}
        onRemove={(id: string) => dispatch(removeRecipe(id))}
      />
    </>
  );
};
