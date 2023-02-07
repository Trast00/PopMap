import React from 'react'
import { IoChevronBackOutline } from "react-icons/io5";


function Header(props) {
  const {name, canBack} = props
  return (
    <header className='flex-center'>
      {canBack && (<IoChevronBackOutline />)}
      <p>{name}</p>
      <div></div>
    </header>
  )
}

export default Header
