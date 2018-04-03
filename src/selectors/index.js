import { createSelector } from 'reselect'

const getVisibilityFilter = (state) => state.visibilityFilter
const getTodos = (state) => state.todos

export const getVisibleTodos = createSelector(
  [ getVisibilityFilter, getTodos ],
  (filter, todos) => {
    switch (filter) {
        case '':
          return todos
        default:
          return todos.filter(todo => todo.text.includes(filter))
      }
  }
)