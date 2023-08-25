import { deleteTask } from '../features/tasks/taskSlice'
import { useTask } from '../hooks/useTask'
import { useId } from 'react'
import { BackgroundButton } from './Buttons'
import { Link } from 'react-router-dom'
import { AsideFilters } from './AsideFilters'

export function TaskList () {
  const { dispatch, tasks: taskState } = useTask()
  const completedOnChange = useId()

  const handleDelete = id => {
    dispatch(deleteTask(id))
  }

  return (
    <main className='flex flex-row m-4 rounded'>
      <AsideFilters />
      <section className='w-11/12 col-span-3 bg-slate-100'>
        <div className='flex justify-between border-b-2 p-3'>
          <BackgroundButton text='Delete completed tasks' color='bg-blue-700 hover:bg-blue-800 focus:ring-blue-300 ' />
          <BackgroundButton to='/create-task' text='New task' color='bg-yellow-500 hover:bg-yellow-500 focus:ring-yellow-300 text-black' />
        </div>
        <ul className='p-3 flex flex-col divide-y-2 gap-2'>
          {
            taskState.map(task => (
              <li key={task.id}>
                <span className='text-blue-500 text-xl'>{task.title}</span>
                <p className='font-light'>{task.description}</p>
                <label htmlFor={completedOnChange} className='flex gap-2 my-2'>Completed
                  <input type="checkbox"
                  defaultChecked={task.completed}
                  id={completedOnChange} />
                </label>
                <div className='flex flex-row justify-between'>
                  <Link to={`/edit-task/${task.id}`} className='text-green-600 hover:text-white border-green-600 hover:bg-green-600 focus:ring-green-300 edit-delete-buttons'>Edit task</Link>
                  <button onClick={() => handleDelete(task.id)} className='text-red-600 hover:text-white border-red-600 hover:bg-red-600 focus:ring-red-300 edit-delete-buttons'>Delete task</button>
                </div>
              </li>
            ))
          }
        </ul>
      </section>
    </main>
  )
}
