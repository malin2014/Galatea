import { IQueryProps } from ".";

export const Error = ({ refetch }: Partial<IQueryProps<unknown>>) => {
  return (
    <div className="p-4 text-center text-red-600">
      <p>Failed to load data.</p>
      <button
        className="mt-2 px-4 py-2 bg-red-100 hover:bg-red-200 text-red-800 rounded"
        onClick={() => refetch?.()}
      >
        Retry
      </button>
    </div>
  );
};
