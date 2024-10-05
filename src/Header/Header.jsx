import React, { useState, useEffect } from 'react';


const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
 

  return (
    <nav className="bg-white dark:bg-[#121212] px-2 lg:px-2 xl:px-6 pt-4 md:pt-2">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#" className="flex items-center rtl:space-x-reverse text-emerald-400 hover:text-emerald-500 transition-all ease-linear">
          <i className="fa-solid fa-person-biking text-3xl me-1 mb-1"></i>
        </a>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button
            type="button"
            className="text-white bg-emerald-500 border-0 ring-0 hover:bg-emerald-600 focus:border-0 transition-all ease-linear font-medium rounded-lg text-sm px-4 py-2 text-center"
          >
            Create Account
          </button>

          {/* Dark mode toggle button */}
         
    


          
        </div>

        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
          <ul className="flex flex-col p-4 md:p-0 mt-4 md:space-x-4 lg:space-x-4 xl:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 font-semibold text-slate-900 dark:text-white/90">
            <li><a href="#" className="block py-2 px-3 md:p-0 hover:text-emerald-500 transition-all ease-linear">Home</a></li>
            <li><a href="#" className="block py-2 px-3 md:p-0 hover:text-emerald-500 transition-all ease-linear">Discover</a></li>
            <li><a href="#" className="block py-2 px-3 md:p-0 hover:text-emerald-500 transition-all ease-linear">Pricing</a></li>
            <li><a href="#" className="block py-2 px-3 md:p-0 hover:text-emerald-500 transition-all ease-linear">Guide</a></li>
            <li><a href="#" className="block py-2 px-3 md:p-0 hover:text-emerald-500 transition-all ease-linear">Services</a></li>
            <li><a href="#" className="block py-2 px-3 md:p-0 hover:text-emerald-500 transition-all ease-linear">Contact</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
