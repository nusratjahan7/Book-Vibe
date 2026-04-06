import React from 'react';
import { Link, NavLink } from 'react-router';

const Navbar = () => {
    const links = <>
    <li><NavLink 
    className={({isActive}) => `font-semibold mr-1 ${isActive ? "text-green-500 border border-green-500" : ""}`} 
    to={"/"}>Home</NavLink></li>
    <li><NavLink
    className={({isActive}) => `font-semibold mr-1 ${isActive ? "text-green-500 border border-green-500" : ""}`}
    to={"/books"}>Listed Books</NavLink></li>
    <li><NavLink 
    className={({isActive}) => `font-semibold mr-1 ${isActive ? "text-green-500 border border-green-500" : ""}`}
    to={"/page-to-read"}>Pages to Read</NavLink></li>
    </>
       
    
    return (
        <div className="navbar bg-base-100  sticky top-0 right-0 left-0 z-50 w-11/12 mx-auto">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        
        {links}

      </ul>
    </div>
    <h2 className="font-bold text-xl ml-2">Book Vibe</h2>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {links}
    </ul>
  </div>
  <div className="navbar-end gap-4">
    <button className="btn btn-success text-white">Sign In</button>
    <button className="btn btn-info text-white">Sing Up</button>
  </div>
</div>
    );
};

export default Navbar;