"use client";
import Image from "next/image";
import Link from "next/link";
import aboutPic from "@/assets/aboutPic.jpg";
import { motion, useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";
export default function AboutSection({ aboutRef }) {
  const [animateFromBottom, setAnimateFromBottom] = useState(true);
  const [previousScroll, setPreviousScroll] = useState(0);
  const picRef = useRef(null);
  const textRef = useRef(null);
  const isProfilePicInView = useInView(picRef, { once: false });
  const isTextInView = useInView(textRef, { once: false });
  const [positionScale, setPositionScale] = useState({
    pic: [0, 0],
    text: [0, 0],
  });
  useEffect(() => {
    function onScroll() {
      let currentPosition = window.pageYOffset; // or use document.documentElement.scrollTop;

      if (currentPosition > previousScroll) {
        // downscroll code
        setAnimateFromBottom(true);
      } else {
        // upscroll code
        setAnimateFromBottom(false);
      }
      setPreviousScroll(currentPosition <= 0 ? 0 : currentPosition);
    }

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [previousScroll]);

  const displayPic = () => {
    if (isProfilePicInView & animateFromBottom) {
      setPositionScale((prev) => ({ ...prev, pic: [100, 0] }));
      return;
    }
    if (isProfilePicInView && !animateFromBottom) {
      setPositionScale((prev) => ({ ...prev, pic: [-100, 0] }));
      return;
    }
    if (!isProfilePicInView) {
      setPositionScale((prev) => ({ ...prev, pic: 0 }));
    }
  };

  const displayText = () => {
    if (isTextInView & animateFromBottom) {
      setPositionScale((prev) => ({ ...prev, text: [100, 0] }));
      return;
    }
    if (isTextInView && !animateFromBottom) {
      setPositionScale((prev) => ({ ...prev, text: [-100, 0] }));
      return;
    }
    if (!isTextInView) {
      setPositionScale((prev) => ({ ...prev, text: 0 }));
    }
  };
  useEffect(() => {
    displayPic();
    displayText();
  }, [isProfilePicInView, isTextInView]);

  return (
    <section
      ref={aboutRef}
      id="about"
      className="bg-gray-100 dark:bg-gray-900 py-16 md:py-24"
    >
      <div className="container mx-auto px-4 space-y-6 md:space-y-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white">
          About Me
        </h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            ref={picRef}
            animate={{
              y: positionScale.pic,
              opacity: [0, 0.5, 0.6, 1],
            }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src={aboutPic}
              alt="sitting in a grassbar"
              style={{ width: "600px", height: "600px" }}
              width={600}
              height={600}
              className="rounded-lg"
            />
          </motion.div>
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0 }}
            ref={textRef}
            animate={{
              y: positionScale.text,
              opacity: [0, 0.5, 0.6, 1],
            }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-lg text-gray-700 dark:text-gray-300">
              I'm a passionate Full stack developer with 3 years of professional
              experience building modern web applications. I specialize in
              creating responsive, user-friendly interfaces with a focus on
              performance and accessibility.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              My journey in web development started with HTML, CSS, and
              JavaScript, and I quickly fell in love with React's
              component-based architecture and the efficiency it brings to
              front-end development. My expertise includes application
              designing, state management using Redux, API development, and
              modern authentication mechanisms like OAuth and JWT.
            </p>

            <p className="text-lg text-gray-700 dark:text-gray-300">
              When I'm not coding, you can find me exploring new technologies,
              contributing to open-source projects, or sharing my knowledge
              through blog posts and community forums.
            </p>
            <div className="pt-4">
              <Link
                href={"/resume/React_Developer_Nageshwor_Shah.pdf"}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex bg-blue-600 text-white h-10 items-center justify-center rounded-md border border-gray-300 dark:border-gray-700  dark:bg-gray-950 px-4 py-2 text-sm font-medium hover:bg-blue-700 dark:text-gray-300 shadow-sm  dark:hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
              >
                Download Resume
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
