import Image from "next/image";
import { HERO } from "@/lib/hero";
import SocialLinks from "@/components/ui/SocialLinks";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      {/* Background — mobile */}
      <Image
        src="/images/dp1.jpeg"
        alt="Rajnath Prasad"
        fill
        priority
        className="object-cover object-center sm:hidden"
      />
      {/* Background — desktop */}
      <Image
        src="/images/hero wide.webp"
        alt="Rajnath Prasad"
        fill
        priority
        className="hidden object-cover object-right sm:block"
      />
      {/* Overlay: bottom gradient only on mobile (photo stays visible), left panel on desktop */}
      <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black via-black/60 to-transparent sm:inset-y-0 sm:left-0 sm:right-auto sm:h-auto sm:w-[60%] sm:bg-linear-to-r sm:from-black sm:via-black/80 sm:to-transparent" />
      {/* Hero Content */}
      <div className="relative z-10 flex min-h-screen items-end pb-16 sm:items-center sm:pb-0">
        <div className="mx-auto flex w-full max-w-7xl items-center gap-16 px-6 sm:px-8">
          <div className="max-w-2xl">
            <p className="pl-1 text-xs uppercase tracking-[0.2em] text-zinc-300 sm:text-sm">
              {HERO.greeting}
            </p>
            <h1 className="text-4xl font-extrabold leading-[0.95] tracking-tight text-white sm:text-6xl lg:text-7xl">
              {HERO.name}
            </h1>
            <p className="mt-2 text-base text-zinc-400 sm:text-lg">
              {HERO.title}
            </p>
            <SocialLinks className="mt-4" />
            <div className="mt-6 flex items-center gap-5 sm:mt-4">
              <a
                href="/resume/RajnathResume.pdf"
                download="RajnathResume.pdf"
                className="rounded-full bg-violet-600 px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:bg-violet-700 sm:px-8 sm:py-4 sm:text-base"
              >
                Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}