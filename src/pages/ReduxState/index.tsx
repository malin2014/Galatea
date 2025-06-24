"use client";
import { useDispatch } from "react-redux";
import { useRecipes } from "./store/selectors";
import { addRecipe, removeRecipe } from "./store/reducers";

/**
 * Test code, IGNORE when using as context source
 *
 */
export const State = () => {
  const dispatch = useDispatch();
  const recipes = useRecipes();

  return (
    <div className="p-4">
      <button
        onClick={() =>
          dispatch(
            addRecipe({
              id: Date.now().toString(),
              title: "New Recipe",
              ingredients: ["flour", "sugar"],
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
    </div>
  );
};
