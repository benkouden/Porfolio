import Banner from '@/components/Banner/Banner'
import ContactForm from '@/components/ContactForm/ContactForm'
import Hero from '@/components/Hero/Hero'
import Projects from '@/components/Projects/Projects'
import Services from '@/components/Services/Services'
import React from 'react'


const page = () => {
  return (
    <main>
      
      <Hero/>
      <Banner/>
      <Services/>
      <Projects />
      <ContactForm/>
      
    </main>
  )
}

export default page