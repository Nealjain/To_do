'use client'

import { useAppDispatch, useAppSelector } from '@/lib/hooks'
import { setSortField, setSortDirection } from '@/lib/slices/tasksSlice'
import { ArrowUpDown, ArrowUp, ArrowDown } from 'lucide-react'

export default function SortComponent() {
  const dispatch = useAppDispatch()
  const { field, direction } = useAppSelector(state => state.tasks.sort)

  const handleSortChange = (newField: string) => {
    if (field === newField) {
      // Toggle direction if same field
      dispatch(setSortDirection(direction === 'asc' ? 'desc' : 'asc'))
    } else {
      // Set new field with default direction
      dispatch(setSortField(newField as any))
      dispatch(setSortDirection('desc'))
    }
  }

  const getSortIcon = (sortField: string) => {
    if (field !== sortField) {
      return <ArrowUpDown size={16} />
    }
    return direction === 'asc' ? <ArrowUp size={16} /> : <ArrowDown size={16} />
  }

  return (
    <div className="flex gap-1">
      <button
        onClick={() => handleSortChange('dueDate')}
        className={`p-2 rounded-lg transition-colors flex items-center gap-1 text-sm ${
          field === 'dueDate'
            ? 'bg-primary-100 text-primary-600 dark:bg-primary-900 dark:text-primary-300'
            : 'bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
        }`}
        title="Sort by due date"
      >
        {getSortIcon('dueDate')}
        Due Date
      </button>

      <button
        onClick={() => handleSortChange('priority')}
        className={`p-2 rounded-lg transition-colors flex items-center gap-1 text-sm ${
          field === 'priority'
            ? 'bg-primary-100 text-primary-600 dark:bg-primary-900 dark:text-primary-300'
            : 'bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
        }`}
        title="Sort by priority"
      >
        {getSortIcon('priority')}
        Priority
      </button>

      <button
        onClick={() => handleSortChange('createdAt')}
        className={`p-2 rounded-lg transition-colors flex items-center gap-1 text-sm ${
          field === 'createdAt'
            ? 'bg-primary-100 text-primary-600 dark:bg-primary-900 dark:text-primary-300'
            : 'bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
        }`}
        title="Sort by creation time"
      >
        {getSortIcon('createdAt')}
        Created
      </button>
    </div>
  )
} 