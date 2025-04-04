import Image from "next/image";
import Link from "next/link";

export default function AboutSection() {
  return (
    <section id="about" className="bg-gray-100 dark:bg-gray-900 py-16 md:py-24">
      <div className="container mx-auto px-4 space-y-6 md:space-y-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white">
          About Me
        </h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <Image
              src="/placeholder.svg?height=600&width=600"
              alt="Working on laptop"
              width={600}
              height={600}
              className="rounded-lg"
            />
          </div>
          <div className="space-y-4">
            <p className="text-lg text-gray-700 dark:text-gray-300">
              I'm a passionate React developer with 3 years of professional
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
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 items-center justify-center rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-950 px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 shadow-sm hover:bg-gray-50 dark:hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
              >
                Download Resume
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
