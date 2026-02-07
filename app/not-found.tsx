"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white px-6 text-center dark:bg-black">
      <h2 className="text-5xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-7xl">
        404
      </h2>
      <p className="mt-6 text-lg text-zinc-500 dark:text-zinc-400">
        This page could not be found.
      </p>
      <div className="mt-10">
        <Link
          href="/"
          className="rounded-full bg-zinc-900 px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}
