"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Play } from "lucide-react";
import type { Project } from "@/data/projects";

function GithubIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.4,
        delay: index * 0.06,
      }}
      className={`group rounded-2xl bg-card border border-border-light hover:border-border transition-all duration-300 hover:shadow-sm overflow-hidden ${
        project.flagship ? "md:col-span-2" : ""
      }`}
    >
      {/* Workflow image */}
      {project.image && (
        <div className="relative w-full overflow-hidden bg-[#1a1a2e]">
          <div className="relative w-full aspect-[16/7]">
            <Image
              src={project.image}
              alt={`${project.title} — n8n workflow`}
              fill
              className="object-contain p-3 group-hover:scale-[1.02] transition-transform duration-500"
              sizes={project.flagship ? "(max-width: 768px) 100vw, 66vw" : "(max-width: 768px) 100vw, 50vw"}
            />
          </div>
        </div>
      )}

      <div className="p-6 sm:p-7 flex flex-col h-full">
        {project.flagship && (
          <span className="self-start text-[10px] font-medium tracking-widest uppercase text-accent mb-3">
            Featured
          </span>
        )}

        <h3
          className={`font-[family-name:var(--font-outfit)] font-semibold text-text-primary leading-snug mb-3 ${
            project.flagship ? "text-xl sm:text-2xl" : "text-lg"
          }`}
        >
          {project.title}
        </h3>

        <p
          className={`text-text-secondary leading-relaxed mb-5 flex-1 ${
            project.flagship ? "text-base" : "text-sm"
          }`}
        >
          {project.flagship ? project.details : project.description}
        </p>

        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 rounded-md bg-bg-secondary text-text-tertiary text-xs"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-4 pt-4 border-t border-border-light">
          {project.loom && (
            <a
              href={project.loom}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-text-secondary hover:text-accent transition-colors duration-200"
            >
              <Play size={12} />
              Watch demo
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-text-secondary hover:text-accent transition-colors duration-200"
            >
              <GithubIcon size={12} />
              Source
            </a>
          )}
          {!project.loom && !project.github && (
            <span className="inline-flex items-center gap-1.5 text-xs text-text-tertiary">
              <ArrowUpRight size={12} />
              Private
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
}
