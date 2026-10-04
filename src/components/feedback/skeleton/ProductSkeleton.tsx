import "./skeleton.css";

export default function ProductSkeleton() {
  return (
    <div className=" grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-5">
      {[1, 2, 3, 4, 5].map((el) => {
        return (
          <div key={el} className="mt-20 relative">
            <div className="relative w-full overflow-hidden bg-zinc-500/15 text-center animate-pulse">
              {/* image */}
              <div className="flex h-55 justify-center bg-zinc-300/50">
                <div className="h-full w-full bg-zinc-300/50"></div>
              </div>

              <div className="px-1.5">
                {/* title */}
                <div className="mt-3 mb-3 space-y-2">
                  <div className="h-3 w-full rounded bg-zinc-300/50"></div>
                  <div className="h-3 w-5/6 rounded bg-zinc-300/50"></div>
                  <div className="h-3 w-3/4 rounded bg-zinc-300/50"></div>
                </div>

                {/* stars */}
                <div className="mb-3 flex gap-1">
                  <div className="h-4 w-4 rounded bg-zinc-300/50"></div>
                  <div className="h-4 w-4 rounded bg-zinc-300/50"></div>
                  <div className="h-4 w-4 rounded bg-zinc-300/50"></div>
                  <div className="h-4 w-4 rounded bg-zinc-300/50"></div>
                  <div className="h-4 w-4 rounded bg-zinc-300/50"></div>
                </div>

                {/* price */}
                <div className="mb-3 flex items-center gap-2">
                  <div className="h-5 w-20 rounded bg-zinc-300/50"></div>
                  <div className="h-3 w-14 rounded bg-zinc-300/50"></div>
                  <div className="h-3 w-12 rounded bg-zinc-300/50"></div>
                </div>

                {/* features */}
                <div className="space-y-2 pb-3">
                  <div className="h-4 w-28 rounded bg-zinc-300/50"></div>
                  <div className="h-4 w-36 rounded bg-zinc-300/50"></div>
                  <div className="h-4 w-32 rounded bg-zinc-300/50"></div>
                </div>
              </div>

              {/* cart */}
              <div className="absolute top-1/2 left-5 h-9 w-9 -translate-y-1/2 rounded-full bg-zinc-300/50"></div>

              {/* heart */}
              <div className="absolute top-3 left-3 h-7 w-7 rounded-full bg-zinc-300/50"></div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
