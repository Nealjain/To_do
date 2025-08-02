'use client'

import { useAppDispatch, useAppSelector } from '@/lib/hooks'
import { setStatusFilter, setPriorityFilter } from '@/lib/slices/tasksSlice'
import { Filter } from 'lucide-react'

export default function FilterComponent() {
  const dispatch = useAppDispatch()
  const { status, priority } = useAppSelector(state => state.tasks.filters)

  return (
    <div className="flex gap-2">
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Filter size={16} className="text-gray-400" />
        </div>
        <select
          value={status}
          onChange={(e) => dispatch(setStatusFilter(e.target.value as any))}
          className="input-field pl-10 pr-8"
        >
          <option value="All">All Status</option>
          <option value="Pending">Pending</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
        </select>
      </div>

      <select
        value={priority}
        onChange={(e) => dispatch(setPriorityFilter(e.target.value as any))}
        className="input-field"
      >
        <option value="All">All Priority</option>
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>
    </div>
  )
} 