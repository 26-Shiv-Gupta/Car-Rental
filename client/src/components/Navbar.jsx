import React, { useState } from 'react'
import { menuLinks, assets } from '../../src/assets/assets.js'
import { Link } from 'react-router-dom'

const Navbar = () => {

  const [open, setOpen] = useState(true);
  return (
    <div className={`relative max-sm:px-0 max-sm:items-start flex justify-between items-center px-20 py-4 border-b border-gray-300 overflow-x-hidden`}>

      {/* logo */}
      <Link className='mx-4' to='/'>
        <img src="../../src/assets/logo.svg" alt="logo" />
      </Link>

      {/* Home, Cars, Mybookings, search, List cars */}
      <div className={`max-sm:fixed max-sm:top-13 flex items-center list-none gap-9 max-sm:h-screen max-sm:w-screen max-sm:flex-col max-sm:mt-2 max-sm:bg-amber-200 ${open ? 'max-sm:translate-x-0' : 'max-sm:translate-x-full transition-all duration-300'} `}>
        {menuLinks.map((link, index) => (
          <Link key={index} to={link.path}>{link.name}</Link>
        ))}
        {!open && <div>
          <input type="text" className='border rounded-2xl px-3 py-1 outline-none' placeholder='Search cars' />
        </div>}
        <Link>List cars</Link>
        <Link to='/login'>
          <button className='cursor-pointer px-6 py-1 text-white bg-blue-600 rounded-xl '>Login</button>
        </Link>
      </div>

      {/* Menu button */}
      <button className={`mx-3 sm:hidden cursor-pointer`} onClick={() => setOpen(!open)}>
          <img src={open? assets.close_icon: assets.menu_icon} alt="hello" />
      </button>

    </div>
  )
}

export default Navbar