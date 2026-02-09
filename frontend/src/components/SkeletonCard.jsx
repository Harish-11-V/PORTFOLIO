const SkeletonCard = () => {
  return (
    <div className="glass rounded-2xl p-6 animate-pulse">
      <div className="h-48 bg-gray-800 rounded-lg mb-4"></div>
      <div className="h-6 bg-gray-800 rounded w-3/4 mb-3"></div>
      <div className="h-4 bg-gray-800 rounded w-full mb-2"></div>
      <div className="h-4 bg-gray-800 rounded w-5/6 mb-4"></div>
      <div className="flex gap-2">
        <div className="h-8 bg-gray-800 rounded-full w-20"></div>
        <div className="h-8 bg-gray-800 rounded-full w-24"></div>
        <div className="h-8 bg-gray-800 rounded-full w-16"></div>
      </div>
    </div>
  );
};

export default SkeletonCard;
