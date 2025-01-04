"use client"
import React from 'react'
import { motion } from 'framer-motion'
import { FaGithub } from "react-icons/fa";
import {FaFacebook, FaInstagram,  FaLinkedin} from "react-icons/fa"
const Footer = () => {
  return (
    <footer className='bg-black text-white py-12'>
        <div className="container">
            <motion.div initial={{ opacity: 0}} whileInView= {{ opacity:1}}  className=' bg-gradient-to-r from-primary to-primary/20 py-12 border-2 border-primary rounded-2xl px-4 hover:red-shadow flex flex-col lg:flex-row gap-8 justify-around items-center duration-300 '>
               <div className='space-y-3'>
                <h2 className='text-3xl font-bold'>Ben Kouden 😋😎</h2>
                <p>mahuton02@gmail.com</p>
                <p>copyright © 2024 Ben Kouden</p>
               </div>
               <div className='flex items-center gap-3 lg:gap-10'>
                 <div>
                    <a href="https://www.linkedin.com/in/bernard-mahuton-koudemedo-87565b2ab?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><FaLinkedin className="text-4xl" /></a>
                 </div>
                 <div>
                    <a href="https://www.instagram.com/ben_kouden/profilecard/?igsh=eWcyNWRnb2JuZjZs"><FaInstagram className="text-4xl" /></a>
                 </div>
                 <div>
                    <a href="https://www.facebook.com/profile.php?id=100072603987182"><FaFacebook className="text-4xl" /></a>
                 </div>
                 <div>
                    <a href="https://github.com/benkouden"><FaGithub className="text-4xl" /></a>
                 </div>
               </div>
            </motion.div>
        </div>
    </footer>
  )
}

export default Footer