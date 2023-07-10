import { Link } from 'react-router-dom'

export function BackgroundButton ({ color, text }) {
  return (
      <Link to='/create-task' className={`focus:outline-none focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 ${color}`}
      >{text}</Link>
  )
}

export function EditAndDeleteTaskButtons ({ task, ...props }) {
  return (
    <div className='flex flex-row justify-between'>
      <Link to={`/edit-task/${task.id}`} className='text-green-600 hover:text-white border border-green-600 hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800'>Edit task</Link>
      <button className='text-red-600 hover:text-white border border-red-600 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2 text-center mr-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900' {...props}>Delete task</button>
    </div>
  )
}
