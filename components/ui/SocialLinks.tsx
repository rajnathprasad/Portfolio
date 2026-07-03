import { SOCIAL_LINKS } from "@/lib/social";

interface SocialLinksProps {
  className?: string;
}

export default function SocialLinks({ className = "" }: SocialLinksProps) {
  return (
    <div className={`flex flex-wrap items-center gap-3 sm:gap-4 ${className}`}>
      {SOCIAL_LINKS.map(({ label, href, icon: Icon }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className="group flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/5 backdrop-blur-md transition-all duration-300 hover:border-violet-400/50 hover:bg-white/10 sm:h-11 sm:w-11"
        >
          <Icon className="h-4 w-4 text-zinc-300 transition-colors duration-300 group-hover:text-white" />
        </a>
      ))}
    </div>
  );
}