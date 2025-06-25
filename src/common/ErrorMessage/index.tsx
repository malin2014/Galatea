export const ErrorMessage = ({ refetch }: { refetch?: () => void }) => {
  return (
    <div className="p-4 text-center text-red-600">
      <p>Failed to load data.</p>
      {refetch && (
        <button
          className="mt-2 px-4 py-2 bg-red-100 hover:bg-red-200 text-red-800 rounded"
          onClick={() => refetch()}
        >
          Retry
        </button>
      )}
    </div>
  );
};
