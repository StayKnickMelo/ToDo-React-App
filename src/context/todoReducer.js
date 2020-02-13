import {

  ADD_TODO,
  DELETE_TODO,
  SUBMIT_TODO,
  TODO_COMPLETED,
  SET_ALERT,
  REMOVE_ALERT

} from './types';


const reducer =(state, action)=> {
  switch(action.type){
    case ADD_TODO:
      return {
        ...state,
        todo: {...state.todo, text:action.payload }
      }
    case SUBMIT_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
        todo: {text: ''}
      }
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter(todo=>{
          return todo.text !== action.payload
          
        })
      }
    case TODO_COMPLETED:
      return {
        ...state,
        todos: state.todos.filter(todo=> {
          if(todo.text === action.payload){
            todo.completed = true
          }
          return true
        })
      }
    case SET_ALERT:
      return {
        ...state,
        alert: action.payload
      }
    case REMOVE_ALERT:
      return {
        ...state,
        alert: null
      }
    default:
      return state
  }

}

export default reducer;