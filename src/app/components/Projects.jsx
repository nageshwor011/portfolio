import Image from "next/image";
import Link from "next/link";
import { Github, Linkedin, Mail, ExternalLink, Menu, X } from "lucide-react";
export default function Projects() {
  const projects = [
    {
      title: "E-commerce Platform",
      description:
        "A full-featured e-commerce site built with React, Next.js, and a headless CMS. Includes product filtering, cart functionality, and payment integration.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["React", "Next.js", "Tailwind CSS", "Stripe"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Task Management App",
      description:
        "A drag-and-drop task management application with user authentication, task categories, and deadline notifications.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["React", "Firebase", "Redux", "Styled Components"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Weather Dashboard",
      description:
        "A weather application that displays current conditions and forecasts based on location. Features include saved locations and interactive maps.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["React", "OpenWeather API", "Chart.js", "Geolocation API"],
      liveUrl: "#",
      githubUrl: "#",
    },
  ];

  return (
    <section
      id="projects"
      className="bg-gray-100 dark:bg-gray-900 py-16 md:py-24"
    >
      <div className="container mx-auto px-4 space-y-6 md:space-y-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white">
          My Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm overflow-hidden flex flex-col h-full"
            >
              <div className="relative h-48">
                <Image
                  src={project.image || "/placeholder.svg"}
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
                  Live Demo
                </Link>
                <Link
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-9 items-center justify-center rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-3 py-1 text-sm font-medium text-gray-700 dark:text-gray-300 shadow-sm hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
                >
                  <Github className="h-4 w-4 mr-2" />
                  Code
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
