"use client";
import withQuery, { WithLoadingProps } from "@/components/HOC";
import { IRecipe } from "@/pages/ReduxState/store/types";

export const RecipeDetail: React.FC<WithLoadingProps> = ({
  data,
  onRemove,
}: WithLoadingProps) => {
  return (
    <main className="flex-1 pt-4 pb-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {data?.map((recipe: IRecipe, i: number) => (
        <article
          key={i}
          className="glass p-5 cursor-pointer shadow-md shadow-white hover:shadow-lg transition-shadow duration-300 ease-in-out"
        >
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-xl font-serif font-semibold">{recipe.title}</h2>
            {!!onRemove && (
              <button
                className="ml-2 text-white-500 hover:text-white-700 text-3xl font-bold cursor-pointer"
                onClick={() => onRemove?.(recipe.id)}
                aria-label="Remove recipe"
              >
                ×
              </button>
            )}
          </div>
          <section className="mb-3">
            <h3 className="font-semibold underline">Ingredients:</h3>
            <ul className="list-disc list-inside space-y-1 text-sm font-sans">
              {recipe.ingredients.map((ing, i) => (
                <li key={i}>{ing.name}</li>
              ))}
            </ul>
          </section>
          {recipe.instructions && (
            <section>
              <h3 className="font-semibold underline">Instructions:</h3>
              <p className="text-sm font-sans">{recipe.instructions}</p>
            </section>
          )}
        </article>
      ))}
    </main>
  );
};

export const RecipeDetailWithQuery = withQuery(RecipeDetail);
