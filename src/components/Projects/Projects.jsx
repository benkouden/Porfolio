"use client"
import React from 'react'
import {motion } from 'framer-motion';
import Image from 'next/image';
import Project1 from "../../assets/shopsy.jpg";
import Project2 from "../../assets/market.PNG";
import Project3 from "../../assets/volta.PNG";
import Link from 'next/link'



const ProjetsData = [
    {
        id:1,
        title :"Project 1",
        link: "#",
        desc : "Création d'un site e-commerce moderne et intuitif pour Shopsy, mettant en avant les produits, les catégories et un processus d'achat simplifié. Conçu pour offrir une expérience utilisateur fluide, il combine un design attractif avec des fonctionnalités pratiques comme la gestion des commandes et le paiement sécurisé",
        delay : 1.2,
        img : Project1,
        lien1:"https://ben-shopsy.onrender.com/",
        lien2:"https://github.com/benkouden"

    },
  
    {
        id:2,
        title :"Project 2",
        link: "#",
        desc : "Création d’un site moderne et intuitif dédié au marketing digital, mettant en avant les services, les stratégies et les résultats obtenus. Conçu pour offrir une navigation fluide, il allie un design attrayant à des fonctionnalités pratiques pour optimiser l’expérience utilisateur et attirer de nouveaux clients",
        delay : 1.6,
        img : Project2,
        lien1: "https://dev-ben-marketing.pantheonsite.io/",
        lien2:"https://github.com/benkouden"
    },
    {
        id:3,
        title :"Project 3",
        link: "#",
        desc : "Création d’un site web moderne et fonctionnel pour Volta Express, une entreprise spécialisée en électromécanique. Ce site met en avant les services, les expertises et les réalisations de l’entreprise, tout en offrant une navigation intuitive. Conçu pour refléter le professionnalisme de Volta Express, il combine un design attractif avec des fonctionnalités pratiques, telles que des formulaires de contact et des sections détaillées sur les prestations offertes.",
        delay : 2,
        img : Project3,
        lien1:"https://dev-volta-express.pantheonsite.io/",
        lien2:"https://github.com/benkouden"

        
    },
]

const Projects = () => {
  return (
    <section className=' bg-black text-white'>
        <div className="container py-20 xl:py-36 space-y-36 ">
           {/* heading title  */}
           <motion.div initial={{ opacity: 0, scale:0.5}} whileInView= {{ opacity:1, scale:1}} transition={{ duration : 0.6, delay: 0.5}} className='relative'>
            <p className='text-3xl lg:text-4xl tracking-widest font-bold text-center uppercase relative z-20'>Projects</p>
            <p className='text-5xl lg:text-8xl text-white/10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 uppercase font-extrabold'>Projects</p>
           </motion.div>
           {/* projects card section  */}
           <motion.div initial={{ opacity: 0}} whileInView= {{ opacity:1}} transition={{ duration : 0.8, delay: 0.5}} className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5'>
            {
                ProjetsData.map((project) => {
                    return (
                        <motion.div 
                            key={project.id} // Ajout de la clé unique
                            className=" bg-black hover:red-shadow border-2 border-primary/80 p-4 rounded-xl hover:scale-110 duration-300 group space-y-5 ">
                            <Image className='w-full' src={project.img} alt={project.title} />
                            <div className=' space-y-2 p-4'>
                                <h1>{project.title} </h1>
                                <p className=' text-sm line-clamp-3'>{project.desc}</p>
                            </div>
                            {/* hidden button section  */}
                            <div className=' hidden group-hover:flex justify-around items-center duration-300'>
                                <Link href={project.lien1}>
                                   <button className='border-2 border-white py-2 rounded-lg px-4'>Live</button>
                                </Link>
                                <Link href={project.lien1}>
                                   <button className='btn'>Voir le Code</button>
                                </Link>
                            </div>
                           
                        </motion.div>
                        
                    );
                })
            }
           </motion.div>
        </div>
    </section>
  )
}

export default Projects