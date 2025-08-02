import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { TasksState, Task, TaskFormData, FilterState, SortState } from '../types'

const initialState: TasksState = {
  tasks: [],
  filters: {
    status: 'All',
    priority: 'All',
    search: '',
  },
  sort: {
    field: 'createdAt',
    direction: 'desc',
  },
  darkMode: false,
}

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<TaskFormData>) => {
      const newTask: Task = {
        id: Date.now().toString(),
        ...action.payload,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      }
      state.tasks.push(newTask)
    },
    
    updateTask: (state, action: PayloadAction<{ id: string; updates: Partial<TaskFormData> }>) => {
      const { id, updates } = action.payload
      const taskIndex = state.tasks.findIndex(task => task.id === id)
      if (taskIndex !== -1) {
        state.tasks[taskIndex] = {
          ...state.tasks[taskIndex],
          ...updates,
          updatedAt: new Date().toISOString(),
        }
      }
    },
    
    deleteTask: (state, action: PayloadAction<string>) => {
      state.tasks = state.tasks.filter(task => task.id !== action.payload)
    },
    
    setStatusFilter: (state, action: PayloadAction<FilterState['status']>) => {
      state.filters.status = action.payload
    },
    
    setPriorityFilter: (state, action: PayloadAction<FilterState['priority']>) => {
      state.filters.priority = action.payload
    },
    
    setSearchFilter: (state, action: PayloadAction<string>) => {
      state.filters.search = action.payload
    },
    
    setSortField: (state, action: PayloadAction<SortState['field']>) => {
      state.sort.field = action.payload
    },
    
    setSortDirection: (state, action: PayloadAction<SortState['direction']>) => {
      state.sort.direction = action.payload
    },
    
    toggleDarkMode: (state) => {
      state.darkMode = !state.darkMode
    },
    
    setDarkMode: (state, action: PayloadAction<boolean>) => {
      state.darkMode = action.payload
    },
  },
})

export const {
  addTask,
  updateTask,
  deleteTask,
  setStatusFilter,
  setPriorityFilter,
  setSearchFilter,
  setSortField,
  setSortDirection,
  toggleDarkMode,
  setDarkMode,
} = tasksSlice.actions

export default tasksSlice.reducer 