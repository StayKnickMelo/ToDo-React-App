import React, { useContext } from 'react';
import TodoContext from '../context/todoContext';


const Form = () => {

  const toDoContext = useContext(TodoContext);

  const { todo, addTodo, submitTodo } = toDoContext;

 

  return (
    <form className='form' onSubmit={submitTodo} >
      <input onChange={addTodo} type="text" placeholder='Add Todo' value={todo.text} />
      <input className='btn' type="submit" value="Add"/>
    </form>
  )
}

export default Form
