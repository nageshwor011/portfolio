"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import profile from "@/assets/profile.png";
import { motion } from "motion/react";

export default function Profile({ contactRef, projectRef }) {
  const title = "Full Stack Engineer";
  const titleArray = title.split("");
  function Typewrite() {
    return (
      <>
        {titleArray.map((item, i) => (
          <span key={i}>{item}</span>
        ))}
      </>
    );
  }
  return (
    <section className="container mx-auto px-4 py-24 md:py-32 flex  flex-col-reverse md:flex-row items-center gap-8 animate-slidein300 ">
      <div className="flex-1 space-y-4">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white">
          Hi, I'm{" "}
          <span className="text-blue-600 dark:text-blue-400">Nageshwor</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400">
          <span className="font-bold">
            <Typewrite />{" "}
          </span>{" "}
          with 3 years of experience building modern web applications.
        </p>
        <div className="flex gap-4">
          <motion.button
            className="inline-flex h-10 items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
            whiletap={{ scale: 0.9 }}
            onClick={() => {
              contactRef.current?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Get in touch
          </motion.button>
          <motion.button
            className="inline-flex h-10 items-center justify-center rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-950 px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 shadow-sm hover:bg-gray-50 dark:hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
            whiletap={{ scale: 0.9 }}
            onClick={() => {
              projectRef.current?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            View my work
          </motion.button>
        </div>
      </div>
      <div className="flex-1 flex justify-center">
        <div className="relative bg-white w-72 h-72 md:w-96 md:h-96  rounded-full overflow-hidden border-4 border-blue-600 dark:border-blue-400">
          <Image
            src={profile}
            alt="Developer portrait "
            fill
            className=" object-scale-down"
            priority
          />
        </div>
      </div>
    </section>
  );
}
