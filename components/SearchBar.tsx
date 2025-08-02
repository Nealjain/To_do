'use client'

import { useAppDispatch, useAppSelector } from '@/lib/hooks'
import { setSearchFilter } from '@/lib/slices/tasksSlice'
import { Search } from 'lucide-react'

export default function SearchBar() {
  const dispatch = useAppDispatch()
  const searchValue = useAppSelector(state => state.tasks.filters.search)

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchFilter(e.target.value))
  }

  return (
    <div className="relative">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <Search size={20} className="text-gray-400" />
      </div>
      <input
        type="text"
        value={searchValue}
        onChange={handleSearchChange}
        className="input-field pl-10"
        placeholder="Search tasks by title or description..."
      />
    </div>
  )
} 