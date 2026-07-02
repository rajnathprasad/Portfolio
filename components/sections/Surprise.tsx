"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RANDOM_MESSAGES } from "@/lib/messages";

export default function Surprise() {
  const [message, setMessage] = useState<string | null>(null);
  const messageRef = useRef<HTMLDivElement>(null);

  const revealMessage = () => {
    const random =
      RANDOM_MESSAGES[Math.floor(Math.random() * RANDOM_MESSAGES.length)];
    setMessage(random);
  };

  useEffect(() => {
    if (message && messageRef.current) {
      messageRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }, [message]);

  return (
    <section className="flex flex-col items-center justify-center gap-8 bg-black px-8 py-32 text-center">
      <p className="max-w-md text-sm uppercase tracking-[0.2em] text-zinc-500">
        You&apos;ve made it all the way down here
      </p>

      {!message && (
        <button
          type="button"
          onClick={revealMessage}
          className="rounded-full border border-zinc-700 px-8 py-4 text-sm font-medium text-white transition-all duration-300 hover:border-violet-500 hover:bg-white/5"
        >
          Click here for a message
        </button>
      )}

      <AnimatePresence mode="wait">
        {message && (
          <motion.div
            key={message}
            ref={messageRef}
            initial={{ opacity: 0, y: 70, rotate: -6, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, rotate: -2, scale: 1 }}
            exit={{ opacity: 0, y: -30, rotate: 4 }}
            transition={{ type: "spring", stiffness: 120, damping: 14 }}
            className="max-w-md rounded-sm bg-zinc-100 px-8 py-10 text-left shadow-2xl"
          >
            <p className="font-serif text-lg italic leading-relaxed text-zinc-800">
              {message}
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {message && (
        <button
          type="button"
          onClick={revealMessage}
          className="text-sm text-zinc-500 underline-offset-4 transition-colors duration-300 hover:text-white hover:underline"
        >
          One more
        </button>
      )}
    </section>
  );
}