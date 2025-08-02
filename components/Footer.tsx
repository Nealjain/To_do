'use client'

import { Heart, Code } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="mt-16 py-8 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Main watermark */}
          <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
            <Code className="w-4 h-4" />
            <span className="text-sm">
              Made with{' '}
              <Heart className="w-4 h-4 inline text-red-500 animate-pulse" />{' '}
              by{' '}
              <span className="font-semibold text-primary-600 dark:text-primary-400">
                Neal Jain
              </span>
            </span>
          </div>

          {/* Tech stack */}
          <div className="flex items-center gap-4 text-xs text-gray-500 dark:text-gray-500">
            <span className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">
              Next.js
            </span>
            <span className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">
              TypeScript
            </span>
            <span className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">
              Tailwind CSS
            </span>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-800 text-center">
          <p className="text-xs text-gray-500 dark:text-gray-500">
            © {new Date().getFullYear()} Neal Jain. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
