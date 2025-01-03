import React from 'react'

import Html from '../assets/img/png/Html.png';
import Css from '../assets/img/png/css.png';
import boostrap from '../assets/img/png/Boostrap.png';
import tail from '../assets/img/png/Tailwindcss.png';
import js from '../assets/img/png/images.png';
import react from '../assets/img/png/ReactJs.png';
import Ts from '../assets/img/png/Ts.png'

function Skills() {
  return (
    <>
    {/* <section id='Skills' className='py-9 px-10'> */}
      <div className='container'>
        <h1 className=' text-center text-4xl  text-blue-600 font-black'>Skills</h1>
        <div className='my-5  grid grid-cols-12'>
          <div className='my-5 lg:col-span-3  md:col-span-3 sm:col-span-4 col-span-3 justify-center items-center flex flex-col'>
            <img src={Html} alt="" className='w-20 h-20 '/>
            <span className='font-bold text-blue-600 font-poppins'>Html</span>
          </div>
          <div className='lg:col-span-3  md:col-span-3 sm:col-span-4 col-span-3 flex justify-center items-center flex-col '>
            <img src={Css} alt="" className='w-20 h-20'/>
            <span className='font-bold text-blue-600 font-poppins'>Css</span>
          </div>
          <div className='lg:col-span-3  md:col-span-3 sm:col-span-4 col-span-3 flex justify-center items-center flex-col'>
            <img src={boostrap} alt="" className='w-20 h-20'/>
            <span className='font-bold text-blue-600 font-poppins'>Bootrap</span>
          </div>
          <div className='lg:col-span-3  md:col-span-3 sm:col-span-4 col-span-3 flex justify-center items-center flex-col'>
            <img src={tail} alt="" className='w-20 h-20'/>
            <span className='font-bold text-blue-600 font-poppins'>TailwindCSS</span>
          </div>
          <div className='lg:col-span-3  md:col-span-3 sm:col-span-4 col-span-3 flex justify-center items-center flex-col'>
            <img src={js} alt="" className='w-20 h-20'/>
            <span className='font-bold text-blue-600 font-poppins'>Java Script</span>
          </div>
          <div className='lg:col-span-3  md:col-span-3 sm:col-span-4  col-span-3 flex justify-center items-center flex-col'>
            <img src={react} alt="" className='w-20 h-20'/>
            <span className='font-bold text-blue-600 font-poppins'>React JS</span>
          </div>
          <div className='lg:col-span-3  md:col-span-3 sm:col-span-4  col-span-3 flex justify-center items-center flex-col'>
            <img src={Ts} alt="" className='w-20 h-20'/>
            <span className='font-bold text-blue-600 font-poppins'>TypeScript</span>
          </div>
        </div>
      </div>
    {/* </section> */}
      
    </>
  )
}
export default Skills
