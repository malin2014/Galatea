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
        className="button-glass p-2 cursor-pointer shadow-sm"
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
