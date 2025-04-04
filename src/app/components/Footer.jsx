import Link from "next/link";
import { Github, Linkedin, Mail, ExternalLink, Menu, X } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 py-6 md:py-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-center md:text-left">
          <p className="text-xs text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} Shah Dev. All rights reserved.
          </p>
        </div>
        <div className="flex gap-4">
          <Link
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            href="https://github.com/nageshwor011"
          >
            <Github className="h-5 w-5 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/nageshwor-shah-9a21b21b1/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-5 w-5 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors" />
          </Link>
          <Link href="mailto:nageshwor011@gmail.com" aria-label="Email">
            <Mail className="h-5 w-5 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
