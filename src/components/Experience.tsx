"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import SectionWrapper from "./SectionWrapper";

const roles = [
  {
    title: "Marketing Analytics Manager",
    company: "Globe Telecom",
    period: "Dec 2025 — Present",
    highlights: [
      "Reduced monthly reporting cycle time by 70% (from 6-8 hours to 2 hours) by optimizing Snowflake SQL scripts and restructuring backend data architecture for key marketing KPIs (ARPU, CLV, subscriber counts, reload rates), enabling faster decision-making on customer acquisition and retention strategies.",
      "Eliminated 4-6 hours of manual data entry monthly by automating event survey data ingestion from Google Sheets using AppScript, transforming static monthly snapshots into real-time dashboard updates that improved response time to customer satisfaction insights.",
      "Enhanced analytical flexibility for stakeholders by adding 5+ dimensional filters to core marketing KPI dashboard, enabling marketing teams to slice data by customer segment, campaign type, and time period — improving self-service analytics adoption and reducing ad-hoc data requests by 30%.",
      "Standardized marketing KPI definitions (ARPU, CLV, reload rates) across SQL data pipelines and Looker dashboards, reducing cross-functional discrepancies and establishing a single source of truth for monthly performance reviews with marketing leadership.",
    ],
  },
  {
    title: "Senior Analyst — Strategic Marketing",
    company: "Solaire Resort",
    period: "Aug 2024 — Dec 2025",
    highlights: [
      "Reduced campaign evaluation time by 60% (from 15-20 hours to 6-8 hours per major campaign) by automating ETL pipelines using Python, SQL, and Databricks — consolidating customer, transaction, and promotional data across 20M+ records into standardized analytical frameworks.",
      "Transformed comp approval process from manual Excel workflow to real-time automated system using Python (SQLAlchemy, pyodbc) for data pipeline automation, SQL for real-time customer data extraction, and Power BI for instant eligibility calculations — reducing approval time by 93% (45 minutes to 2 minutes).",
      "Accelerated executive decision-making by building Power BI dashboards tracking real-time marketing KPIs, campaign performance, and customer lifecycle metrics — used daily by C-suite leadership (SVP Casino Marketing, VP Strategic Marketing, VP Player Development) for strategic planning and budget allocation.",
      "Saved ₱8-12M annually by identifying and recommending discontinuation of 3 underperforming casino campaigns where A/B testing revealed zero incremental revenue lift versus control groups, validated across multiple profitability tiers and customer lifecycle segments.",
      "Improved targeting precision by 15-20% by supporting A/B test design and post-campaign evaluation across control vs. test groups, identifying which customer segments (profitability tier, lifecycle stage, loyalty level) responded most favorably to specific promotional offers.",
      "Improved campaign ROI by 15-20% by developing proforma forecasting models that accurately predicted customer participation rates, incremental revenue, and lifetime value uplift — enabling marketing leadership to reallocate ₱50M+ annual promotional budget toward higher-performing customer segments.",
      "Enhanced marketing effectiveness by conducting statistical analysis on customer response patterns and ROI drivers, translating findings into actionable recommendations that shaped ₱200M+ annual campaign strategy and customer engagement initiatives.",
    ],
  },
  {
    title: "Analyst — Strategic Marketing",
    company: "Solaire Resort",
    period: "Jul 2023 — Aug 2024",
    highlights: [
      "Reduced campaign analysis turnaround by 50% (from 4-5 days to 2 days) by building automated SQL extraction workflows and Power BI dashboards that measured visitation lift, reinvestment rates, and segment profitability — enabling faster go/no-go decisions on ₱30-50M in quarterly promotional spend.",
      "Improved targeting precision by 15-20% by supporting A/B test design and post-campaign evaluation across control vs. test groups, identifying which customer segments (profitability tier, lifecycle stage, loyalty level) responded most favorably to specific promotional offers.",
      "Enhanced marketing effectiveness by conducting statistical analysis on customer response patterns and ROI drivers, translating findings into actionable recommendations that shaped ₱200M+ annual campaign strategy and customer engagement initiatives.",
      "Ensured data accuracy across enterprise analytics by managing complex SQL queries, reconciling multi-source datasets (transactional, customer, promotional), and validating data integrity — preventing ₱2-5M in potential budget misallocations due to reporting errors.",
      "Improved cross-functional collaboration by translating technical analytical findings into clear business insights for non-technical stakeholders in marketing, operations, and finance — reducing miscommunication and accelerating campaign execution cycles by 20-30%.",
      "Established foundational reporting infrastructure by building and maintaining 5+ Power BI dashboards tracking marketing KPIs, customer engagement metrics, and campaign performance — increasing data visibility and self-service analytics adoption across strategic marketing teams.",
    ],
  },
];

