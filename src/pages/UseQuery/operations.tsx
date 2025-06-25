import { useRecipeMutation } from "./queries";

export const Mutations = () => {
  const { add, remove } = useRecipeMutation();

  return (
    <div className="my-4">
      <button
        onClick={() =>
          add.mutate({
            id: "new-id",
            title: "New Recipe",
            ingredients: [
              { id: 1, name: "Ingredient 1", quantity: "1 cup" },
              { id: 2, name: "Ingredient 2", quantity: "2 tbsp" },
            ],
            instructions: "Mix all ingredients together.",
          })
        }
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        Add Recipe
      </button>
      <button
        onClick={() => remove.mutate("2")}
        className="ml-2 px-4 py-2 bg-red-500 text-white rounded"
      >
        Remove Recipe
      </button>
    </div>
  );
};
