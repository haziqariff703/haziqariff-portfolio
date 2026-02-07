"use client";

import * as React from "react";
import { motion } from "motion/react";

export default function Contact() {
  return (
    <section className="bg-zinc-50 px-6 py-24 dark:bg-zinc-900/50">
      <div className="mx-auto max-w-2xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-light tracking-tight text-zinc-900 dark:text-white sm:text-4xl">
            Let&apos;s Work Together
          </h2>
          <p className="mt-4 text-zinc-500 dark:text-zinc-400">
            Have a project in mind? I&apos;m always open to discussing new
            opportunities.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <button className="rounded-full bg-zinc-900 px-8 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90 dark:bg-white dark:text-black">
              Get in Touch
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
