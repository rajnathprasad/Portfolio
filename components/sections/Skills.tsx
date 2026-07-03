"use client";

import { motion } from "framer-motion";
import { SKILLS } from "@/lib/skills";
import Badge from "@/components/ui/Badge";

export default function Skills() {
  return (
    <section id="skills" className="bg-black py-20 sm:py-32">
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-8">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-sm uppercase tracking-[0.2em] text-violet-400"
        >
          {SKILLS.eyebrow}
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-4 max-w-2xl text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl"
        >
          {SKILLS.heading}
        </motion.h2>

        <div className="mt-12 grid grid-cols-1 gap-x-12 gap-y-10 sm:mt-16 sm:gap-y-12 lg:grid-cols-2">
          {SKILLS.categories.map((category, index) => (
            <motion.div
              key={category.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
            >
              <p className="text-sm font-medium uppercase tracking-[0.15em] text-zinc-500">
                {category.label}
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                {category.items.map((item) => (
                  <Badge key={item} label={item} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}