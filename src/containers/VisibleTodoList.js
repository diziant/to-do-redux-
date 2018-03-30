import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { deleteTodo } from '../actions'
import TodoList from '../components/TodoList'

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case '':
      return todos
    default:
      return todos.filter(todo => todo.name.includes(filter))
  }
}

const mapStateToProps = state => ({
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
  }
)

const mapDispatchToProps = dispatch => bindActionCreators({
  deleteTodo
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)