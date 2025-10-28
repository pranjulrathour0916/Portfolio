import {  faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { toggleMode } from '../redux/themseSlice'
import { useState } from 'react'


const Navbar = () => {
  const darkMode = useSelector(state => state.theme.darkMode)
  const [isOpen, setIsOpen] = useState(false)

  const dispatch = useDispatch()

  const changeMode = () =>{
     dispatch(toggleMode())
  }
  
  const handleOpen = () =>{
    setIsOpen(true)
  }
  return (
    <div>
    <nav className="bg-transparent text-white px-8 py-4 flex justify-evenly items-center">
      <h1 className="text-2xl font-bold font-serif">Pranjul</h1>

      <button className='lg:hidden md:hidden' onClick={handleOpen}>Hamburger</button>

       <ul className="flex space-x-6 font-mono">
        <li><Link to="/" className="hover:text-black hover:bg-zinc-50 p-2 rounded-lg">Home</Link></li>
        <li><Link to="/about" className="hover:text-black hover:bg-zinc-50 p-2 rounded-lg">About</Link></li>
        <li><Link to="/skill" className="hover:text-black hover:bg-zinc-50 p-2 rounded-lg">Skills</Link></li>
        <li><Link to="/contact" className="hover:text-black hover:bg-zinc-50 p-2 rounded-lg">Contact</Link></li>
      </ul>
    <button onClick={changeMode} className='text-lg' ><FontAwesomeIcon
        icon={darkMode ? faSun : faMoon} 
        className={darkMode ? "text-yellow-400":"text-black h-4 w-4"} 
      /></button>
    </nav>
    </div>
  )
}

export default Navbar
