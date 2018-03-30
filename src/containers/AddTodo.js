import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

const AddTodo = ({ addTodo }) => {
  let input

  return (
      <form className="todo-form" onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        addTodo({text: input.value})
        input.value = ''
      }}>
        <input className="todo-form__input" ref={node => input = node} placeholder="Добавьте задачу!!"/>
        <button className="todo-form__button" type="submit" >
          Запись
        </button>
      </form>
  )
}

const mapDispatchToProps = dispatch => bindActionCreators({
  addTodo
}, dispatch)

export default connect(
  null,
  mapDispatchToProps
)(AddTodo)