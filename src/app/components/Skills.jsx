function Skills() {
  const skills = [
    {
      category: "Frontend",
      items: [
        "React.js",
        "Next.js",
        "JavaScript (ES6+)",
        "TypeScript",
        "HTML5",
        "CSS3",
        "Tailwind CSS",
      ],
    },
    {
      category: "State Management",
      items: ["Redux", "Context API", "React Query"],
    },
    {
      category: "Tools & Others",
      items: [
        "Git",
        "GitHub",
        "npm/yarn",
        "Webpack",
        "Vite",
        "Jest",
        "React Testing Library",
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="container mx-auto px-4 py-16 md:py-24 space-y-6 md:space-y-12"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white">
        My Skills
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {skills.map((skillGroup) => (
          <div
            key={skillGroup.category}
            className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm overflow-hidden"
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
          </div>
        ))}
      </div>
    </section>
  );
}
export default Skills;
