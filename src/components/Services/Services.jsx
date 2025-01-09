"use client"
import React from 'react'
import { delay, motion } from 'framer-motion';
import {CiPen} from "react-icons/ci"
import {IoFolderOpen} from "react-icons/io5"
import {RiComputerFill} from "react-icons/ri"
import {FiDownload} from "react-icons/fi"
import RedBG from "../../assets/redbg2.png";
import { slideUp } from '../Hero/Hero';

const bgStyle = {
    backgroundImage: `url(${RedBG.src})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };
const ServicesData = [
    {
        id:1,
        title :"Développement Web",
        icon : <CiPen className="text-3xl" />,
        link: "/services",
        desc : "Création de sites internet sur mesure, alliant design moderne et performance technique pour offrir une expérience utilisateur fluide et optimisée sur tous les appareils",
        delay : 1.2,
    },
    {
        id:2,
        title :" Développement Mobile",
        icon : <IoFolderOpen className ="text-3xl"/>,
        link: "/services",
        desc : "Concevoir des applications sur mesure pour smartphones et tablettes, optimisées pour offrir des performances élevées, une navigation intuitive et une expérience utilisateur fluide sur les systèmes iOS et Android.",
        delay : 1.4,
    },
    {
        id:3,
        title :"Développement Logiciels",
        icon : <RiComputerFill className ="text-3xl"/>,
        link: "/services",
        desc : "La conception, la programmation et la maintenance de solutions logicielles sur mesure, adaptées aux besoins spécifiques des entreprises, afin d’ améliorer l’efficacité et optimiser la gestion des données.",
        delay : 1.6,
    },
    {
        id:4,
        title :"Big Data",
        icon : <RiComputerFill className ="text-3xl"/>,
        link: "/services",
        desc : "De la configuration à la sauvegarde, en passant par la surveillance des performances, je garantis que vos bases de données fonctionnent efficacement et sont protégées contre les pannes et les pertes de données.",
        delay : 1.8,
    }
]

const reveal = (delay) =>{
    return {
      initial: {
        opacity :0,
      },
      animate : {
        opacity :1,
        transition : {
          duration : 0.4,
          delay : delay,
        },
      },
    };
  };

const Services = () => {
  return (
    <section style={bgStyle}>
        <div className='bg-gradient-to-b from-black to-primary/5 text-white '>
            <div className='container py-40'>
              <div className=' grid grid-cols-1 lg:grid-cols-2 gap-6 '>
                {/* Services Info  */}
                <div className='flex flex-col justify-center'>
                    <div className='text-left space-y-7 lg:max-w-[400px]'>
                        <motion.h1 variants={slideUp(0.3)} initial="initial" animate="animate" className='text-3xl lg:text-4xl font-bold'>Services</motion.h1>
                        <motion.p variants={slideUp(0.5)} initial="initial" animate="animate" className='text-white/70 text-xl'>En tant que développeur Full Stack, je propose la conception de solutions web complètes et personnalisées, parfaitement adaptées à vos besoins. Grâce à ma passion pour les nouvelles technologies et mon expertise, je m’engage à transformer vos idées en applications performantes, intuitives et évolutives, tout en garantissant une expérience utilisateur optimale.</motion.p>
                        <div className='flex items-center gap-4'>
                            <motion.button variants={slideUp(0.7)} initial="initial" animate="animate" className=' text-primary rounded font-bold px-5  !bg-white text-xs py-3 md:text-base hover:red-shadow'>Know more</motion.button>
                           
                            <a href="https://drive.google.com/file/d/1-6DPR4MZiLQLdmBrG627AGX4wriXH162/view?usp=drive_link">
                            <motion.button variants={slideUp(0.9)} initial="initial" animate="animate" className='border border-white/50 rounded-lg px-4  text-xs md:text-base flex items-center gap-2 py-3  '>
                                <FiDownload/>
                                Download CV
                            </motion.button>
                            </a>
                        </div>
                    </div>
                </div>
                {/* Services card  */}
                <div className='flex justify-center items-center'>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                       {
                       ServicesData.map((service) => {
                        return (
                            <motion.div 
                                variants={reveal(service.delay)}
                                key={service.id} // Ajout de la clé unique
                                initial="initial"
                                whileInView={"animate"}
                                className='flex flex-col gap-4 justify-center items-start p-6 bg-white/20 backdrop-blur-sm rounded-2xl'>
                                <div className='text-primary/80 bg-white/70 rounded-full p-2'>
                                    {service.icon}
                                </div>
                                <h1 className='text-2xl font-bold'>{service.title}</h1>
                                <p className='text-sm text-white/70'>{service.desc}</p>
                            </motion.div>
                        );
                    })
                       }
                    </div>
                </div>
              </div>
            </div>
        </div>
    </section>
  )
}

export default Services