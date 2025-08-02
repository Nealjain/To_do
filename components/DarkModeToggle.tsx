'use client'

import { useAppDispatch, useAppSelector } from '@/lib/hooks'
import { toggleDarkMode } from '@/lib/slices/tasksSlice'
import { Moon, Sun } from 'lucide-react'

export default function DarkModeToggle() {
  const dispatch = useAppDispatch()
  const darkMode = useAppSelector(state => state.tasks.darkMode)

  return (
    <button
      onClick={() => dispatch(toggleDarkMode())}
      className="btn-icon bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 active:bg-gray-300 dark:active:bg-gray-500 relative overflow-hidden"
      title={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
      aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <div className="relative">
        <Sun 
          size={20} 
          className={`transition-all duration-300 ${darkMode ? 'rotate-90 scale-0' : 'rotate-0 scale-100'} absolute inset-0`} 
        />
        <Moon 
          size={20} 
          className={`transition-all duration-300 ${darkMode ? 'rotate-0 scale-100' : '-rotate-90 scale-0'}`} 
        />
      </div>
    </button>
  )
} 