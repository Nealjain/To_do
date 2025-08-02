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
      className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
      title={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {darkMode ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  )
} 