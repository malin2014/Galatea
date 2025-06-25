"use client";
import withQuery, { WithLoadingProps } from "@/components/HOC";
import { IIngredient, IRecipe } from "@/pages/ReduxState/store/types";

export const RecipeDetail: React.FC<WithLoadingProps> = ({
  data,
  onRemove,
}: WithLoadingProps) => {
  return data?.map((r: IRecipe, i: number) => (
    <div key={i} className="p-4 mt-4 border rounded shadow">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold">{r.title}</h2>
        {!!onRemove && (
          <button
            className="ml-2 text-red-500"
            onClick={() => onRemove?.(r.id)}
          >
            Remove
          </button>
        )}
      </div>
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
};

/**
 * A higher-order component that wraps the `RecipeDetail` component with data fetching logic
 * using the `withQuery` function. This component is responsible for retrieving the necessary
 * data and passing it as props to `RecipeDetail`.
 *
 * @remarks
 * Use this component when you need to display recipe details with automatic data fetching.
 *
 * @see RecipeDetail
 * @see withQuery
 */
export const RecipeDetailWithQuery = withQuery(RecipeDetail);
