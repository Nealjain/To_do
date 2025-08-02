'use client'

import { useEffect, useState } from 'react'
import { Target, Zap, Sparkles } from 'lucide-react'

export default function Preloader() {
  const [isVisible, setIsVisible] = useState(true)
  const [loadingProgress, setLoadingProgress] = useState(0)
  const [currentMessage, setCurrentMessage] = useState(0)
  
  const loadingMessages = [
    'Loading workspace...',
    'Configuring environment...',
    'Setting up manager...',
    'Almost done!'
  ]

  useEffect(() => {
    const progressTimer = setInterval(() => {
      setLoadingProgress(prevProgress => {
        if (prevProgress >= 100) {
          clearInterval(progressTimer)
          setTimeout(() => setIsVisible(false), 600)
          return 100
        }
        const increment = Math.random() * 12 + 3
        return Math.min(prevProgress + increment, 100)
      })
    }, 180)

    // Rotate loading messages
    const messageTimer = setInterval(() => {
      setCurrentMessage(prev => (prev + 1) % loadingMessages.length)
    }, 800)

    return () => {
      clearInterval(progressTimer)
      clearInterval(messageTimer)
    }
  }, [loadingMessages.length])

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-primary-50 to-blue-100 dark:from-gray-900 dark:to-gray-800 z-50 flex items-center justify-center">
      <div className="text-center max-w-md mx-auto p-8">
        {/* Animated icons */}
        <div className="flex justify-center space-x-6 mb-10">
          <div className="animate-spin" style={{ animationDuration: '3s' }}>
            <Target className="w-10 h-10 text-primary-600 dark:text-primary-400" />
          </div>
          <div className="animate-bounce" style={{ animationDelay: '200ms' }}>
            <Zap className="w-10 h-10 text-yellow-500" />
          </div>
          <div className="animate-pulse" style={{ animationDelay: '400ms' }}>
            <Sparkles className="w-10 h-10 text-purple-500" />
          </div>
        </div>

        {/* App title */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-3 flex items-center justify-center gap-2">
            <Sparkles className="w-8 h-8 text-primary-600" />
            Task Manager
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-lg transition-all duration-500">
            {loadingMessages[currentMessage]}
          </p>
        </div>

        {/* Progress indicator */}
        <div className="w-80 mx-auto mb-6">
          <div className="bg-white dark:bg-gray-700 rounded-full h-3 shadow-inner mb-3">
            <div 
              className="bg-gradient-to-r from-primary-500 to-blue-600 h-3 rounded-full transition-all duration-500 ease-out shadow-sm"
              style={{ width: `${loadingProgress}%` }}
            />
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-500 dark:text-gray-400">Loading...</span>
            <span className="text-primary-600 dark:text-primary-400 font-semibold">
              {Math.round(loadingProgress)}%
            </span>
          </div>
        </div>

        {/* Loading animation */}
        <div className="flex justify-center space-x-1">
          {[0, 1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="w-1 h-8 bg-primary-600 rounded-full animate-pulse"
              style={{ 
                animationDelay: `${i * 200}ms`,
                animationDuration: '1s'
              }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
