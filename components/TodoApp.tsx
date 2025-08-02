'use client'

import { useEffect } from 'react'
import { useAppSelector, useAppDispatch } from '@/lib/hooks'
import { setDarkMode } from '@/lib/slices/tasksSlice'
import TaskForm from './TaskForm'
import TaskList from './TaskList'
import SearchBar from './SearchBar'
import FilterComponent from './FilterComponent'
import SortComponent from './SortComponent'
import DarkModeToggle from './DarkModeToggle'
import { Moon, Sun } from 'lucide-react'

export default function TodoApp() {
  const dispatch = useAppDispatch()
  const { tasks, filters, sort, darkMode } = useAppSelector(state => state.tasks)

  // Initialize dark mode from localStorage
  useEffect(() => {
    const savedDarkMode = localStorage.getItem('darkMode')
    if (savedDarkMode !== null) {
      dispatch(setDarkMode(JSON.parse(savedDarkMode)))
    } else {
      // Check system preference
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      dispatch(setDarkMode(prefersDark))
    }
  }, [dispatch])

  // Update document class and localStorage when dark mode changes
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    localStorage.setItem('darkMode', JSON.stringify(darkMode))
  }, [darkMode])

  return (
    <div className="max-w-6xl mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Todo List App
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            Manage your tasks efficiently
          </p>
        </div>
        <div className="flex items-center gap-4">
          <DarkModeToggle />
          <div className="text-sm text-gray-600 dark:text-gray-400">
            {tasks.length} task{tasks.length !== 1 ? 's' : ''}
          </div>
        </div>
      </div>

      {/* Add Task Form */}
      <div className="card p-6 mb-6">
        <TaskForm />
      </div>

      {/* Filters and Search */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-6">
        <div className="lg:col-span-2">
          <SearchBar />
        </div>
        <div className="flex gap-2">
          <FilterComponent />
          <SortComponent />
        </div>
      </div>

      {/* Task List */}
      <div className="card p-6">
        <TaskList />
      </div>
    </div>
  )
} 