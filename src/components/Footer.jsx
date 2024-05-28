import React from "react";

const Footer = () => {
  return (
    <footer className="cnt bg-gray-800 py-4 text-white">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex flex-col md:flex-row items-center">
          <a href="/" className="text-white font-bold ml-14 mr-14">Evently</a>
          <ul className="flex space-x-10">
            <li>
              <a href="/" className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500">Home</a>
            </li>
            <li>
              <a href="/event" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Create Event</a>
            </li>
            <li>
              <a href="/profile" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">My Profile</a>
            </li>
          </ul>
        </div>
        <div className="mt-4 md:mt-0 text-center md:text-right mr-14">
          <p>Contact Number: +1-234-567-890</p>
          <p>Address: 1234 Evently Street, City, State, 56789</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
