import React from 'react'
import Todo from './Todo'

const TodoList = ({ todos, deleteTodo }) => {
  return (
    <ul className="todo-list">
      {todos.map(todo => (
        <Todo
        key={todo.id}
        {...todo}
        onClick={() => deleteTodo({id: todo.id})}
      />
      ))}
    </ul>
  )
} 

export default TodoList