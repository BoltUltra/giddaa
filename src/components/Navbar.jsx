import { useState } from 'react';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import { CloseCircle, HambergerMenu, SearchNormal1 } from 'iconsax-react';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (path) => {
    return location.pathname === path;
  };

  const goToLogin = () => {
    navigate('/login');
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className='bg-[#f2f2f2] font-red-hat'>
      <nav className='flex items-center md:px-20 md:py-5 py-3 px-5 justify-between'>
        <img src="/images/logo.png" alt="logo" className='md:w-16 w-12' />
        <div className='bg-white md:flex hidden items-center justify-between py-3 px-3 w-96 rounded-full'>
          <input type="text" name="search" id="search" className='bg-transparent outline-none placeholder:text-sm placeholder:font-light w-full' placeholder='Search For Properties, Developers, Banks' />
          <SearchNormal1 size="16" color="#f2f2f2" />
        </div>
        <div>
          <ul className='md:flex hidden items-start space-x-5 text-sm font-light'>
            <li className='flex flex-col items-center space-y-1'>
              <Link to="/" className={`nav-link ${isActive('/') ? 'active-nav-link' : ''}`}>
                <span>Home</span>
                {isActive('/') && <i className="fa-solid fa-circle fa-2xs"></i>}
              </Link>
            </li>
            <li>
              <Link to="/properties" className={`nav-link ${isActive('/properties') ? 'active-nav-link' : ''}`}>
                <span>Properties</span>
                {isActive('/properties') && <i className="fa-solid fa-circle fa-2xs"></i>}
              </Link>
            </li>
            <li>
              <Link to="/developers" className={`nav-link ${isActive('/developers') ? 'active-nav-link' : ''}`}>
                <span>Developers</span>
                {isActive('/developers') && <i className="fa-solid fa-circle fa-2xs"></i>}
              </Link>
            </li>
            <li>
              <Link to="/mortgage-banks" className={`nav-link ${isActive('/mortgage-banks') ? 'active-nav-link' : ''}`}>
                <span>Mortgage Banks</span>
                {isActive('/mortgage-banks') && <i className="fa-solid fa-circle fa-2xs"></i>}
              </Link>
            </li>
            <li>
              <Link to="/consult-expert" className={`nav-link ${isActive('/consult-expert') ? 'active-nav-link' : ''}`}>
                <span>Consult an Expert</span>
                {isActive('/consult-expert') && <i className="fa-solid fa-circle fa-2xs"></i>}
              </Link>
            </li>
          </ul>
        </div>

        <div className='md:flex hidden items-center space-x-5'>
          <div className="w-14 h-14 flex items-center justify-center rounded-full text-white bg-primary relative">
            <i className="fa-regular fa-bell text-2xl"></i>
            <span className="absolute bg-white rounded-full text-primary top-2 right-3 h-4 w-4 flex text-xs items-center justify-center">2</span>
          </div>
          <button className='bg-primary text-white py-3 px-10 transition-all duration-500 ease-in-out border border-primary hover:bg-white hover:text-primary' onClick={goToLogin}>Login</button>
        </div>

        <div className="md:hidden">
          {!isMenuOpen && <HambergerMenu size="32" color="#335F32" onClick={toggleMenu} />}
          {isMenuOpen && <CloseCircle size="32" color="#335F32" onClick={toggleMenu} />}
        </div>
      </nav>

      <div className={`mobile-menu md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className="">
          <ul className='space-y-5 border-t pt-3 pb-5'>
            <li><Link to="/" className='pl-5'>Home</Link></li>
            <li><Link to="/properties" className='pl-5'>Properties</Link></li>
            <li><Link to="/developers" className='pl-5'>Developers</Link></li>
            <li><Link to="/mortgage-banks" className='pl-5'>Mortgage Banks</Link></li>
            <li><Link to="/consult-expert" className='pl-5'>Consult an Expert</Link></li>
            <li><Link to="/login" className='pl-5'>Login</Link></li>
          </ul>
        </div>
      </div>
    </header >
  );
};

export default Navbar;
