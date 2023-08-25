import { FilterIcon } from './Icons'

export function AsideFilters () {
  const handleClick = e => {
    return console.log(e.target.className)
  }

  return (
    <aside className='flex flex-col justify-start w-48 text-base bg-slate-200 col-span-1 font-sans p-2 gap-1'>
      <div className='flex gap-2'>
        <FilterIcon />
        <span className="text-center text-slate-800 font-semibold text-lg">Filters</span>
      </div>
      <div className='flex flex-col gap-1 ml-2 pl-4 border-l-2 border-gray-400'>
        <button className='nav-filters' onClick={handleClick}>Completed</button>
        <button className='nav-filters' onClick={handleClick}>Uncompleted</button>
      </div>
    </aside>
  )
}
