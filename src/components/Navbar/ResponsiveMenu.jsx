import React from 'react';
import { NavLinks } from '../Navbar/Navbar';
import Link from 'next/link';

const ResponsiveMenu = ({ showMenu }) => {
  return (
    <div className={`md:hidden fixed top-0 left-0 z-[999] bg-black text-white h-full w-[75%] pt-16 pl-10 duration-300 rounded-r-xl shadow-md flex flex-col justify-between transform transition-transform ${showMenu ? 'translate-x-0' : '-translate-x-full'}`}>
      {/* Menu section */}
      <div className="mt-10">
        <ul>
          {NavLinks.map((link) => (
            <li key={link.id} className="py-6">
              <Link className="text-2xl font-medium text-white" href={link.link}>
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Menu footer section */}
      <div>
        <p>
          Made with 💖 by <a href="/">Ben Kouden</a>
        </p>
      </div>
    </div>
  );
};

export default ResponsiveMenu;
