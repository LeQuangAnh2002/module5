import {SET_TOD0_INPUT,ADD_TODO_INPUT} from './constants'

const initialState = {
    todos:[],
    todoInput:''
}

function reducer(state,action) {
    switch (action.type) {
        case SET_TOD0_INPUT:
        return{
            ...state,
            todoInput:action.payload
        }
        case ADD_TODO_INPUT:
            return{
               ...state,
                todos:[...state.todos,action.payload],
                todoInput:''
            }
        default:
             throw new Error('Invalid action')
    }
}
export {initialState}
export default reducer;