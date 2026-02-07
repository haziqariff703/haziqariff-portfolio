"use client";

import * as React from "react";
import { motion } from "motion/react";
import { FiArrowUpRight } from "react-icons/fi";

const projects = [
  {
    id: 1,
    title: "Halo Digital Agency",
    category: "Web Design",
    image: "/images/project-1.jpg", // Placeholder path
    color: "bg-[#F3F4F6]",
    darkColor: "dark:bg-zinc-800",
  },
  {
    id: 2,
    title: "Creative Minds Inc.",
    category: "Branding",
    image: "/images/project-2.jpg", // Placeholder path
    color: "bg-[#FDF2F8]",
    darkColor: "dark:bg-zinc-800",
  },
  {
    id: 3,
    title: "Art Gallery",
    category: "Development",
    image: "/images/project-3.jpg", // Placeholder path
    color: "bg-[#EFF6FF]",
    darkColor: "dark:bg-zinc-800",
  },
];

export default function Projects() {
  return (
    <section className="w-full px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 flex items-end justify-between">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-light tracking-tight text-zinc-900 dark:text-white sm:text-5xl">
              Latest Works
            </h2>
          </motion.div>

          <motion.button
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="hidden items-center gap-2 text-sm font-medium text-zinc-500 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white sm:flex"
          >
            View All Projects
            <FiArrowUpRight />
          </motion.button>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + 0.2, duration: 0.8 }}
              className="group cursor-pointer space-y-4"
            >
              <div
                className={`relative aspect-4/3 overflow-hidden rounded-2xl ${project.color} ${project.darkColor}`}
              >
                {/* Image Placeholder */}
                <div className="absolute inset-0 flex items-center justify-center text-zinc-400 dark:text-zinc-600">
                  <span className="font-medium">Project Preview</span>
                </div>

                {/* Overlay Hover Effect */}
                <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/5 dark:group-hover:bg-white/5" />

                <div className="absolute bottom-4 right-4 flex h-10 w-10 translate-y-4 items-center justify-center rounded-full bg-white opacity-0 shadow-lg transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 dark:bg-black">
                  <FiArrowUpRight className="text-zinc-900 dark:text-white" />
                </div>
              </div>

              <div className="space-y-1">
                <h3 className="text-xl font-medium text-zinc-900 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-sm text-zinc-500 dark:text-zinc-400">
                  {project.category}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 flex justify-center sm:hidden">
          <button className="flex items-center gap-2 text-sm font-medium text-zinc-900 dark:text-white">
            View All Projects
            <FiArrowUpRight />
          </button>
        </div>
      </div>
    </section>
  );
}
