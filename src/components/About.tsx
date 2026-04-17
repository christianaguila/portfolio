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
          className="font-[family-name:var(--font-outfit)] text-3xl sm:text-4xl font-semibold text-text-primary tracking-tight leading-tight mb-8"
        >
          Enterprise analytics background.{" "}
          <span className="text-text-secondary">
            AI automation builder.
          </span>
        </motion.h2>

        <div className="space-y-5 text-text-secondary text-base sm:text-lg leading-relaxed">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            I&apos;m Christian Rhomel Aguila — a Marketing Analytics Manager at Globe Telecom
            and an AI Automation Developer building production-grade systems on the side.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            With 3 years of enterprise analytics across Globe Telecom and Solaire Resort —
            working with Snowflake, Databricks, Python, and Power BI — I don&apos;t just connect
            APIs. I understand the business problem, the data behind it, and the outcome that matters.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            My automation workflows run on self-hosted n8n — deployed on my own VPS with Docker,
            Traefik, and SSL. No vendor lock-in, no per-execution fees, full control. Combined
            with the Claude API, I build systems that don&apos;t just automate tasks — they make
            intelligent decisions.
          </motion.p>
        </div>
      </div>
    </SectionWrapper>
  );
}
