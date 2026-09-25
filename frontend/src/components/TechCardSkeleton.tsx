const TechCardSkeleton = () => {
  return (
    <div className="flex flex-col items-center gap-4 bg-cardColor border border-borderColor rounded-lg p-6 animate-pulse">
      <div className="w-14 h-14 rounded-lg bg-borderColor" />
      <div className="h-5 w-16 rounded bg-borderColor" />
    </div>
  );
};

export default TechCardSkeleton;
