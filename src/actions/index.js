//import * as types from '../constants/ActionTypes';
import { createAction } from 'redux-actions';
/*
let nextTodoId = 0

export const addTodo = text => ({
    type: types.ADD_TODO,
    payload: {
        id: nextTodoId++,
        text 
    }
})

export const setVisibilityFilter = filter => ({
    type: types.SET_VISIBILITY_FILTER,
    payload: {
        filter
    }
})

export const deleteTodo = id => ({
    type: types.DELETE_TODO,
    payload: {
        id 
    }
})
*/

export const addTodo = createAction('ADD_TODO');
export const deleteTodo = createAction('DELETE_TODO');
export const setVisibilityFilter  = createAction('SET_VISIBILITY_FILTER');