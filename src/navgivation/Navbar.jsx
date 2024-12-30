import { IoSearchOutline } from "react-icons/io5";
import { IoIosNotificationsOutline } from "react-icons/io";
import { FaUserCheck } from "react-icons/fa";
import logo from "../assets/logo.png";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

function Navbar() {
  const nav = [
    { path: "/", item: "Home" },
    { path: "/Movies", item: "Movies" },
    { path: "/Serise", item: "Serise" },
    { path: "/News", item: "News" },
    { path: "/My_List", item: "My List" },
  ];

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const navigate = useNavigate();

  const handleLoginClick = () => {
    console.log("click login");
    navigate('/login'); 
  };
  

  return (
    <nav className="bg-gray-800 z-20">
      <div className="flex justify-between items-center px-6 py-4 text-white">
        <div className="logo text-2xl font-semibold">
          <NavLink to="/">
            <img className="w-24" src={logo} alt="logo" />
          </NavLink>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex">
          <nav className="flex gap-8 text-lg">
            {nav.map((item, index) => (
              <li key={index} className="list-none">
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    isActive
                      ? "text-red-500 px-2 py-1 list-none"
                      : "px-2 py-1 list-none"
                  }
                >
                  {item.item}
                </NavLink>
              </li>
            ))}
           
          </nav>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>

        {/* Right Side Icons and Login */}
        <div className="hidden md:flex items-center gap-4">
          <IoSearchOutline className="w-7 h-7" />
          <IoIosNotificationsOutline className="w-7 h-7" />
          <button  onClick={handleLoginClick} className="px-6 py-2 rounded-md font-semibold bg-red-500 hover:bg-red-800 flex items-center gap-2">
            <FaUserCheck className="w-6 h-6 bg-transparent" />
            Login
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`${isOpen ? "block" : "hidden"} md:hidden bg-gray-700`}>
        <ul className="flex flex-col items-center py-4 text-white">
          {nav.map((item, index) => (
            <li key={index} className="text-white py-2 px-6 hover:bg-gray-600">
              {item.element}
            </li>
          ))}
          <li className="text-white py-2 px-6 hover:bg-gray-600">
            <IoSearchOutline className="w-7 h-7" />
          </li>
          <li className="text-white py-2 px-6 hover:bg-gray-600">
            <IoIosNotificationsOutline className="w-7 h-7" />
          </li>
          <li className="py-2 px-6">
            <button onClick={()=>{handleLoginClick}} className="w-full text-center px-6 py-2 rounded-md font-semibold bg-red-500 hover:bg-red-800 flex justify-center items-center gap-2">
              <FaUserCheck className="w-6 h-6" />
              Login
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
