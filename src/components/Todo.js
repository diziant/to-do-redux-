import React from 'react'

const Todo = ({ onClick, text }) => (
  <li className="todo-list__item" onClick={onClick} >
    {text}
  </li>
)

export default Todo