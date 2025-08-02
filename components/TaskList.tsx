'use client'

import { useState } from 'react'
import { useAppSelector } from '@/lib/hooks'
import { filterAndSortTasks, groupTasksByStatus } from '@/lib/utils'
import TaskItem from './TaskItem'
import { List, Grid3X3 } from 'lucide-react'

export default function TaskList() {
  const { tasks, filters, sort } = useAppSelector(state => state.tasks)
  const [groupByStatus, setGroupByStatus] = useState(false)
  
  const filteredTasks = filterAndSortTasks(tasks, filters, sort)
  const groupedTasks = groupByStatus ? groupTasksByStatus(filteredTasks) : null

  if (tasks.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-gray-400 dark:text-gray-500 mb-4">
          <List size={48} className="mx-auto" />
        </div>
        <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
          No tasks yet
        </h3>
        <p className="text-gray-600 dark:text-gray-400">
          Add your first task to get started!
        </p>
      </div>
    )
  }

  if (filteredTasks.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-gray-400 dark:text-gray-500 mb-4">
          <List size={48} className="mx-auto" />
        </div>
        <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
          No tasks found
        </h3>
        <p className="text-gray-600 dark:text-gray-400">
          Try adjusting your filters or search terms.
        </p>
      </div>
    )
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
          Tasks ({filteredTasks.length})
        </h2>
        
        <div className="flex items-center gap-1 bg-gray-100 dark:bg-gray-700 rounded-lg p-1">
          <button
            onClick={() => setGroupByStatus(false)}
            className={`btn-icon transition-all duration-200 ${
              !groupByStatus
                ? 'bg-primary-500 text-white shadow-md'
                : 'text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
            }`}
            title="List view"
            aria-label="List view"
          >
            <List size={18} className="sm:w-4 sm:h-4" />
          </button>
          <button
            onClick={() => setGroupByStatus(true)}
            className={`btn-icon transition-all duration-200 ${
              groupByStatus
                ? 'bg-primary-500 text-white shadow-md'
                : 'text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
            }`}
            title="Group by status"
            aria-label="Group by status"
          >
            <Grid3X3 size={18} className="sm:w-4 sm:h-4" />
          </button>
        </div>
      </div>

      {groupByStatus ? (
        <div className="space-y-6">
          {Object.entries(groupedTasks!).map(([status, statusTasks]) => (
            statusTasks.length > 0 && (
              <div key={status} className="space-y-3">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2">
                  {status} ({statusTasks.length})
                </h3>
                <div className="space-y-3">
                  {statusTasks.map(task => (
                    <TaskItem key={task.id} task={task} />
                  ))}
                </div>
              </div>
            )
          ))}
        </div>
      ) : (
        <div className="space-y-3">
          {filteredTasks.map(task => (
            <TaskItem key={task.id} task={task} />
          ))}
        </div>
      )}
    </div>
  )
} 