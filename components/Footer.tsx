'use client'

import { Heart, Terminal, Sparkles } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const techStack = [
    { name: 'Next.js', color: 'bg-black text-white dark:bg-white dark:text-black' },
    { name: 'TypeScript', color: 'bg-blue-600 text-white' },
    { name: 'Tailwind', color: 'bg-cyan-500 text-white' }
  ]

  return (
    <footer className="mt-20 py-10 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-6xl mx-auto px-4">
        {/* Main footer section */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-6">
          <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
            <div className="p-2 bg-primary-100 dark:bg-primary-900 rounded-lg">
              <Terminal className="w-5 h-5 text-primary-600 dark:text-primary-400" />
            </div>
            <div>
              <p className="text-lg font-bold text-primary-600 dark:text-primary-400">
                by Neal Jain
              </p>
            </div>
          </div>

          {/* Technology stack */}
          <div className="flex items-center gap-3">
            <span className="text-xs text-gray-500 dark:text-gray-400 mr-2">Built with:</span>
            {techStack.map((tech, index) => (
              <span 
                key={index}
                className={`text-xs px-3 py-1 rounded-full font-medium transition-transform hover:scale-105 ${tech.color}`}
              >
                {tech.name}
              </span>
            ))}
          </div>
        </div>

        {/* Copyright section */}
        <div className="text-center pt-6 border-t border-gray-200 dark:border-gray-700">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            © {currentYear} Neal Jain • Turning ideas into digital experiences
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">
            Built for productivity enthusiasts everywhere 🚀
          </p>
        </div>
      </div>
    </footer>
  )
}
