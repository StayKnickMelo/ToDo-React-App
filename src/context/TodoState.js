import React, { useReducer } from 'react';

import TodoContext from './todoContext';

import TodoReducer from './todoReducer';


import {
  ADD_TODO,
  SUBMIT_TODO,
  DELETE_TODO,
  TODO_COMPLETED,
  SET_ALERT,
  REMOVE_ALERT

} from './types'


const TodoState = (props) => {

  let todosList;

  localStorage.getItem('todos') ? todosList = JSON.parse(localStorage.getItem('todos')) : todosList = [];
  

  const initialState = {
    // todos: JSON.parse(localStorage.getItem('todos')),
    todos: todosList,
    todo: {
      text: '',
      completed: false
    },
    alert: null
  }

  const [state, dispatch] = useReducer(TodoReducer, initialState);

  const addTodo = (e) => {
    dispatch({
      type: ADD_TODO,
      payload: e.target.value
    })

  }

  const submitTodo = (e) => {
    e.preventDefault();

    if (state.todo.text === '') {


      dispatch({
        type: SET_ALERT,
        payload: {msg: 'Please Add ToDo',type: 'danger'}
      })

      // delete alert

      setTimeout(() => {
        const alert = document.querySelector('.alert');

        setTimeout(() => {
          alert.classList.add('removed');

          setTimeout(() => {
            dispatch({
              type: REMOVE_ALERT
            })
          },500)

        }, 2000);

      

      })

    
    } else {

      dispatch({
        type: SUBMIT_TODO,
        payload: state.todo
      })


      dispatch({
        type: SET_ALERT,
        payload: { msg: 'Added', type: 'success' }
      })

      // delete alert

      setTimeout(() => {
        const alert = document.querySelector('.alert');

        setTimeout(() => {
          alert.classList.add('removed');

          setTimeout(() => {
            dispatch({
              type: REMOVE_ALERT
            })
          }, 500)

        }, 2000);


      })

      // LS

      let todosLS;

      if (localStorage.getItem('todos') === null) {
        todosLS = []
      } else {
        todosLS = JSON.parse(localStorage.getItem('todos'));
      }

      todosLS.push(state.todo);
      localStorage.setItem('todos', JSON.stringify(todosLS));

    }


  }

  const deleteTodo = (e) => {

    e.target.parentElement.classList.add('removed');

    const lists = document.querySelectorAll('.card');

    const todoToDel = e.target.nextElementSibling.textContent

    setTimeout(() => {
      dispatch({
        type: DELETE_TODO,
        payload: todoToDel
      });

      lists.forEach(list => {
        list.className = 'card'
      })



      // LS

      const todosLS = JSON.parse(localStorage.getItem('todos'));

      todosLS.forEach((todo, index) => {
        if (todo.text === todoToDel) {
          todosLS.splice(index, 1)
        }
      })

      localStorage.setItem('todos', JSON.stringify(todosLS))

    }, 1000)


  }

  const completeTodo = (e) => {

    const toDoToComplete = e.target.nextElementSibling.textContent;

    dispatch({
      type: TODO_COMPLETED,
      payload: toDoToComplete
    })

  }


  return (
    <TodoContext.Provider
      value={{
        todos: state.todos,
        todo: state.todo,
        alert: state.alert,
        addTodo,
        submitTodo,
        deleteTodo,
        completeTodo

      }}>
      {props.children}

    </TodoContext.Provider>
  )
}

export default TodoState;