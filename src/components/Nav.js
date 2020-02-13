import React from 'react'
import {Link} from 'react-router-dom';

const Nav = () => {
  return (
    <nav className='navbar'>
      <Link to='/'>
        <h2> <i className="fas fa-clipboard-list"></i> {' '}
          ToDo App
        </h2>
      </Link>
      <ul>
        <li>
          <Link to='/about'>About</Link>
        </li>
        <li>
          <Link to='/'>Home</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
