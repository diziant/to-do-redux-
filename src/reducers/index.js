import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
//import * as types from '../constants/ActionTypes';
import * as actions from '../actions';

/*
function todos(state = [], action) {
  switch (action.type) {
    case types.ADD_TODO:
      return [
        ...state,
        {
          id: action.payload.id,
          text: action.payload.text,
          completed: false
        }
      ]
    case types.DELETE_TODO:
      return state.filter(item => item.id !== action.payload.id)
    default:
      return state
  }
}

function visibilityFilter(state = '', action) {
  switch (action.type) {
    case types.SET_VISIBILITY_FILTER:
      return Object.assign({}, state, {
        visibilityFilter: action.payload.filter
      })
    default:
      return state
  }
}
*/

const initialTodos = []

const initialFilter = ''

let nextTodoId = 0

const todos = handleActions({
  [actions.addTodo](state = [], { payload: { text } }) {
    if (state === []) {
      nextTodoId = 0
    }
    else {
      state.map(item => {
        if (nextTodoId < item.id) 
          nextTodoId = item.id
          return (
            nextTodoId
          )
      })
      nextTodoId++
    }
    
    return [
      ...state,      
        {
          id: nextTodoId,
          text: text
        }
    ]
  },
  [actions.deleteTodo](state = [], { payload: { id } }) { 
    return state.filter(item => item.id !== id )
  }
}, initialTodos);

const visibilityFilter = handleActions({
  [actions.setVisibilityFilter](state = '', { payload: { filter }} ) { 
    return Object.assign({}, state, {
      visibilityFilter: { payload: { filter }}
    })
  }
}, initialFilter);

const todoApp = combineReducers({
  visibilityFilter,
  todos
})

export default todoApp