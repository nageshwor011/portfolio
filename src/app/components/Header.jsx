"use client";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
function Header({ aboutRef, contactRef, skillsRef, projectRef }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-gray-200 dark:border-gray-800 bg-white/95 dark:bg-gray-950/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-gray-950/60">
      <div className="container mx-auto px-4 flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link
            href="/"
            className="font-bold text-xl text-gray-900 dark:text-white"
          >
            Web Dev
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>

        {/* Desktop navigation */}
        <nav className="hidden md:flex gap-6">
          <button
            onClick={() => {
              aboutRef.current?.scrollIntoView({ behavior: "smooth" });
            }}
            className="text-sm font-medium cursor-pointer text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
          >
            About
          </button>
          <button
            onClick={() => {
              skillsRef.current?.scrollIntoView({ behavior: "smooth" });
            }}
            className="text-sm  cursor-pointer font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
          >
            Skills
          </button>
          <button
            onClick={() => {
              projectRef.current?.scrollIntoView({ behavior: "smooth" });
            }}
            className="text-sm cursor-pointer font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
          >
            Projects
          </button>
          <button
            onClick={() => {
              contactRef.current?.scrollIntoView({ behavior: "smooth" });
            }}
            className="text-sm cursor-pointer font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
          >
            Contact
          </button>
        </nav>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <div className="absolute top-16 left-0 right-0 bg-white dark:bg-gray-950 border-b border-gray-200 dark:border-gray-800 md:hidden">
            <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
              <button
                className="text-sm cursor-pointer font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                onClick={() => {
                  setIsMenuOpen(false);
                  aboutRef.current?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                About
              </button>
              <button
                className="text-sm cursor-pointer font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                onClick={() => {
                  setIsMenuOpen(false);
                  skillsRef.current?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Skills
              </button>
              <button
                className="text-sm cursor-pointer font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                onClick={() => {
                  setIsMenuOpen(false);
                  projectRef.current?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Projects
              </button>
              <button
                className="text-sm cursor-pointer font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                onClick={() => {
                  setIsMenuOpen(false);
                  contactRef.current?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
export default Header;
