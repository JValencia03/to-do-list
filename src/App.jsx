import { Routes, BrowserRouter, Route } from 'react-router-dom'
import { Header } from './components/Header'
import { TaskList } from './components/TasksList'
import { TaskForm } from './components/TaskForm'

function App () {
  return (
    <div className='flex flex-col'>
      <BrowserRouter>
        <Header />
          <Routes>
            <Route path='/' element={<TaskList />} />
            <Route path='/create-task' element={<TaskForm />} />
            <Route path='/edit-task/:id' element={<TaskForm />} />
          </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
