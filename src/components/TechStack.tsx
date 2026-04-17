"use client";

import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";

const categories = [
  {
    title: "Automation & AI",
    items: ["n8n (Self-Hosted)", "Claude API", "OpenAI API", "REST APIs", "Webhooks", "Prompt Engineering"],
  },
  {
    title: "Programming",
    items: ["Python", "JavaScript", "SQL", "SQLAlchemy", "pyodbc"],
  },
  {
    title: "APIs & Integrations",
    items: ["Google Workspace APIs", "Facebook Graph API", "YouTube Data API", "Stripe", "Twilio", "Typeform"],
  },
  {
    title: "Data & BI",
    items: ["Snowflake", "Databricks", "Power BI", "Looker", "Tableau", "BigQuery", "Google Sheets"],
  },
  {
    title: "Infrastructure",
    items: ["Docker", "Traefik + SSL", "Ubuntu VPS", "ETL Pipelines", "Data Pipeline Automation"],
  },
];

export default function TechStack() {
  return (
    <SectionWrapper id="stack" className="py-24 lg:py-32 bg-bg-secondary">
      <div className="max-w-5xl mx-auto px-6">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-text-tertiary text-xs tracking-widest uppercase mb-4"
        >
          Skills
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-[family-name:var(--font-outfit)] text-3xl sm:text-4xl font-semibold text-text-primary tracking-tight mb-12"
        >
          What I work with.
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <h3 className="font-[family-name:var(--font-outfit)] font-medium text-text-primary text-sm mb-4">
                {cat.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1.5 rounded-lg bg-card border border-border-light text-text-secondary text-xs"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
