import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div className="flex items-center justify-between gap-3 px-2 bg-gray-500 text-white">
        <NavLink to={'/home'}>Home</NavLink>
        <NavLink to={'/about'}>About</NavLink>
        <NavLink to={'/contact'}>Contact</NavLink>
        <NavLink to={'/programs'}>Programs</NavLink>
        <NavLink to={'/why'}>why US</NavLink>
        <NavLink to={'/location'}>Location</NavLink>
    </div>
  )
}

export default Header