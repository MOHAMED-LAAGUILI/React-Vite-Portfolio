import { Link } from 'react-router-dom';
import ThemeToggle from './../ThemeToggle';
import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`bg-black text-gray-200 dark:bg-gray-900 dark:text-gray-200 font-bold px-8 md:px-16 lg:px-24 shadow-md transition-all duration-300`}>
      <div className="container mx-auto flex justify-between items-center py-4">
        {/* Logo */}
        <div className='text-2xl font-bold'>MOHAMED</div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 items-center">
          {['Home', 'About me', 'Services', 'Projects'].map((item, index) => (
            <Link
              key={index}
              to={`/${item.replace(' ', '-')}`} // Adjust link to match your routing
              className='relative group hover:text-gray-400 transition duration-300 rounded-md'
            >
              {item}
              <span className="absolute inset-0 rounded-md bg-gray-200 dark:bg-gray-800 opacity-0 group-hover:opacity-25 transition duration-300"></span>
            </Link>
          ))}

          {/* Contact Button - always visible */}
          <Link to="/Contact-me">
            <button className='bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-full
              transform transition-transform duration-300 hover:scale-105'>
              Connect Me
            </button>
          </Link>
          
          {/* Theme Toggle */}
          <div className="ml-4">
          <ThemeToggle />
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button onClick={handleMenuToggle} className="text-gray-200 focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden flex flex-col items-center  dark:bg-gray-900 space-y-4 py-4 bg-gray-100  dark:text-gray-100 text-gray-900 transition-colors duration-500">
          {['Home', 'About me', 'Services', 'Projects'].map((item, index) => (
            <Link
              key={index}
              to={`/${item.replace(' ', '-')}`} // Adjust link to match your routing
              onClick={handleMenuToggle}
              className='relative group hover:text-gray-400 transition duration-300 rounded-md'
            >
              {item}
              <span className="absolute inset-0 rounded-md bg-gray-200 dark:bg-gray-800 opacity-0 group-hover:opacity-25 transition duration-300"></span>
            </Link>
          ))}

          {/* Contact Button - mobile version */}
          <Link to="/Contact-me">
            <button className='bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-full'>
              Connect Me
            </button>
          </Link>

          {/* Theme Toggle */}
          <div className="mt-2">
            <ThemeToggle />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
