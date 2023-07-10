import { FilterIcon } from './Icons'

export function Nav () {
  return (
    <nav className='flex flex-col justify-start text-base bg-slate-200 dark:bg-slate-100 col-span-1 font-sans p-2 gap-1'>
      <div className='flex gap-2'>
        <FilterIcon />
        <span className="text-center font-semibold text-lg">Filters</span>
      </div>
      <div className='flex flex-col gap-1 ml-2 pl-4 border-l-2 border-gray-400'>
        <p className='nav-filters'>Completed</p>
        <p className='nav-filters'>Uncompleted</p>
      </div>
    </nav>
  )
}
