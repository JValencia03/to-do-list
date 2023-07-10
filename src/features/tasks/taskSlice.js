import { createSlice } from '@reduxjs/toolkit'

const initialState = [
  {
    id: '1',
    title: 'First task',
    description: 'Lorem ipsum dolor sit amet consecte oijcoie jcvoiejv oievjoie rovcijoi vjeoivjevoiejvoivjijvoijvoifvjoidfvjdoifvjtur adipisicing elit. Mollitia placeat earum laborum dolorum itaque magnam libero incidunt, distinctio dignissimos dicta adipisci, voluptate est doloribus natus hic delectus quisquam consectetur enim?',
    completed: false
  },
  {
    id: '2',
    title: 'Second Task',
    description: 'My second task',
    completed: true
  }
]

const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.push(action.payload)
    },
    editTask: (state, action) => {
      const { id, title, description } = action.payload
      const task = state.find(task => task.id === id)
      if (task) {
        task.title = title
        task.description = description
      }
    },
    deleteTask: (state, action) => {
      const foundTask = state.find(task => task.id === action.payload)
      if (foundTask) {
        state.splice(state.indexOf(foundTask), 1)
      }
    }
  }
})

export const { addTask, deleteTask, editTask } = taskSlice.actions
export default taskSlice.reducer
