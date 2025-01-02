import React from 'react'
import Nav from '../components/Nav'
import About from '../components/About'
import Skills from '../components/Skills'
import Projek from '../components/Projek'
import Contak from '../components/Contak'

function Portofolio() {
  return (
    <>
      <Nav/>
      <section id='About' className='py-20 px-10 bg-blue-600'>
      <About/>
      </section>
      <section id="Skill" className="py-20 bg-gray-100">
      <Skills/>
      </section>
    
      <section id="Projects" className='py-9 px-20   bg-purple-900'>
      <Projek/>
      </section>
      <section id='Contact' className='py-9 px-10 my-10 '>
      <Contak/>
      </section>
    </>
  )
}

export default Portofolio
