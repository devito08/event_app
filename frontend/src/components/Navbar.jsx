// NavBar.js
import React from 'react';
import Image from '../logo.svg'

const NavBar = () => {
  return (
    <nav className="bg-gray-800 p-6">
      <div className="container mx-auto flex justify-between items-center">
        <img src={Image} alt='logo' classname="flex"/>
        <a href="/" className="text-indigo-700 font-bold mx-2 text-2xl ">Evently</a>
        <ul className="flex space-x-10 mx-auto">
          <li>
            <a href="/" className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500 text-xl">Home</a>
          </li>
          <li>
            <a href="/create-event" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent text-xl">Create Event</a>
          </li>
          <li>
            <a href="/profile" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent text-xl">My Profile</a>
          </li>
        </ul>
     
      </div>
    </nav>
  );
};

export default NavBar;
