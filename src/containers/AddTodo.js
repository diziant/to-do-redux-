import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

const AddTodo = ({ dispatch }) => {
  let input

  return (
      <form className="todo-form" onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(addTodo(input.value))
        input.value = ''
      }}>
        <input className="todo-form__input" ref={node => input = node} placeholder="Добавьте задачу!!"/>
        <button className="todo-form__button" type="submit" >
          Add Todo
        </button>
      </form>
  )
}

export default connect()(AddTodo)