import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { toggleMode } from "../redux/themseSlice";
import { useEffect, useState } from "react";

const Navbar = () => {
  const darkMode = useSelector((state) => state.theme.darkMode);
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  const changeMode = () => {
    dispatch(toggleMode());
  };

  return (
    show && (
      <nav className="bg-transparent transition-all ease-in-out text-white px-8 py-4 md:flex md:justify-evenly items-center justify-between">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-lime-300 via-white to-blue-600 bg-clip-text text-transparent drop-shadow-md font-serif animate-[ping_1.5s_ease-in-out_1]">
          Pranjul
        </h1>

        <div className="flex flex-wrap items-center justify-between md:justify-evenly">
          <ul
            className={`flex flex-wrap font-semibold items-center flex-row md:space-x-6 ${darkMode
                ? "bg-gradient-to-r from-lime-300 via-white to-blue-600 bg-clip-text text-transparent drop-shadow-md"
                : "text-white"
              }`}
          >
            <NavLink
              to="/Home"
              className={({ isActive }) =>
                `p-2 rounded-lg  ${isActive
                  ? "bg-white text-black font-bold shadow-md underline"
                  : "hover:bg-white hover:text-black"
                }`
              }
            >
              Home
            </NavLink>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `p-2 rounded-lg ${isActive
                    ? "bg-white text-black font-bold shadow-md"
                    : "hover:bg-white hover:text-black"
                  }`
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/skills"
                className={({ isActive }) =>
                  `p-2 rounded-lg ${isActive
                    ? "bg-white text-black font-bold shadow-md"
                    : "hover:bg-white hover:text-black"
                  }`
                }
              >
                Skills
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `p-2 rounded-lg ${isActive
                    ? "bg-white text-black font-bold shadow-md"
                    : "hover:bg-white hover:text-black"
                  }`
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
          <div className="flex items-center space-x-10">
            <button onClick={changeMode} className="text-lg md:ml-11">
              <FontAwesomeIcon
                icon={darkMode ? faSun : faMoon}
                className={
                  darkMode
                    ? "text-yellow-400 animate-[spin_5s_linear_infinite]"
                    : "text-black h-4 w-4"
                }
              />
            </button>
          </div>
        </div>
      </nav>
    )
  );
};

export default Navbar;
