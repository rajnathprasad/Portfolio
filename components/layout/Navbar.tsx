"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { NAV_LINKS } from "@/lib/constants";

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [activeHash, setActiveHash] = useState<string>("home");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (pathname !== "/") return;

    const sectionIds = [
      "home",
      ...NAV_LINKS
        .filter((link) => link.href.startsWith("/#"))
        .map((link) => link.href.replace("/#", "")),
    ];

    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting);
        if (visible.length === 0) return;

        // Pick whichever intersecting section has the most visible area,
        // instead of whichever entry happens to fire last in the batch.
        const mostVisible = visible.reduce((prev, current) =>
          current.intersectionRatio > prev.intersectionRatio ? current : prev
        );
        setActiveHash(mostVisible.target.id);
      },
      {
        rootMargin: "-40% 0px -50% 0px",
        threshold: [0, 0.25, 0.5, 0.75, 1],
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [pathname]);

  const isActive = (href: string) => {
    if (href === "/learn") return pathname === "/learn";
    const isActive = (href: string) => {
  if (href === "/learn") return pathname === "/learn";

  const id = href.replace("/#", "");
  return pathname === "/" && activeHash === id;
};
    const id = href.replace("/#", "");
    return pathname === "/" && activeHash === id;
  };

  return (
    <header className="fixed left-1/2 top-8 z-50 -translate-x-1/2">
      <nav
        className={`rounded-full border px-10 py-4 transition-all duration-500 backdrop-blur-xl ${
          scrolled
            ? "border-white/15 bg-black/70 shadow-2xl"
            : "border-transparent bg-transparent"
        }`}
      >
        <ul className="flex items-center gap-10">
          {NAV_LINKS.map((link) => {
            const active = isActive(link.href);
            return (
              <li key={link.label} className="relative">
                <Link
                  href={link.href}
                  className={`relative text-sm font-medium tracking-wide transition-colors duration-300 ${
                    active ? "text-white" : "text-zinc-400 hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
                {active && (
                  <motion.div
                    layoutId="nav-underline"
                    className="absolute -bottom-1.5 left-0 right-0 h-[2px] rounded-full bg-purple-500"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}