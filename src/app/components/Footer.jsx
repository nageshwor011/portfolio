import Link from "next/link";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full px-4 sm:py-12  mt-[390px] sm:mt-[250px] md:mt-7 ">
      <div className="container pb-8 mx-auto px-4 gap-x-6 md:px-6 bg-gray-100 dark:bg-gray-900">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 pt-3 md:gap-10 ">
          {/* About Column */}
          <div className="space-y-4 ">
            <h3 className="text-base font-semibold text-gray-900">Nageshwor</h3>
            <p className="text-sm text-gray-600 leading-relaxed max-w-xs">
              Front-end Developer specialize in React focused on creating
              responsive, user-friendly interfaces with emphasis on performance
              and accessibility.
            </p>

            {/* Social Links */}
            <div className="flex space-x-5 pt-2">
              <Link
                href="https://github.com/nageshwor011"
                className="text-gray-500 hover:text-blue-600 transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/nageshwor-shah-9a21b21b1/"
                className="text-gray-500 hover:text-blue-600 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link
                href="https://twitter.com"
                className="text-gray-500 hover:text-blue-600 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </Link>
              <Link
                href="mailto:nageshwor011@gmail.com"
                className="text-gray-500 hover:text-blue-600 transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-base font-semibold text-gray-900">
              Quick Links
            </h3>
            <nav className="flex flex-col space-y-2">
              <Link
                href={"/#about"}
                className="text-sm cursor-pointer text-gray-600 hover:text-blue-600 transition-colors"
              >
                About
              </Link>
              <Link
                href={"/#projects"}
                className="text-sm cursor-pointer text-gray-600 hover:text-blue-600 transition-colors"
              >
                Projects
              </Link>
              <Link
                href={"/#skills"}
                className="text-sm cursor-pointer text-gray-600 hover:text-blue-600 transition-colors"
              >
                Skill
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-base font-semibold text-gray-900">
              Get In Touch
            </h3>
            <div className="space-y-3">
              <Link
                href="mailto:nageshwor011@gmail.com"
                className="text-sm text-gray-600 hover:text-blue-600 flex items-center gap-2 transition-colors"
              >
                <Mail className="h-4 w-4 text-gray-500 flex-shrink-0" />
                <span className="truncate">nageshwor011@gmail.com</span>
              </Link>
              <Link
                href="https://www.linkedin.com/in/nageshwor-shah-9a21b21b1"
                className="text-sm text-gray-600 hover:text-blue-600 flex items-center gap-2 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-4 w-4 text-gray-500 flex-shrink-0" />
                <span className="truncate">linkedin.com/in/nageshwor</span>
              </Link>
              <Link
                href="https://github.com/nageshwor011"
                className="text-sm text-gray-600 hover:text-blue-600 flex items-center gap-2 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-4 w-4 text-gray-500 flex-shrink-0" />
                <span className="truncate">github.com/nageshwor011</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Divider and Copyright */}
        <div className="border-t border-gray-100 mt-8 pt-6 sm:mt-10">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-sm text-gray-500 text-center sm:text-left">
              © {currentYear} Nageshwor. All rights reserved.
            </p>
            <div className="mt-4 sm:mt-0">
              <ul className="flex space-x-6">
                <li>
                  <Link
                    href="/privacy"
                    className="text-sm text-gray-500 hover:text-blue-600 transition-colors"
                  >
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms"
                    className="text-sm text-gray-500 hover:text-blue-600 transition-colors"
                  >
                    Terms
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
