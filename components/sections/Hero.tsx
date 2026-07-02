import Image from "next/image";
import Link from "next/link";
import { HERO } from "@/lib/hero";
import { SITE } from "@/lib/site";
import SocialLinks from "@/components/ui/SocialLinks";
export default function Hero() {
  return (
    <section id="home" className="relative h-screen overflow-hidden">
      {/* Background */}
      <Image
        src="/images/hero wide.webp"
        alt="Rajnath Prasad"
        fill
        priority
        className="object-cover object-right"
      />
      {/* Overlay */}
      <div className="absolute inset-y-0 left-0 w-[60%] bg-linear-to-r from-black via-black/80 to-transparent" />
      {/* Hero Content */}
      <div className="relative z-10 flex h-full items-center">
        <div className="mx-auto flex w-full max-w-7xl items-center gap-16 px-8">
          <div className="max-w-2xl">
            <p className="pl-1 text-sm uppercase tracking-[0.2em] text-zinc-300">
              {HERO.greeting}
            </p>
            <h1 className="text-6xl lg:text-7xl font-extrabold leading-[0.95] tracking-tight text-white">
              {HERO.name}
            </h1>
            <p className="mt-2 text-lg  text-zinc-400">
              {HERO.title}
            </p>
            <SocialLinks className="hidden lg:flex mt-4" />
            {/* CTA */}
            <div className="mt-4 flex items-center gap-5">
              <a
  href="/resume/RajnathResume.pdf"
  download="RajnathResume.pdf"
  className="rounded-full bg-violet-600 px-8 py-4 font-medium text-white transition-all duration-300 hover:bg-violet-700"
>
  Resume
</a>
              {/* <Link
                href={HERO.secondaryButton.href}
                className="rounded-full border border-zinc-600 px-8 py-4 font-medium text-white transition-all duration-300 hover:border-violet-500 hover:bg-white/5"
              >
                {HERO.secondaryButton.text}
              </Link> */}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}