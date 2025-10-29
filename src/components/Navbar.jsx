import {  faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { toggleMode } from '../redux/themseSlice'


const Navbar = () => {
  const darkMode = useSelector(state => state.theme.darkMode)

  const dispatch = useDispatch()



  const changeMode = () =>{
     dispatch(toggleMode())
  }

  return (
    <nav className="bg-transparent text-white px-8 py-4 md:flex md:justify-evenly items-center justify-between">
      <h1 className="text-2xl font-bold font-serif">Pranjul</h1>
      <div className='flex flex-wrap items-center justify-between md:justify-evenly'>

       <ul className = "flex flex-wrap items-center flex-row md:space-x-6 ">
        <li><Link to="/" className="hover:text-black hover:bg-zinc-50 p-2 rounded-lg">Home</Link></li>
        <li><Link to="/about" className="hover:text-black hover:bg-zinc-50 p-2 rounded-lg">About</Link></li>
        <li><Link to="/skill" className="hover:text-black hover:bg-zinc-50 p-2 rounded-lg">Skills</Link></li>
        <li><Link to="/contact" className="hover:text-black hover:bg-zinc-50 p-2 rounded-lg">Contact</Link></li>
      </ul>
      <div className='flex items-center space-x-10'>

     
    <button onClick={changeMode} className='text-lg md:ml-11' ><FontAwesomeIcon
        icon={darkMode ? faSun : faMoon} 
        className={darkMode ? "text-yellow-400":"text-black h-4 w-4"} 
        /></button>
   </div>
    </div>
    </nav>
  )
}

export default Navbar
