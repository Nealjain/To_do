'use client'

import { useState } from 'react'
import { useAppDispatch } from '@/lib/hooks'
import { deleteTask } from '@/lib/slices/tasksSlice'
import { Task } from '@/lib/types'
import { getPriorityColor, getStatusColor, formatDate, formatDateTime } from '@/lib/utils'
import TaskForm from './TaskForm'
import { Edit, Trash2, Calendar, Clock } from 'lucide-react'
import toast from 'react-hot-toast'

interface TaskItemProps {
  task: Task
}

export default function TaskItem({ task }: TaskItemProps) {
  const dispatch = useAppDispatch()
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false)

  const handleDelete = () => {
    dispatch(deleteTask(task.id))
    toast.success('Task deleted successfully')
    setShowDeleteConfirm(false)
  }

  const isOverdue = task.dueDate && new Date(task.dueDate) < new Date() && task.status !== 'Completed'

  return (
    <div className="card p-4 hover:shadow-lg transition-all duration-300 animate-fadeInUp hover:-translate-y-1">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
        <div className="flex-1 min-w-0">
          <div className="flex flex-col sm:flex-row sm:items-start gap-3 mb-2">
            <h3 className={`text-lg font-semibold text-gray-900 dark:text-white flex-1 ${
              task.status === 'Completed' ? 'line-through text-gray-500' : ''
            }`}>
              {task.title}
            </h3>
            <div className="flex gap-2 flex-wrap">
              <span className={`px-2 py-1 text-xs font-medium rounded-full ${getPriorityColor(task.priority)}`}>
                {task.priority}
              </span>
              <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(task.status)}`}>
                {task.status}
              </span>
            </div>
          </div>

          {task.description && (
            <p className={`text-gray-600 dark:text-gray-400 mb-3 ${
              task.status === 'Completed' ? 'line-through' : ''
            }`}>
              {task.description}
            </p>
          )}

          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm text-gray-500 dark:text-gray-400">
            <div className="flex items-center gap-1">
              <Clock size={14} />
              <span className="text-xs sm:text-sm">Created: {formatDateTime(task.createdAt)}</span>
            </div>
            {task.dueDate && (
              <div className={`flex items-center gap-1 ${isOverdue ? 'text-red-600' : ''}`}>
                <Calendar size={14} />
                <span className="text-xs sm:text-sm">Due: {formatDate(task.dueDate)}</span>
                {isOverdue && <span className="text-xs font-medium animate-pulse">(Overdue)</span>}
              </div>
            )}
          </div>
        </div>

        <div className="flex items-center gap-3 flex-shrink-0">
          <TaskForm task={task} isEditing />
          
          <button
            onClick={() => setShowDeleteConfirm(true)}
            className="btn-icon text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 active:bg-red-100 dark:active:bg-red-900/30"
            title="Delete task"
            aria-label="Delete task"
          >
            <Trash2 size={18} className="sm:w-4 sm:h-4" />
          </button>
        </div>
      </div>

      {/* Delete Confirmation Modal */}
      {showDeleteConfirm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-md w-full p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Delete Task
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Are you sure you want to delete &quot;{task.title}&quot;? This action cannot be undone.
            </p>
            <div className="flex gap-3">
              <button
                onClick={handleDelete}
                className="btn-danger flex-1"
              >
                Delete
              </button>
              <button
                onClick={() => setShowDeleteConfirm(false)}
                className="btn-secondary flex-1"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
} 