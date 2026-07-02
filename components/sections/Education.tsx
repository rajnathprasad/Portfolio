import { EDUCATION } from "@/lib/education";
import TimelineItem from "@/components/ui/TimelineItem";

export default function Education() {
  return (
    <section id="education" className="bg-black py-32">
      <div className="mx-auto w-full max-w-7xl px-8">
        <p className="text-sm uppercase tracking-[0.2em] text-violet-400">
          {EDUCATION.eyebrow}
        </p>
        <h2 className="mt-4 max-w-2xl text-4xl font-semibold leading-tight tracking-tight text-white lg:text-5xl">
          {EDUCATION.heading}
        </h2>

        <div className="mt-16 flex flex-col gap-12">
          {EDUCATION.entries.map((entry, index) => (
            <TimelineItem
              key={entry.title + entry.period}
              entry={entry}
              isLast={index === EDUCATION.entries.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}