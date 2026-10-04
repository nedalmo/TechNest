export default function CategorySkeleton() {
  return (
    <div className="grid grid-cols-1 gap-3 px-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
      {[1, 2, 3, 4, 5, 6, 7, 8, 90].map((index) => (
        <div
          key={index}
          className="h-40 rounded-sm bg-zinc-400/10 p-1 animate-pulse"
        >
          <div className="flex h-full justify-between">
            <div className="mt-2 h-4 w-20 rounded bg-zinc-300/40" />

            <div className="mt-15 h-20 w-20 rounded bg-zinc-300/40" />
          </div>
        </div>
      ))}
    </div>
  );
}
