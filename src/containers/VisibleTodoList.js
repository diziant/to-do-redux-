import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { deleteTodo } from '../actions'
import TodoList from '../components/TodoList'
import { getVisibleTodos } from '../selectors'

const mapStateToProps = state => ({
    todos: getVisibleTodos(state)
  }
)

const mapDispatchToProps = dispatch => bindActionCreators({
  deleteTodo
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)