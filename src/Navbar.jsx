import React from 'react';
import { IoIosHome } from "react-icons/io";
import { FcAbout } from "react-icons/fc";
import { TiContacts } from "react-icons/ti";
import { GrServices } from "react-icons/gr";
import { GiEagleEmblem } from "react-icons/gi";
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const isAboutPage = location.pathname === '/about';

  const navData = [
    {
      icons: <IoIosHome />,
      title: "Home",
      path: "/"
    },
    {
      icons: <FcAbout />,
      title: "About",
      path: "/about"
    },
    {
      icons: <TiContacts />,
      title: "Contact",
      path: "/contact"
    },
    {
      icons: <GrServices />,
      title: "Skills",
      path: "/skills"
    },
  ];

  return (
    <nav
      className={`flex justify-between items-center font-sans text-2xl p-4 transition-all duration-300
        ${isAboutPage ? 'bg-yellow-400 text-black' : 'bg-white text-red-900 border-y-gray-700'}`}
    >
      <div className='font-bold flex items-center gap-2'>
        <GiEagleEmblem style={{ fontSize: '70px' }} /> HAsaN GaHA
      </div>

      <ul className='flex gap-4 items-center'>
        {navData.map((item, index) => (
          <li key={index} className='flex items-center gap-2 font-semibold hover:text-yellow-500 hover:bg-gray-800 px-4 py-2 rounded transition duration-300'>
            <Link to={item.path} className="flex items-center gap-1">
              {item.icons} {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;