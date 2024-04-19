import React, { useEffect, useState } from 'react';
import { CloseCircle, HambergerMenu } from 'iconsax-react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCloseIconVisible, setIsCloseIconVisible] = useState(false);

  const isActive = (path) => {
    return location.pathname === path;
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsCloseIconVisible(!isCloseIconVisible);
  };

  const closeSidebar = () => {
    setIsMenuOpen(false);
    setIsCloseIconVisible(false);
  };

  return (
    <>
      <div className='md:block hidden'>
        <div className='md:w-[20%] md:block bg-[#f0f0f0] fixed h-screen overflow-y-scroll top-0 md:pl-7 pl-3 md:pt-12 pt-7 font-red-hat z-10'>
          <img src="/images/logo-large.png" alt="logo" className='w-24' />
          <div className='space-y-6 mt-6'>
            <div className={`flex items-center space-x-3 ${isActive('/dashboard') ? 'active-link' : ''} dashboard-route`}>
              <i className="fa-thin fa-gauge-simple-high text-2xl"></i>
              <Link to='/dashboard' className='uppercase text-sm'>Dashboard</Link>
            </div>
            <div className={`flex items-center space-x-3 ${isActive('/transactions') ? 'active-link' : ''} dashboard-route`}>
              <i className="fa-thin fa-sack text-2xl"></i>
              <Link to='/transactions' className='uppercase text-sm'>Transactions & Earnings</Link>
            </div>
            <div className={`flex items-center space-x-3 text-red-500 ${isActive('/') ? 'active-link' : ''} hover:text-red-500 hover:font-semibold cursor-pointer transition-all duration-200 ease-in-out hover:border-r-4 rounded-r-sm border-r-red-500`}>
              <i className="fa-thin fa-arrow-right-from-bracket text-2xl"></i>
              <Link to='/' className='uppercase text-sm'>Logout</Link>
            </div>
          </div>
        </div>

      </div>


      <div className='md:hidden'>
        {!isMenuOpen && (
          <div className="z-50 fixed bg-white w-full px-5 py-3 border-b border-b-primary flex items-center justify-between">
            <img src="/images/logo-large.png" alt="logo" className='w-14' />
            <HambergerMenu size="32" color="#335F32" onClick={toggleMenu} />
          </div>
        )}

        {isCloseIconVisible && (
          <div className="absolute top-5 right-5" onClick={closeSidebar}>
            <CloseCircle size="32" color="#335F32" />
          </div>
        )}

        {isMenuOpen && (
          <div className='w-[70%] md:block bg-[#f0f0f0] fixed h-screen overflow-y-scroll top-0 md:pl-7 pl-3 md:pt-12 pt-7 font-red-hat z-10'>
            <img src="/images/logo-large.png" alt="logo" className='w-24' />
            <div className='space-y-6 mt-6'>
              <div className={`flex items-center space-x-2 ${isActive('/dashboard') ? 'active-link' : ''} dashboard-route`}>
                <i className="fa-thin fa-gauge-simple-high text-xl"></i>
                <Link to='/dashboard' className='text-xs'>Dashboard</Link>
              </div>
              <div className={`flex items-center space-x-2 ${isActive('/transactions') ? 'active-link' : ''} dashboard-route`}>
                <i className="fa-thin fa-sack text-xl"></i>
                <Link to='/transactions' className='text-xs'>Transactions & Earnings</Link>
              </div>
              <div className={`flex items-center space-x-2 text-red-500 ${isActive('/') ? 'active-link' : ''} hover:text-red-500 hover:font-semibold cursor-pointer transition-all duration-200 ease-in-out hover:border-r-4 rounded-r-sm border-r-red-500`}>
                <i className="fa-thin fa-arrow-right-from-bracket text-xl"></i>
                <Link to='/' className='text-xs'>Logout</Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Sidebar;
