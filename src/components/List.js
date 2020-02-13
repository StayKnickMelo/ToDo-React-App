import React, { useContext } from 'react';

import ToDoContext from '../context/todoContext';

import Empty from './Empty';

const List = () => {

  const todoContext = useContext(ToDoContext);

  const { todos, deleteTodo, completeTodo } = todoContext;


  return (
    <div className='container'>

      {todos.length > 0 ? todos.map((todo, index) => (
        <div key={index} className='card'>
          <div className='num badge-card'>{index + 1}</div>
          {todo.completed ? <div onClick={deleteTodo} className='close badge-card'>&times;</div> : <button className='badge-complete' onClick={completeTodo}>Complete</button>}
          <h3>{todo.text}</h3>
          {todo.completed ? <p className='badge'>Completed <i className="fas fa-check"></i></p> :
            <p className='badge badge-active'>Active <i className="fas fa-spinner"></i></p>}
        </div>


      )) : <Empty />}
    </div>
  )
}

export default List
