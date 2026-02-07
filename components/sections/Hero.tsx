"use client";

import * as React from "react";
import { motion } from "motion/react";
import { FiArrowUpRight, FiDownload } from "react-icons/fi";
import { AppleHelloEnglishEffect } from "@/components/ui/apple-hello-effect";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative flex min-h-[90vh] w-full items-center justify-center overflow-hidden bg-[#FAFAFA] px-6 pt-20 dark:bg-[#050505] lg:pt-0">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-8">
        {/* Left Column: Typography */}
        <div className="flex flex-col justify-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-baseline gap-3">
              <span className="h-0.5 w-8 bg-zinc-900 dark:bg-white"></span>
              <span className="text-sm font-medium uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
                Introduction
              </span>
            </div>

            <h1 className="mt-6 flex flex-col text-[clamp(4rem,15vw,9rem)] font-light leading-[0.9] tracking-tighter text-zinc-900 dark:text-white">
              <span className="block h-[1.3em] overflow-visible w-full">
                <AppleHelloEnglishEffect className="h-[1em] w-auto text-zinc-900 dark:text-white" />
              </span>
              <span className="block text-4xl font-bold tracking-normal sm:text-5xl lg:text-6xl text-zinc-400 dark:text-zinc-600 mt-2">
                I&apos;m Haziq.
              </span>
            </h1>

            <p className="mt-8 max-w-md text-lg leading-relaxed text-zinc-500 dark:text-zinc-400">
              Built web applications using CakePHP, MERN stack, and Next.js,
              focusing on clarity, performance, and maintainable code.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="flex flex-wrap gap-4"
          >
            <button className="group flex items-center gap-2 rounded-full bg-zinc-900 px-8 py-4 text-sm font-semibold text-white transition-all hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200">
              Check Resume
              <FiArrowUpRight className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </button>
            <button className="flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-8 py-4 text-sm font-semibold text-zinc-900 transition-all hover:bg-zinc-50 dark:border-zinc-800 dark:bg-black dark:text-white dark:hover:bg-zinc-900">
              Copy Email
              <FiDownload className="opacity-0 transition-opacity group-hover:opacity-100" />
            </button>
          </motion.div>
        </div>

        {/* Right Column: Image & Stats */}
        <div className="relative flex items-center justify-center lg:h-full">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative aspect-4/5 w-full max-w-125 overflow-hidden rounded-4xl bg-zinc-200 dark:bg-zinc-900"
          >
            {/* Placeholder for Portrait */}
            <div className="absolute inset-0 flex items-center justify-center bg-linear-to-br from-zinc-100 to-zinc-300 dark:from-zinc-800 dark:to-zinc-900">
              <Image
                src="/images/portrait.jpeg"
                alt="Haziq Ariff"
                width={500}
                height={600}
                className="h-full w-full object-cover"
              />
            </div>

            {/* Floating Stat Card 1 */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="absolute bottom-12 left-0 z-10 -ml-6 w-48 rounded-2xl bg-white p-5 shadow-2xl dark:bg-zinc-900/90 dark:backdrop-blur-md"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-white dark:bg-white dark:text-black">
                  <FiArrowUpRight size={18} />
                </div>
                <div>
                  <p className="text-xs font-medium text-zinc-500">Projects</p>
                  <p className="text-xl font-bold text-zinc-900 dark:text-white">
                    12+
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Floating Stat Card 2 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="absolute right-6 top-12 z-10 w-32 rounded-2xl bg-black p-4 text-center text-white shadow-xl dark:bg-white dark:text-black"
            >
              <p className="text-3xl font-bold">100%</p>
              <p className="text-[10px] uppercase opacity-70">Commitment</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
