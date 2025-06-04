
import Nav from '../components/Nav'
import About from '../components/About'
import Skills from '../components/Skills'
import Projek from '../components/Projek'
import Contak from '../components/Contak'

function Portofolio() {
  return (
    <>
      <Nav/>
      <section id='About' className='py-20 px-10'>
      <About/>
      </section>
      <section id="Skill" className="py-20 px-10 ">
      <Skills/>
      </section>
    
      <section id="Projects" className='py-20 px-10'>
      <Projek/>
      </section>
      <section id='Contact' className='py-20 px-10 my-10 '>
      <Contak/>
      </section>
    </>
  )
}

export default Portofolio
