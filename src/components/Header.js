import React from 'react'
import logo from './circle.jpg'

function Header(){
  return(
    <div className='headerSection'>
      <img className='logo'src={logo} alt='Logo' height='100px'/>
      <h1 className='name'>Jeffrey Seneff</h1>
    </div>
  )
}

export default Header