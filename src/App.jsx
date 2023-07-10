import { Routes, BrowserRouter, Route } from 'react-router-dom'
import { Header } from './components/Header'
import { TaskList } from './components/TasksList'
import { TaskForm } from './components/TaskForm'
import { Nav } from './components/Nav'

function App () {
  return (
    <div className='flex flex-col'>
      <BrowserRouter>
        <Header />
        <main className='grid grid-flow-col grid-cols-4 m-4'>
          <Nav />
          <Routes>
            <Route path='/' element={<TaskList />} />
            <Route path='/create-task' element={<TaskForm />} />
            <Route path='/edit-task/:id' element={<TaskForm />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  )
}

export default App
