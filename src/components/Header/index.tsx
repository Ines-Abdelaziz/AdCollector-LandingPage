import { Link, NavLink } from 'react-router-dom';

import LogoIcon from '../../images/logo/logo-icon.svg';
import DarkModeSwitcher from './DarkModeSwitcher';
import Logo from '../../images/logo/logo-dark.svg';

const Header = (props: {
  sidebarOpen: string | boolean | undefined;
  setSidebarOpen: (arg0: boolean) => void;
}) => {
  return (
    <header className="fixed left-0 top-0 z-9999 w-full bg-white ">
    <div className="relative items-center justify-between px-4 py-4 sm:px-8 xl:flex xl:gap-7 xl:px-12.5 xl:py-0 2xl:gap-0">
      <div className="flex w-full items-center justify-between xl:w-2/12 2xl:w-2/12">

    <NavLink to="/">
        <img src={Logo} alt="Logo" />
    </NavLink>
    
      </div>
      <div className="invisible h-0 w-full items-center justify-between lg:w-10/12 xl:visible xl:flex xl:h-auto 2xl:w-9/12  px-50  ">
        <nav>
          <ul className="flex flex-col gap-5 xl:flex-row xl:items-center 2xl:gap-9">
            <li className="nav__menu xl:py-7">
             
              <a href="/#About" className="font-medium text-black-3 hover:text-primary dark:text-black-5 dark:hover:text-white ">
                About
                </a>
            </li>
            <li className="nav__menu xl:py-7">
             
              <a href="/#Installation" className="font-medium text-black-3 hover:text-primary dark:text-black-5 dark:hover:text-white ">
              Installation
                </a>
            </li>
            <li className="nav__menu xl:py-7">
           
              <a href="/#How" className="font-medium text-black-3 hover:text-primary dark:text-black-5 dark:hover:text-white ">
                How Does It Work
                </a>
            </li>
            <li className="nav__menu xl:py-7">
            
              <a href="/#Research" className="font-medium text-black-3 hover:text-primary dark:text-black-5 dark:hover:text-white ">
                Research
                </a>
            </li>
            <li className="nav__menu xl:py-7">
              
              <Link to="#Who" className="font-medium text-black-3 hover:text-primary dark:text-black-5 dark:hover:text-white ">
                Who Are We
                </Link>
            </li>
          </ul>
        </nav>
       
      </div>
    </div>
  </header>
  
  );
};

export default Header;
