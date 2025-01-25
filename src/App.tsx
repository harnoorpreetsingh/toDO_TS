
import { useState } from 'react'
import './App.css'
import AddToDo from './components/AddToDo'
import TodoList from './components/TodoList'
import { ToDo } from './types/todo'

function App() {
  // const todos =[{id:1, work:"buy milk"}]
  const [data, setData] = useState<ToDo[]>([])
  const addToDoHandler=(text:string)=>{
    const id = Math.random().toString()
    setData([...data, {id, work:text}])
  }

  const removeToDo =(todoId:string)=>{
    const newToDo = data.filter((data: Todo)=>{
      return data.id !== todoId
    })
    setData(newToDo)
  }
  return (
    <>
    <AddToDo addToDo={addToDoHandler} />
    <TodoList items={data} removeTodo={removeToDo} />
    </>
  )
}

export default App
