"use client"
import React from 'react'
import Image from 'next/image';
import { motion } from 'framer-motion';
import {FiDownload} from "react-icons/fi"
import BannerImg from "../../assets/man2.webp";
import Grains from "../../assets/grain.png";
import { slideUp } from '../Hero/Hero';


const Banner = () => {
    const bgGrains = {
      backgroundImage: `url(${Grains.src})`,
      backgroundPosition: "center",
    };
  return (
    <section className='bg-black text-white'>
        <div className="container pb-10">
          <div style={bgGrains} className='bg-gray-950 rounded-3xl py-14 px-5 grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 translate-y-36'>
            {/* Banner Image  */}
            <motion.div initial={{ opacity: 0}} animate= {{ opacity:1}} transition={{ duration : 0.8, delay: 0.5}}  className='flex items-end justify-center'>
                <Image src={BannerImg} alt='banner' className=' w-[300px] lg:w-[400px]'/>
            </motion.div>
            {/* Banner Info  */}
            <div className='flex flex-col justify-center'>
                <div className='text-left space-y-7 lg:max-w-[400px]'>
                    <motion.h1 variants={slideUp(0.3)} initial="initial" animate="animate" className='text-3xl lg:text-4xl font-bold'>Je suis un développeur Full Stack</motion.h1>
                    <motion.p variants={slideUp(0.5)} initial="initial" animate="animate" className='text-white/70'>Passionné et polyvalent, capable de maîtriser aussi bien le front-end que le back-end pour concevoir des applications web complètes et performantes. Mon engagement : créer des solutions intuitives, robustes et parfaitement adaptées aux besoins des utilisateurs. Mon ambition est de donner vie à vos idées en les transformant en produits numériques innovants et impactants.</motion.p>
                    <div className='flex items-center gap-4'>
                        <motion.button variants={slideUp(0.7)} initial="initial" animate="animate" className='btn text-xs py-3 md:text-base'>Know more</motion.button>
                        <a href="https://drive.google.com/file/d/1E7kGLBuWN_EeMWZKUPH8wN0NLCta3W9R/view?usp=drive_link">
                        <motion.button variants={slideUp(0.9)} initial="initial" animate="animate" className='border border-white/50 rounded-lg px-4  text-xs md:text-base flex items-center gap-2 py-3  '>
                            <FiDownload/>
                            Download CV
                        </motion.button>
                        </a>
                    </div>
                </div>
            </div>
          </div>
        </div>
    </section>
  )
}

export default Banner