const education = {
  degree: "Bachelor of Science in Electronics Engineering",
  school: "Technological University of the Philippines",
  period: "2018 — 2022",
};

const certifications: { name: string; link?: string }[] = [
  { name: "Introduction to Agent Skills — Anthropic Education (2026)", link: "https://verify.skilljar.com/c/hnpq73skkvqz" },
  { name: "Claude 101 — Anthropic Education (2026)", link: "https://verify.skilljar.com/c/rz8rvvaxwh87" },
  { name: "Hands-On Essentials: Data Warehousing Workshop — Snowflake (2025)" },
  { name: "Licensed Electronics Engineer (PRC, Philippines, 2023)" },
  { name: "Google Data Analytics Professional Certificate (2022)" },
  { name: "Bayan Academy — Intermediate Data Analytics (2022)" },
];

export default function Experience() {
  return (
    <SectionWrapper id="experience" className="py-24 lg:py-32">
      <div className="max-w-3xl mx-auto px-6">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-text-tertiary text-xs tracking-widest uppercase mb-4"
        >
          Experience
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-[family-name:var(--font-outfit)] text-3xl sm:text-4xl font-semibold text-text-primary tracking-tight mb-12"
        >
          Where I&apos;ve worked.
        </motion.h2>

        {/* Roles */}
        <div className="space-y-10 mb-16">
          {roles.map((role, i) => (
            <motion.div
              key={role.title + role.company}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="pb-10 border-b border-border-light last:border-0 last:pb-0"
            >
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-1">
                <h3 className="font-[family-name:var(--font-outfit)] font-semibold text-text-primary text-lg">
                  {role.title}
                </h3>
                <span className="text-text-tertiary text-xs shrink-0">
                  {role.period}
                </span>
              </div>
              <p className="text-text-secondary text-sm mb-4">{role.company}</p>
              <ul className="space-y-2.5">
                {role.highlights.map((point, j) => (
                  <li
                    key={j}
                    className="text-text-secondary text-sm leading-relaxed pl-4 relative before:content-[''] before:absolute before:left-0 before:top-[9px] before:w-1.5 before:h-1.5 before:rounded-full before:bg-border"
                  >
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mb-10"
        >
          <h3 className="font-[family-name:var(--font-outfit)] font-semibold text-text-primary text-lg mb-3">
            Education
          </h3>
          <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
            <div>
              <p className="text-text-primary text-sm font-medium">{education.degree}</p>
              <p className="text-text-secondary text-sm">{education.school}</p>
            </div>
            <span className="text-text-tertiary text-xs">{education.period}</span>
          </div>
        </motion.div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <h3 className="font-[family-name:var(--font-outfit)] font-semibold text-text-primary text-lg mb-3">
            Licenses & Certifications
          </h3>
          <ul className="space-y-1.5">
            {certifications.map((cert) => (
              <li key={cert.name} className="text-text-secondary text-sm">
                {cert.link ? (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 hover:text-accent transition-colors duration-200"
                  >
                    {cert.name}
                    <ExternalLink size={11} className="opacity-50" />
                  </a>
                ) : (
                  cert.name
                )}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
