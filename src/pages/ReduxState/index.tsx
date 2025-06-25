"use client";
import { useDispatch } from "react-redux";
import { addRecipe, removeRecipe } from "./store/reducers";
import { useRecipes } from "./hooks";

export const State = () => {
  const dispatch = useDispatch();
  const recipes = useRecipes();

  return (
    <>
      <button
        onClick={() =>
          dispatch(
            addRecipe({
              id: Date.now().toString(),
              title: "New Recipe",
              ingredients: [{ id: 1, name: "Flour", quantity: "2 cups" }],
              instructions: "Mix and bake.",
            })
          )
        }
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Add Recipe
      </button>

      <ul className="mt-4 space-y-2">
        {recipes.map((r) => (
          <li key={r.id} className="border p-2 rounded bg-gray-50">
            <strong>{r.title}</strong>
            <button
              className="ml-2 text-red-500"
              onClick={() => dispatch(removeRecipe(r.id))}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};
