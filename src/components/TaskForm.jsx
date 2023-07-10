import { addTask, editTask } from '../features/tasks/taskSlice'
import { useId } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useTask } from '../hooks/useTask'

export function TaskForm () {
  const { dispatch, task, setTask, params } = useTask()

  const navigate = useNavigate()
  const titleId = useId()
  const descriptionId = useId()

  const handleChange = e => {
    setTask(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = e => {
    e.preventDefault()

    if (!params.id) {
      dispatch(addTask({
        ...task,
        id: crypto.randomUUID(),
        completed: false
      }))
    } else {
      dispatch(editTask(task))
    }

    navigate('/')
  }

  return (
    <section className='flex place-content-center h-full'>
      <form className='flex flex-col w-4/6 dark:bg-slate-900 bg-blue-500 p-6 rounded gap-4' onSubmit={handleSubmit}>
        <label
          htmlFor={titleId}
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Title
          <input
            className=" mt-[0.15rem] block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            type="text"
            name="title"
            id={titleId}
            placeholder="Task title"
            value={task.title}
            onChange={handleChange}
          />
        </label>
        <label
          htmlFor={descriptionId}
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Description
          <textarea
            className="mt-[0.15rem] block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 resize-none"
            name="description"
            id={descriptionId}
            rows="6"
            placeholder="Task description"
            value={task.description}
            onChange={handleChange}
          />
        </label>
        <div className='flex flex-row gap-5'>
          <button type="submit"
            className="w-full focus:outline-none text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-green-500 dark:hover:bg-green-600 dark:focus:ring-green-600 ease-in duration-100">
            {
              params.id
                ? 'Edit'
                : 'Create task'
            }
          </button>
          <Link
            className="text-center w-full focus:outline-none text-white bg-red-700 hover:bg-red-800 ease-in duration-100 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900" to='/'>Cancel</Link>
          </div>
      </form>
    </section>
  )
}
