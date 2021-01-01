import React from 'react'
import { Link } from 'react-router-dom'

function Nav(){
  return(
    <div className="navSection">
      <ul>
        <li><Link to='/Projects'>Projects</Link></li>
        <li><Link to='/Contact'>Contact</Link></li>
        <li><Link to='/Resume'>Resume</Link></li>
      </ul>
    </div>
  )
}

export default Nav;