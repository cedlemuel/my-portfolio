const ProjectCardSkeleton = () => {
  return (
    <div className="flex flex-col gap-3 bg-cardColor border border-borderColor rounded-lg p-6 w-full h-full animate-pulse">
      <div className="w-12 h-12 rounded-lg bg-borderColor" />

      <div className="h-6 w-2/3 rounded bg-borderColor" />

      <div className="flex flex-col gap-2 flex-1">
        <div className="h-3 w-full rounded bg-borderColor" />
        <div className="h-3 w-full rounded bg-borderColor" />
        <div className="h-3 w-4/5 rounded bg-borderColor" />
      </div>

      <div className="flex flex-wrap gap-2">
        <div className="h-6 w-14 rounded-md bg-borderColor" />
        <div className="h-6 w-16 rounded-md bg-borderColor" />
        <div className="h-6 w-12 rounded-md bg-borderColor" />
      </div>

      <div className="flex gap-2 mt-1">
        <div className="h-9 w-24 rounded-md bg-borderColor" />
        <div className="h-9 w-20 rounded-md bg-borderColor" />
      </div>
    </div>
  );
};

export default ProjectCardSkeleton;