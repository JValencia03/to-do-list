import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

export function useTask () {
  const [task, setTask] = useState({
    title: '',
    description: ''
  })

  const params = useParams()
  const tasks = useSelector(state => state.tasks)
  const dispatch = useDispatch()

  useEffect(() => {
    if (params.id) {
      setTask(tasks.find(task => task.id === params.id))
    }
  }, [params, tasks])

  return { dispatch, task, setTask, params, tasks }
}
