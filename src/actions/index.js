import * as types from '../constants/ActionTypes';

let nextTodoId = 0

export const addTodo = text => ({
    type: types.ADD_TODO,
    id: nextTodoId++,
    text
})

export const setVisibilityFilter = filter => ({
    type: types.SET_VISIBILITY_FILTER,
    filter
})

export const deleteTodo = id => ({
    type: types.DELETE_TODO,
    id 
})
