"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-[90vh] flex items-center justify-center px-6">
      <div className="max-w-3xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl sm:text-6xl lg:text-7xl font-semibold text-text-primary tracking-tight leading-[1.05] mb-6"
        >
          You&apos;re not understaffed.{" "}
          <span className="text-text-secondary">You&apos;re under-automated.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="text-text-secondary text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto mb-8"
        >
          I build AI systems that respond instantly, follow up for days, and never drop a lead
          so your team focuses on closing, not chasing.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="px-6 py-3 bg-accent text-white text-sm font-medium rounded-full hover:bg-accent-hover transition-colors duration-200"
          >
            View my work
          </a>
          <a
            href="mailto:christianrhomel@gmail.com"
            className="px-6 py-3 text-accent text-sm font-medium rounded-full border border-accent/30 hover:bg-accent/5 transition-colors duration-200"
          >
            Get in touch
          </a>
        </motion.div>
      </div>
    </section>
  );
}
