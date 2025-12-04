const CardSkeleton = () => {
  return (
    <article className="shrink-0 relative w-48 h-[420px] min-h-full bg-foreground/40 rounded-lg space-y-4 overflow-hidden animate-pulse">
      {/* Bookmark skeleton */}
      <div className="absolute top-0 left-0 w-10 h-14 bg-foreground/60 rounded-br-md"></div>

      {/* Poster skeleton */}
      <div className="h-64 bg-foreground/60"></div>

      <div className="px-2 pb-4 space-y-3">
        <div className="flex justify-between items-start gap-4">
          {/* Title skeleton (2 lines) */}
          <div className="space-y-2 w-full">
            <div className="h-3 bg-foreground/60 rounded"></div>
            <div className="h-3 bg-foreground/50 rounded w-3/4"></div>
          </div>

          {/* Info icon skeleton */}
          <div className="h-6 w-6 bg-foreground/50 rounded-md"></div>
        </div>

        {/* Genre skeleton */}
        <div className="h-3 bg-foreground/50 rounded w-1/2"></div>

        {/* Rating skeleton */}
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 bg-foreground/50 rounded-full"></div>
          <div className="h-3 bg-foreground/50 rounded w-6"></div>
        </div>

        {/* Button skeleton */}
        <div className="h-8 bg-foreground/50 rounded-lg w-32 mx-auto mt-4"></div>

        {/* Watch on skeleton */}
        <div className="h-2 bg-foreground/40 rounded w-16 mx-auto"></div>
      </div>
    </article>
  );
};

export default CardSkeleton;
