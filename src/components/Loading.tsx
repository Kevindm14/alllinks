export const Loading = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-gray-900"></div>
    </div>
  );
};

export default Loading;