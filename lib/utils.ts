import { Task, FilterState, SortState } from './types'

export const filterAndSortTasks = (
  tasks: Task[],
  filters: FilterState,
  sort: SortState
): Task[] => {
  let filteredTasks = tasks.filter(task => {
    // Status filter
    if (filters.status !== 'All' && task.status !== filters.status) {
      return false
    }
    
    // Priority filter
    if (filters.priority !== 'All' && task.priority !== filters.priority) {
      return false
    }
    
    // Search filter
    if (filters.search) {
      const searchLower = filters.search.toLowerCase()
      const titleMatch = task.title.toLowerCase().includes(searchLower)
      const descriptionMatch = task.description?.toLowerCase().includes(searchLower) || false
      if (!titleMatch && !descriptionMatch) {
        return false
      }
    }
    
    return true
  })
  
  // Sort tasks
  filteredTasks.sort((a, b) => {
    let aValue: any
    let bValue: any
    
    switch (sort.field) {
      case 'dueDate':
        aValue = a.dueDate ? new Date(a.dueDate).getTime() : 0
        bValue = b.dueDate ? new Date(b.dueDate).getTime() : 0
        break
      case 'priority':
        const priorityOrder = { 'High': 3, 'Medium': 2, 'Low': 1 }
        aValue = priorityOrder[a.priority as keyof typeof priorityOrder]
        bValue = priorityOrder[b.priority as keyof typeof priorityOrder]
        break
      case 'createdAt':
      default:
        aValue = new Date(a.createdAt).getTime()
        bValue = new Date(b.createdAt).getTime()
        break
    }
    
    if (sort.direction === 'asc') {
      return aValue - bValue
    } else {
      return bValue - aValue
    }
  })
  
  return filteredTasks
}

export const getPriorityColor = (priority: string): string => {
  switch (priority) {
    case 'High':
      return 'text-red-600 bg-red-100 dark:bg-red-900 dark:text-red-300'
    case 'Medium':
      return 'text-yellow-600 bg-yellow-100 dark:bg-yellow-900 dark:text-yellow-300'
    case 'Low':
      return 'text-green-600 bg-green-100 dark:bg-green-900 dark:text-green-300'
    default:
      return 'text-gray-600 bg-gray-100 dark:bg-gray-700 dark:text-gray-300'
  }
}

export const getStatusColor = (status: string): string => {
  switch (status) {
    case 'Completed':
      return 'text-green-600 bg-green-100 dark:bg-green-900 dark:text-green-300'
    case 'In Progress':
      return 'text-blue-600 bg-blue-100 dark:bg-blue-900 dark:text-blue-300'
    case 'Pending':
      return 'text-gray-600 bg-gray-100 dark:bg-gray-700 dark:text-gray-300'
    default:
      return 'text-gray-600 bg-gray-100 dark:bg-gray-700 dark:text-gray-300'
  }
}

export const formatDate = (dateString: string): string => {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })
}

export const formatDateTime = (dateString: string): string => {
  const date = new Date(dateString)
  return date.toLocaleString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  })
}

export const groupTasksByStatus = (tasks: Task[]) => {
  const groups = {
    'Pending': [] as Task[],
    'In Progress': [] as Task[],
    'Completed': [] as Task[],
  }
  
  tasks.forEach(task => {
    groups[task.status as keyof typeof groups].push(task)
  })
  
  return groups
} 