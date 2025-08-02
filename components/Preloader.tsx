'use client'

import { useEffect, useState } from 'react'
import { CheckCircle, Clock, List } from 'lucide-react'

export default function Preloader() {
  const [isVisible, setIsVisible] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(() => setIsVisible(false), 500)
          return 100
        }
        return prev + Math.random() * 15
      })
    }, 150)

    return () => clearInterval(interval)
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 bg-white dark:bg-gray-900 z-50 flex items-center justify-center">
      <div className="text-center">
        {/* Animated Todo Icons */}
        <div className="flex justify-center space-x-4 mb-8">
          <div className="animate-bounce" style={{ animationDelay: '0ms' }}>
            <List className="w-8 h-8 text-primary-600 dark:text-primary-400" />
          </div>
          <div className="animate-bounce" style={{ animationDelay: '150ms' }}>
            <Clock className="w-8 h-8 text-primary-600 dark:text-primary-400" />
          </div>
          <div className="animate-bounce" style={{ animationDelay: '300ms' }}>
            <CheckCircle className="w-8 h-8 text-primary-600 dark:text-primary-400" />
          </div>
        </div>

        {/* App Title */}
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          Todo List App
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          Loading your tasks...
        </p>

        {/* Progress Bar */}
        <div className="w-64 mx-auto">
          <div className="bg-gray-200 dark:bg-gray-700 rounded-full h-2 mb-4">
            <div 
              className="bg-primary-600 h-2 rounded-full transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {Math.round(progress)}%
          </p>
        </div>

        {/* Pulsing Dots */}
        <div className="flex justify-center space-x-2 mt-8">
          <div className="w-2 h-2 bg-primary-600 rounded-full animate-pulse" style={{ animationDelay: '0ms' }}></div>
          <div className="w-2 h-2 bg-primary-600 rounded-full animate-pulse" style={{ animationDelay: '150ms' }}></div>
          <div className="w-2 h-2 bg-primary-600 rounded-full animate-pulse" style={{ animationDelay: '300ms' }}></div>
        </div>
      </div>
    </div>
  )
}
