import Image from "next/image";
import { TimelineEntry } from "@/types/timeline";

interface TimelineItemProps {
  entry: TimelineEntry;
  isLast?: boolean;
}

export default function TimelineItem({
  entry,
  isLast = false,
}: TimelineItemProps) {
  return (
    <div className="relative pl-10">
      <span className="absolute left-0 top-1.5 h-2.5 w-2.5 rounded-full border-2 border-violet-400 bg-black" />

      {!isLast && (
        <span className="absolute left-[4.5px] top-5 h-full w-px bg-zinc-800" />
      )}

      <p className="text-xs uppercase tracking-[0.15em] text-zinc-500">
        {entry.period}
      </p>

      <h3 className="mt-2 text-xl font-semibold text-white">
        {entry.title}
      </h3>

      <p className="mt-1 text-sm text-violet-400">
        {entry.subtitle}
      </p>

      <div className="mt-6 flex flex-col gap-6 sm:flex-row sm:items-center">
        {entry.image && (
          <div className="group relative h-44 w-44 shrink-0 overflow-hidden rounded-2xl border border-zinc-800 transition-all duration-500 hover:border-violet-500/50 hover:shadow-xl hover:shadow-violet-500/10">
            <Image
              src={entry.image}
              alt={entry.title}
              fill
              className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
            />
          </div>
        )}

        {entry.description && (
          <p className="max-w-xl leading-relaxed text-zinc-400">
            {entry.description}
          </p>
        )}
      </div>
    </div>
  );
}