"use client";

import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";

export default function About() {
  return (
    <SectionWrapper id="about" className="py-24 lg:py-32 bg-bg-secondary">
      <div className="max-w-3xl mx-auto px-6">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-text-tertiary text-xs tracking-widest uppercase mb-4"
        >
          About
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl font-semibold text-text-primary tracking-tight leading-tight mb-8"
        >
          AI automation developer.{" "}
          <span className="text-text-secondary">
            Built on an analytics foundation.
          </span>
        </motion.h2>

        <div className="space-y-5 text-text-secondary text-base sm:text-lg leading-relaxed">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            I&apos;m Christian Rhomel Aguila, an AI Automation Developer who builds
            systems that eliminate manual work for businesses.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Before automation, I spent 3 years in enterprise analytics: building data
            pipelines, transforming messy datasets, and creating reports that executives
            actually used. That background quietly shapes how I build automation systems
            today. I know how to structure data so it&apos;s actually usable downstream. I know
            where workflows break under real business conditions. And I know how to measure
            whether something is working, not just whether it runs.
          </motion.p>

        </div>
      </div>
    </SectionWrapper>
  );
}
