"use client";

import { useState } from "react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="text-2xl font-bold text-kuli-dark">
              Kuli
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-gray-700 hover:text-kuli-orange transition">
              Services
            </a>
            <a href="#why-us" className="text-gray-700 hover:text-kuli-orange transition">
              Why Us
            </a>
            <a href="#process" className="text-gray-700 hover:text-kuli-orange transition">
              Process
            </a>
            <a
              href="#contact"
              className="bg-kuli-orange text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition"
            >
              Get in Touch
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <a
                href="#services"
                className="text-gray-700 hover:text-kuli-orange transition px-2 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </a>
              <a
                href="#why-us"
                className="text-gray-700 hover:text-kuli-orange transition px-2 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Why Us
              </a>
              <a
                href="#process"
                className="text-gray-700 hover:text-kuli-orange transition px-2 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Process
              </a>
              <a
                href="#contact"
                className="bg-kuli-orange text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Get in Touch
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
