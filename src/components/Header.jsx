import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <nav>
        <h1>crypt</h1>
        <div className="options">
            <Link to="/">Home</Link>
            <Link to="/about" onClick={ (event) => event.preventDefault() }>About</Link>
            <Link to="/contact" onClick={ (event) => event.preventDefault() }>Contacts</Link>
        </div>
    </nav>
  )
}

export default Header
