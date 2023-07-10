import { Link } from 'react-router-dom'
import { useTask } from '../hooks/useTask'

export function Header () {
  const { tasks } = useTask()

  return (
    <header className='flex flex-col place-content-center col-span-3'>
      <Link to='/' className='h-fit focus:outline-none focus:ring-2 focus:ring-blue-500 focus:rounded flex flex-col mx-auto mt-8 mb-4 text-center text-slate-700 dark:text-slate-50 tracking-widest font-bold text-5xl'>TO-DO
        <span className='text-blue-500 dark:text-yellow-400'>LIST</span>
      </Link>
      <span className='text-center font-mono tracking-widest dark:text-slate-100'>You have {tasks.length} active Tasks</span>
    </header>
  )
}
