import { deleteTask } from '../features/tasks/taskSlice'
import { useTask } from '../hooks/useTask'
import { useId } from 'react'
import { BackgroundButton, EditAndDeleteTaskButtons } from './Buttons'

export function TaskList () {
  const { dispatch, tasks: taskState } = useTask()
  const completedOnChange = useId()

  const handleDelete = id => {
    dispatch(deleteTask(id))
  }

  return (
    <section className='w-11/12 col-span-3 bg-slate-100'>
      <div className='flex justify-between border-b-2 p-3'>
        <BackgroundButton text='Delete completed tasks' />
        <BackgroundButton text='New task' color='bg-yellow-400 hover:bg-yellow-500 focus:ring-yellow-300 dark:focus:ring-yellow-900 text-black' />
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
              <EditAndDeleteTaskButtons onClick={() => handleDelete(task.id)} task={task} />
            </li>
          ))
        }
      </ul>
    </section>
  )
}
