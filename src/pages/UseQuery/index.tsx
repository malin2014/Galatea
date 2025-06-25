"use client";
import { useRecipes } from "./hooks";
import { IIngredient, IRecipe } from "../ReduxState/store/types";
import { withQuery } from "@/components/HOC";
import { Mutations } from "./operations";

/**
 * Renders a list of recipe details.
 *
 * @param data - An array of recipe objects conforming to the `IRecipe` interface.
 * Each recipe displays its title, instructions, and a list of ingredients.
 *
 * @returns A React element containing the rendered recipes, or `null` if no data is provided.
 */
const RecipeDetail = ({ data }: { data: IRecipe[] }) =>
  data?.map((r, i) => (
    <div key={i} className="p-4 mt-4 border rounded shadow">
      <h2 className="text-xl font-bold">{r.title}</h2>
      <p className="mt-2 text-gray-700">{r.instructions}</p>
      <ul className="mt-2 list-disc ml-6">
        {r.ingredients.map((ingredient: IIngredient) => (
          <li key={ingredient.id}>
            {ingredient.name} — {ingredient.quantity}
          </li>
        ))}
      </ul>
    </div>
  ));

/**
 * A higher-order component (HOC) that wraps the `RecipeDetail` component with query handling logic.
 *
 * `RecipeDetailWithQuery` manages data fetching, loading, and error states for the `RecipeDetail` component
 * by utilizing the `withQuery` HOC. This allows `RecipeDetail` to focus solely on rendering the recipe details,
 * while `withQuery` handles the asynchronous data retrieval and state management.
 *
 * @see RecipeDetail
 * @see withQuery
 */
const RecipeDetailWithQuery = withQuery(RecipeDetail);

export const UseQuery = () => {
  const query = useRecipes<IRecipe[]>();

  return (
    <>
      <Mutations />
      <RecipeDetailWithQuery {...query} />
    </>
  );
};
