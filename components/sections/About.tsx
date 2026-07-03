"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ABOUT } from "@/lib/about";

export default function About() {
  return (
    <section id="about" className="bg-black py-20 sm:py-32">
      <div className="mx-auto w-full max-w-5xl px-6 sm:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left — Photo */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="flex justify-center lg:justify-start"
          >
            <div className="relative h-[380px] w-full max-w-sm overflow-hidden rounded-3xl border border-zinc-800 sm:h-[460px] sm:max-w-[380px] lg:h-[520px] lg:w-[400px]">
              <Image
                src="/images/about.jpeg"
                alt="Rajnath Prasad"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          </motion.div>

          {/* Right — Content */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="text-sm uppercase tracking-[0.2em] text-violet-400"
            >
              {ABOUT.eyebrow}
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl"
            >
              {ABOUT.heading}
            </motion.h2>

            <div className="mt-6 space-y-5 sm:mt-8 sm:space-y-6">
              {ABOUT.paragraphs.map((paragraph, index) => (
                <motion.p
                  key={index}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: 0.15 + index * 0.08 }}
                  className="text-base leading-relaxed text-zinc-400 sm:text-lg"
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}