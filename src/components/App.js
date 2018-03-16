import React from 'react'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'

const App = () => (
  <div className="container">
    <h1 className="todo-title" >Задачи</h1>
    <AddTodo />
    <VisibleTodoList />
  </div>
)

export default App
