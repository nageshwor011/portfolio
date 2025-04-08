import Image from "next/image";
import Link from "next/link";
import { Github, ExternalLink } from "lucide-react";
import cura from "@/assets/cura.png";
import programiz from "@/assets/programiz.png";

export default function Projects() {
  const projects = [
    {
      title: "E-commerce Platform",
      description:
        "A full-featured e-commerce site built with React, and a headless CMS. Includes product filtering, searching, cart functionality, and payment integration.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["React", "Tailwind CSS", "Stripe"],
      liveUrl: "https://feelingz.nl/",
      imageUrl: "/images/feeling.png",
    },
    {
      title: "Hospital Management System",
      description:
        "Developed responsive UI for Cura Health, enabling telemedicine, online appointments, lab test booking, and patient records. Ensured smooth user experience with real-time notifications across web and mobile platforms",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["React", "Node js", "Tailwind CSS", "Paypal", "Firebase"],
      liveUrl: "https://www.curahealth.org/",
      imageUrl: cura,
    },

    {
      title: "Online Code Compiler",
      description:
        "Worked on an interactive online code compiler for Programiz PRO, enabling hands-on learning with real-time output, guided projects, coding challenges, and AI mentorship—designed to help users overcome coding fear and build confidence through practical experience.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["React", "Story book", "Chart.js", "Styled component"],
      liveUrl: "https://www.programiz.com/",
      imageUrl: programiz,
    },
  ];

  return (
    <section
      id="projects"
      className="bg-gray-100 dark:bg-gray-900 py-16 md:py-24 "
    >
      <div className="container mx-auto px-4 space-y-6 md:space-y-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white">
          My Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm overflow-hidden flex flex-col h-full hover:scale-110 transition duration-300 ease-in-out hover:z-10"
            >
              <div className="relative h-48">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                  {project.title}
                </h3>
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center rounded-md border border-gray-200 dark:border-gray-700 px-2.5 py-0.5 text-xs font-medium text-gray-800 dark:text-gray-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="p-6 flex-grow">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {project.description}
                </p>
              </div>
              <div className="px-6 pb-6 flex gap-4">
                <Link
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-9 items-center justify-center rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-3 py-1 text-sm font-medium text-gray-700 dark:text-gray-300 shadow-sm hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Live Project
                </Link>
                {/* <Link
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-9 items-center justify-center rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-3 py-1 text-sm font-medium text-gray-700 dark:text-gray-300 shadow-sm hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
                >
                  <Github className="h-4 w-4 mr-2" />
                  Code
                </Link> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
