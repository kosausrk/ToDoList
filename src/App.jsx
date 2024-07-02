import React from 'react'
import { useState } from 'react'
import ToDoList from './Todolist'



function App() {
  const [count,increment] = useState(0)
  const updateCounter = () =>{
    increment(val => val += 1)
  }

  return (
    <>
    <h1>Counter</h1> 
    <button onClick={updateCounter}>Count is: {count}</button>
    </>
  )
}

export default App
