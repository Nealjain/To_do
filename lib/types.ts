export interface Task {
  id: string
  title: string
  description?: string
  dueDate?: string
  priority: 'Low' | 'Medium' | 'High'
  status: 'Pending' | 'In Progress' | 'Completed'
  createdAt: string
  updatedAt: string
}

export interface TaskFormData {
  title: string
  description?: string
  dueDate?: string
  priority: 'Low' | 'Medium' | 'High'
  status: 'Pending' | 'In Progress' | 'Completed'
}

export interface FilterState {
  status: 'All' | 'Pending' | 'In Progress' | 'Completed'
  priority: 'All' | 'High' | 'Medium' | 'Low'
  search: string
}

export interface SortState {
  field: 'dueDate' | 'priority' | 'createdAt'
  direction: 'asc' | 'desc'
}

export interface TasksState {
  tasks: Task[]
  filters: FilterState
  sort: SortState
  darkMode: boolean
} 