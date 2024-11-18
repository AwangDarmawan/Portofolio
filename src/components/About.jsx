import React from 'react'
import Poto from '../assets/img/png/Poto.png'
import potoreact from '../assets/img/iconSVG/react.svg'

function About() {
  return (
    <>
      <section  className='py-20 px-10 bg-blue-600'>
        <div className='container '>
            <div className='grid grid-cols-12 sm:my-11 '>
            <div className='col-span-12 lg:col-span-6  md:col-span-6 sm:col-span-12 '>
                <div className='flex  mx-auto justify-center rounded-xl'>
                 <img src={Poto} alt="" className='w-1/2  rounded-full border-2 ' />
                 <img src={potoreact} alt="" className='w-14 h-14 animate-spin-slow  mt-auto'/>
                 </div>
                </div>
                <div className='col-span-12 lg:col-span-6  md:col-span-6 sm:col-span-12 sm:my-11'>
                    <span className='flex  text-white'>Hi ,<span className='animate-wave pe-1'>👋</span>
                    <span className='font-bold  text-lg'> I'm Awang Darmawan</span></span>
                    <h1 className='font-black text-4xl mt-2 mb-8 text-white '>Frontend Web Developer</h1>
                    <span className=' text-white font-semibold text-sm font-sans'>
                    I am a fresh graduate of Informatics Engineering with a GPA of 3.64 and have the ability to create web frontends, solve programming problems well, fetching APIs and managing program codes well. As a programmer I am able to create web frontends. In addition, I am an enthusiastic person, easy to adapt and can be a leader in teamwork. Now I am looking for a job as a frontend web developer.</span>
                    <button className=' bg-green-500  flex-row-reverse flex px-20 py-2 rounded-md my-5 text-white font-serif border-l-stone-50'>Let's Talk!</button>
                </div>
                

            </div>
        </div>
      </section>
    </>
  )
}

export default About
