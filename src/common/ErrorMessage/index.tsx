export const ErrorMessage = ({ refetch }: { refetch?: () => void }) => {
  return (
    <div className="text-center p-4">
      <p className="text-gray-500">No data</p>
      {refetch && (
        <button
          onClick={() => refetch()}
          className="mt-2 px-4 py-2 button-glass"
        >
          Retry
        </button>
      )}
    </div>
  );
};
