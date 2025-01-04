import React from 'react'
import { NavLinks } from '../Navbar/Navbar'
import Link from 'next/link';
const ResponsiveMenu = ({showMenu}) => {
  return (
    <div className="md:hidden">
        <div className={` ${showMenu ? "left-0" : " -left-[100%]"} fixed top-0 left-0 z-[999] bg-black text-white h-[100%] w-[75%] pt-16 pl-10 duration-300 md:hidden rounded-r-xl shadow-md flex flex-col justify-between `}>
            {/* menu section  */}
            <div className='mt-10'>
                    <ul>
                        {
                          NavLinks.map((link) =>{
                            return(
                                <li key={link.id} className='py-6'>
                                    <Link className=' text-2xl font-medium text-white' href={link.link}> {link.title}</Link>
                                </li>
                            );
                          })
                        }
                    </ul>
                </div>
            {/* menu footer section  */}
            <div>
                <p>
                    Made with 💖 by {""}
                    <a href="/">Ben Kouden </a>{" "}
                </p>
            </div>

        </div>
    </div>
  )
}

export default ResponsiveMenu