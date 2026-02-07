"use client";

import * as React from "react";
import { motion } from "motion/react";
import { FiArrowUpRight } from "react-icons/fi";

export default function About() {
  return (
    <section className="relative w-full bg-white px-6 py-24 dark:bg-black">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 lg:grid-cols-2">
        {/* Left Column: Text Content */}
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-light tracking-tight text-zinc-900 dark:text-white sm:text-5xl">
              About Me
            </h2>
            <div className="mt-6 h-0.5 w-12 bg-zinc-900 dark:bg-white"></div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-lg leading-relaxed text-zinc-500 dark:text-zinc-400"
          >
            I&apos;m a final-year student pursuing a Bachelor of Information
            Science (Hons) in Information Systems Management at UiTM Puncak
            Perdana, with a strong interest in frontend and web development. I
            enjoy bridging the gap between design and engineering by building
            clean, intuitive, and responsive web interfaces using modern
            technologies.
            <br />
            <br />
            I&apos;m currently seeking an internship opportunity where I can
            apply my skills, continue learning, and contribute to a professional
            development team while gaining real-world experience..
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <button className="group flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-zinc-900 dark:text-white">
              Read Full Bio
              <FiArrowUpRight className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </button>
          </motion.div>
        </div>

        {/* Right Column: Grid of Cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {/* Card 1: Metric */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="flex flex-col justify-between rounded-3xl bg-zinc-50 p-8 dark:bg-zinc-900"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-sm dark:bg-black">
              <span className="text-xl">🚀</span>
            </div>
            <div>
              <p className="text-5xl font-bold tracking-tight text-zinc-900 dark:text-white">
                120%
              </p>
              <p className="mt-2 text-sm font-medium text-zinc-500">
                Efficiency Boost
              </p>
            </div>
          </motion.div>

          {/* Card 2: Image Placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative aspect-square overflow-hidden rounded-3xl bg-zinc-200 dark:bg-zinc-800"
          >
            <div className="absolute inset-0 flex items-center justify-center bg-zinc-300 dark:bg-zinc-700">
              <span className="text-zinc-500 dark:text-zinc-400">Photo</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
