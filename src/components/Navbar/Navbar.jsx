"use client"
import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation'
import {MdMenu} from "react-icons/md"
import ResponsiveMenu from './ResponsiveMenu'
import { motion } from 'framer-motion'
export const NavLinks = [
    {
        id: 1,
        title: "Home",
        link : "/",
    },
    {
        id: 2,
        title: "Contact",
        link : "/contact",
    },
    {
        id: 3,
        title: "Projects",
        link : "/projects",
    },
    {
        id: 4,
        title: "Services",
        link : "/services",
    },
]

const Navbar = () => {

  const pathname = usePathname();
  const [showMenu, setShowMenu] = React.useState(false);
  const toggleMenu = () =>{
    setShowMenu (!showMenu);
  };
  return (
    <motion.nav className='bg-black text-white' initial = {{opacity: 0}} animate ={{opacity:1}} transition= {{duration: 0.5}} >
        <div className="container flex items-center justify-between py-5 relative z-[9999] ">
            {/* logo section */}
            <div className=''>
                <Link href="/">
                  <div className='flex items-center'>
                    <div className='h-[40px] w-[40px] flex justify-center items-center bg-primary text-white rounded-full text-3xl font-bold '>P</div>
                    <h1 className='text-3xl font-bold text-wh'>orfolio</h1>
                  </div>
                </Link>
            </div>
            {/* links section */}
            <div className='hidden md:block'>
                <ul className='flex items-center gap-5'>
                  {
                    NavLinks.map((link) =>{
                        const isActive = pathname == link.link;
                        return(
                            <li key={link.id}>
                                <Link className={`${isActive ? "text-primary text-xl font-bold hover:text-white" : ""} inline-block text-lg py-1 px-4 hover:red-shadow hover:bg-primary transition-all duration-500 hover:scale-110 `} href={link.link}> {link.title}</Link>
                            </li>
                        );
                    })
                  }
                  <button className='btn'>
                    <a href="./resume.pdf"> Get Resume</a>
                  </button>
                </ul>
            </div>
            {/* mobile  menu section */}
            <div className=' md:hidden'>
              <MdMenu className=' text-4xl' onClick={toggleMenu}/>
            </div>
        </div>
         {/* monile sidebar menu */} 
         <ResponsiveMenu showMenu={showMenu} />
    </motion.nav>
  )
}

export default Navbar