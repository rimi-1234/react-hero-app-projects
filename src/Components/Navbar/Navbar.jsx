import React from 'react';
import { Link, NavLink } from 'react-router';
import logo from '../../assets/logo.png'
import { FaGithub } from "react-icons/fa";

const Navbar = () => {
    const links = <>  
      <NavLink
        to="/"
        className={({ isActive }) =>
            isActive ? "border-b-2 border-[#9F62F2]  bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent text-center  " : "text-gray-700 text-center "
        }
    >
        Home
    </NavLink>
      <NavLink
        to="/apps"
        className={({ isActive }) =>
            isActive ?  "border-b-2 border-[#9F62F2]  bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent text-center ml-0 md:ml-4 mt-4 md:mt-0" :  "text-gray-700  text-center  md:ml-4  mt-4 md:mt-0"
        }
    >
        Apps
    </NavLink>
      <NavLink
        to="/installation"
        className={({ isActive }) =>
            isActive ?  "border-b-2 border-[#9F62F2]  bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent text-center ml-0 md:ml-4 mt-4 md:mt-0" :  "text-gray-700  text-center  md:ml-4  mt-4 md:mt-0"
        }
    >
        Installation
    </NavLink>

    </>
    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <div className='flex items-center px-0 md:px-10 '>
                   <Link to="/"> <img src={logo} alt="Logo" className="h-10 " /></Link>
                   <Link to="/">   <h2 className="text-xl ml-2 font-bold bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
                        HERO.IO
                    </h2></Link>
                  



                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                  <Link to="https://github.com/rimi-1234/">    <button className="btn mr-3 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white"><span><FaGithub /></span>Contribute</button></Link>
            
              

            </div>
        </div>
    );
};

export default Navbar;