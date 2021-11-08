import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <nav>
      <Link to='/'>
        <p>Home</p>
      </Link>
      <Link to='/register'>
        <p>Register</p>
      </Link>
      <Link to='/login'>
        <p>login</p>
      </Link>
    </nav>
  )
}

export default Navbar
