import { EXPERIENCE } from "@/lib/experience";

export default function Experience() {
  return (
    <section id="experience" className="bg-black py-32">
      <div className="mx-auto w-full max-w-7xl px-8">
        <p className="text-sm uppercase tracking-[0.2em] text-violet-400">
          {EXPERIENCE.eyebrow}
        </p>
        <h2 className="mt-4 max-w-2xl text-4xl font-semibold leading-tight tracking-tight text-white lg:text-5xl">
          {EXPERIENCE.heading}
        </h2>

        <p className="mt-8 max-w-2xl leading-relaxed text-zinc-400">
          {EXPERIENCE.paragraph}
        </p>
      </div>
    </section>
  );
}