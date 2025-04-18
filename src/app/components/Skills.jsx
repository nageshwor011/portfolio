"use client";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
function Skills({ skillsRef }) {
  const [animateFromBottom, setAnimateFromBottom] = useState(true);
  const [previousScroll, setPreviousScroll] = useState(0);

  useEffect(() => {
    function onScroll() {
      const currentPosition = window.pageYOffset; // or use document.documentElement.scrollTop;

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

  const skills = [
    {
      category: "Programming Language",
      items: ["HTML", "CSS", "JavaScript (ES6+)", "TypeScript"],
    },
    {
      category: "Framework & Library",
      items: [
        "React.js",
        "Next.js",
        "Node js",
        "Express js",
        "Tailwind CSS",
        "Bootstrap 5",
        " RTK query",
        "react-redux ecosystem",
      ],
    },
    {
      category: "Database",
      items: ["Mysql", "Mongo db", "Firestore & Firebase db"],
    },
    {
      category: "Rest API",
      items: ["Build & Consume"],
    },
    {
      category: "Version Control",
      items: ["Git & Git hub"],
    },
  ];

  return (
    <section
      id="skills"
      className="container mx-auto px-4 py-16 md:py-24 space-y-6 md:space-y-12"
      ref={skillsRef}
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white">
        My Skills
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {skills.map((skillGroup) => (
          <motion.div
            key={skillGroup.category}
            initial={{ opacity: 0.4 }}
            whileInView={{
              y: animateFromBottom ? [100, 0] : [-100, 0],
              opacity: [0, 0.5, 0.6, 1],
            }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="bg-white dark:bg-gray-800 rounded-lg border skillShadow border-gray-200 dark:border-gray-700 shadow-sm overflow-hidden"
          >
            <div className="p-6 border-b border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                {skillGroup.category}
              </h3>
            </div>
            <div className="p-6">
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center rounded-md bg-gray-100 dark:bg-gray-700 px-2.5 py-0.5 text-sm font-medium text-gray-800 dark:text-gray-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
export default Skills;
