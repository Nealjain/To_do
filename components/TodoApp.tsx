'use client'

import { useEffect, useState, useCallback } from 'react'
import { useAppSelector, useAppDispatch } from '@/lib/hooks'
import { setDarkMode } from '@/lib/slices/tasksSlice'
import TaskForm from './TaskForm'
import TaskList from './TaskList'
import SearchBar from './SearchBar'
import FilterComponent from './FilterComponent'
import SortComponent from './SortComponent'
import DarkModeToggle from './DarkModeToggle'
import Preloader from './Preloader'
import Footer from './Footer'
import { Sparkles } from 'lucide-react'

export default function TodoApp() {
  const taskDispatcher = useAppDispatch()
  const appState = useAppSelector(state => state.tasks)
  const [appInitializing, setAppInitializing] = useState(true)
  const initializeTheme = useCallback(() => {
    const storedTheme = localStorage.getItem('darkMode')
    if (storedTheme) {
      const parsedTheme = JSON.parse(storedTheme)
      taskDispatcher(setDarkMode(parsedTheme))
    } else {
      const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      taskDispatcher(setDarkMode(systemPrefersDark))
    }
  }, [taskDispatcher])

  useEffect(() => {
    initializeTheme()
  }, [initializeTheme])
  
  useEffect(() => {
    const htmlElement = document.documentElement
    if (appState.darkMode) {
      htmlElement.classList.add('dark')
    } else {
      htmlElement.classList.remove('dark')
    }
    localStorage.setItem('darkMode', JSON.stringify(appState.darkMode))
  }, [appState.darkMode])

  useEffect(() => {
    const loadingTimer = setTimeout(() => {
      setAppInitializing(false)
    }, 2200)

    return () => clearTimeout(loadingTimer)
  }, [])

  if (appInitializing) {
    return <Preloader />
  }

  const taskCount = appState.tasks.length
  const taskCountText = taskCount === 1 ? '1 task' : `${taskCount} tasks`
  
  return (
    <section className="max-w-6xl mx-auto animate-fadeInUp">
      <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
        <div className="space-y-1">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
            <Sparkles className="w-8 h-8 text-primary-600" />
            Task Manager
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Organize and manage your daily tasks
          </p>
        </div>
        <div className="flex items-center gap-4">
          <DarkModeToggle />
          <span className="text-sm text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full">
            {taskCountText}
          </span>
        </div>
      </header>

      {/* Task creation area */}
      <section className="card p-6 mb-6 border-l-4 border-primary-500">
        <TaskForm />
      </section>

      {/* Control panel for filtering and searching */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-6">
        <section className="lg:col-span-2">
          <SearchBar />
        </section>
        <aside className="flex gap-2">
          <FilterComponent />
          <SortComponent />
        </aside>
      </div>

      {/* Main task display area */}
      <main className="card p-6 min-h-[400px]">
        <TaskList />
      </main>
    </section>
  )
} 