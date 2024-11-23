
import React, { useState } from "react";
import ReactJS from "./assets/img/iconSVG/react.svg";
import Toggle from "./assets/img/iconSVG/Toogle.svg";
import github from "./assets/img/png/github.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faEnvelope, faBriefcase, faLightbulb } from '@fortawesome/free-solid-svg-icons';

// aBOUT
import Poto from './assets/img/png/Awang.jpg';
import potoreact from './assets/img/iconSVG/react.svg';

// sKILL
import Html from './assets/img/png/Html.png';
import Css from './assets/img/png/css.png';
import boostrap from './assets/img/png/Boostrap.png';
import tail from './assets/img/png/Tailwindcss.png';
import js from './assets/img/png/images.png';
import react from './assets/img/png/ReactJs.png';
import Ts from './assets/img/png/Ts.png';

import projek1 from './assets/img/png/LearnX.png';
import Chat from './assets/img/png/Chating.png';
import Movie from './assets/img/png/Movie.png';
import Sims from './assets/img/png/Sims.png';
import Kartap from './assets/img/png/Kartap.png';
import grow from './assets/img/png/Grow.png';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';


// contack
import Wa from "./assets/img/png/Wa.png";
import Ig from "./assets/img/png/IG.png";
function App() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <>
    {/* Nav */}
    <nav className="py-4 px-20 fixed  w-full bg-blue-600">
      <div className="container  ">
        <div className="flex items-center justify-between">
            <div className="flex flex-row-reverse gap-2 ">
                <img
                    src={ReactJS}
                    alt=""
                    className="order-1 sm:order-2 w-14 h-14 animate-spin-slow"
                />
                <span className="my-auto font-black text-white">FRONTEND WEB</span>
            </div>
          
          <img
            onClick={() => setNavOpen(!navOpen)}
            src={Toggle}
            alt=""
            className="order-2 sm:order-1 lg:hidden bg-white"
          />
          <div className="order-2 hidden lg:block">
            <ul className="flex gap-16">
              <li>
                <a href="#About" className="text-white  text-sm font-black hover:  hover:bg-sky-700 ">
                  Home
                </a>
              </li>
              <li>
                <a href="#Skill" className="text-white  text-sm font-black hover:bg-sky-700  ">
                  Skills
                </a>
              </li>
              <li>
                <a href="#Projects" className="text-white  text-sm font-black hover: hover:bg-sky-700  ">
                  Project
                </a>
              </li>
              <li>
                <a href="#Contact" className="text-white  text-sm font-black hover: hover:bg-sky-700  ">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="order-3 hidden sm:block">
            <button className="grow bg-white px-2 py-2 font-bold text-grey rounded-full text-sm hover:bg-sky-700">
              <img src={github} alt=""  className="w-6"/>
            </button>
           
            
          </div>
        </div>
        {navOpen && (
          <div
            className="z-50 fixed bottom-0 right-0 left-0 p-4  bg-blue-600 border lg:hidden "
          >
            <ul className="flex justify-between">
              <li>
                <a href="#About" className="flex justify-center flex-col items-center gap-1 hover:bg-sky-700 ">
                <FontAwesomeIcon icon={faHome}  className="text-white"/> 
                  <a className=" text-white font-black text-base ">Home</a>
                </a>
              </li>
              <li>
                <a href="#Skill" className="flex justify-center flex-col items-center gap-1 hover:bg-sky-700">
                <FontAwesomeIcon icon={faLightbulb} className="text-white" />
                  <span className="text-white font-black text-base text-bold">Skill</span>
                </a>
              </li>
              <li>
                <a href="#Projects" className="flex justify-center flex-col items-center gap-1 hover:bg-sky-700">
                <FontAwesomeIcon icon={faBriefcase} className="text-white" /> 
                  <span className="text-white font-black text-base text-bold">Project</span>
                </a>
              </li>
              <li>
                <a href="#Contact" className="flex justify-center flex-col items-center gap-1 hover:bg-sky-700">
                <FontAwesomeIcon icon={faEnvelope} className="text-white"/> 
                  <span className="text-white font-black text-base text-bold">Contact</span>
                </a>
              </li>
              
            </ul>
           
          </div>
        )}
      </div>
    </nav>

{/* About */}
    <section  id ="About" className='py-20 px-10 bg-blue-600'>
        <div className='container '>
            <div className='grid grid-cols-12 sm:my-11 '>
            <div className='col-span-12 lg:col-span-6  md:col-span-6 sm:col-span-12 '>
                <div className='flex  mx-auto justify-center rounded-xl'>
                 <img src={Poto} alt="" className='w-1/2  rounded-full border-2 ' />
                 <img src={potoreact} alt="" className='w-14 h-14 animate-spin-slow  mt-auto '/>
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


{/* SkILL */}
    <section id='Skill' className='py-9 px-10  '>
      <div className='container'>
        <h1 className=' text-center text-4xl  text-blue-600 font-black'>Skills</h1>
        <div className='my-5  grid grid-cols-12 '>
          <div className='my-5 lg:col-span-3  md:col-span-3 sm:col-span-3 col-span-3 justify-center items-center flex flex-col gap-4'>
            <img src={Html} alt="" className='w-20 h-20 '/>
            <span className='font-bold text-blue-600 font-poppins'>Html</span>
          </div>
          <div className='lg:col-span-3  md:col-span-3 sm:col-span-3 col-span-3 flex justify-center items-center flex-col gap-4'>
            <img src={Css} alt="" className='w-20 h-20'/>
            <span className='font-bold text-blue-600 font-poppins'>Css</span>
          </div>
          <div className='lg:col-span-3  md:col-span-3 sm:col-span-3 col-span-3 flex justify-center items-center flex-col gap-4'>
            <img src={boostrap} alt="" className='w-20 h-20'/>
            <span className='font-bold text-blue-600 font-poppins'>Bootrap</span>
          </div>
          <div className='lg:col-span-3  md:col-span-3 sm:col-span-3 col-span-3 flex justify-center items-center flex-col gap-4'>
            <img src={tail} alt="" className='w-20 h-20'/>
            <span className='font-bold text-blue-600 font-poppins'>TailwindCSS</span>
          </div>
          <div className='lg:col-span-3  md:col-span-3 sm:col-span-3 col-span-3 flex justify-center items-center flex-col gap-4'>
            <img src={js} alt="" className='w-20 h-20'/>
            <span className='font-bold text-blue-600 font-poppins'>JavaScript</span>
          </div>
          <div className='lg:col-span-3  md:col-span-3 sm:col-span-3  col-span-3 flex justify-center items-center flex-col gap-4'>
            <img src={react} alt="" className='w-20 h-20'/>
            <span className='font-bold text-blue-600 font-poppins'>React JS</span>
          </div>
          <div className='lg:col-span-3  md:col-span-3 sm:col-span-3  col-span-3 flex justify-center items-center flex-col gap-4'>
            <img src={Ts} alt="" className='w-20 h-20'/>
            <span className='font-bold text-blue-600 font-poppins'>TypeScript</span>
          </div>
        </div>
      </div>
    </section>

{/* Projects */}
    <section id ="Projects" className='py-9 px-20   bg-purple-900'>
            <div className='container'>
                <h1 className=' text-center text-4xl  text-white font-black'>Projects Me</h1>
                <div className='grid grid-cols-12 my-5 '>
                    <div className='col-span-12 lg:col-span-4 md:col-span-4 py-5 px-3'>
                        <img src={Movie} alt="" className='rounded-2xl w-full h-44'/>
                        <h3 className='text-xl  text-white font-black'>Movie List</h3>
                        <span className=' text-white font-semibold text-sm font-sans'>
                        Movie List adalah aplikasi yang dirancang khusus untuk meliha trailer film di bioskop dan bisa untuk memesan tiket </span>
                        <div className="flex gap-3">
                        <a href="https://barudak.vercel.app/"  className='
                        flex  gap-2 font-poppins font-bold bg-green-500 w-16 rounded-xl  text-white my-3'>
                        <FontAwesomeIcon icon={faSignInAlt } className='pt-1 ml-1' />Web</a>

                        <a href="https://github.com/AwangDarmawan/chalengge-5"  className='
                        flex  gap-2 font-poppins font-bold bg-green-500 w-20 rounded-xl  text-white my-3'>
                        <FontAwesomeIcon icon={faSignInAlt } className='pt-1 ml-1' />github</a>
                        </div>
                        <div className='flex flex-wrap gap-3 my-3 '>
                        <span className='bg-gray-300  rounded-xl font-semibold px-1'>#Boostrap</span>
                        <span className='bg-gray-300  rounded-xl font-semibold px-1'>#Api</span>
                        <span className='bg-gray-300  rounded-xl font-semibold px-1'>#React JS</span>
                        </div>
                    </div>
                    <div className='col-span-12 lg:col-span-4 md:col-span-4 py-5 px-3 '>
                        <img src={Chat} alt="" className='rounded-2xl w-full h-44'/>
                        <h3 className='text-xl  text-white font-black'>Websocket</h3>
                        <span className=' text-white font-semibold text-sm font-sans'>
                        Websocket adalah aplikasi di rancang khusus chating memberi informasi antara dua orang atau lebih</span>
                        <div className="flex gap-2">
                        <a href="https://websocket-chat-client-alpha.vercel.app/"  className='  
                        flex flex-items-center gap-2 font-poppins font-bold bg-green-500 w-16 rounded-xl  text-white my-3'>
                        <FontAwesomeIcon icon={faSignInAlt } className='pt-1 ml-1' />Web</a>
                   
                        <a href="https://github.com/AwangDarmawan/websocket-chat"  className='
                        flex  gap-2 font-poppins font-bold bg-green-500 w-20 rounded-xl  text-white my-3'>
                        <FontAwesomeIcon icon={faSignInAlt } className='pt-1 ml-1' />github</a>
                        </div>
                        <div className="flex flex-wrap  gap-3  my-2">
                        <span className="bg-gray-300 rounded-xl font-semibold px-1">#Bootstrap</span>
                        <span className="bg-gray-300 rounded-xl font-semibold px-1">#Api</span>
                        <span className="bg-gray-300 rounded-xl font-semibold px-1">#React JS</span>
                        <span className="bg-gray-300 rounded-xl font-semibold px-1">#Express JS</span>
                        <span className="bg-gray-300 rounded-xl font-semibold px-1">#PWA</span>
                        </div>
                    </div>
                    <div className='col-span-12 lg:col-span-4 md:col-span-4 py-5 px-3'>
                        <img src={projek1} alt="" className='rounded-2xl h-44 w-full'/>
                        <h3 className='text-xl  text-white font-black'>Learn X</h3>
                        <span className=' text-white font-semibold text-sm font-sans'>
                        Learn X adalah aplikasi pembelajaran yang di rancang khusus untuk membantu siswa dalam membantu pembelajaran</span>
                        <div className="flex gap-2">
                        <a  href="https://barudak.vercel.app/" className=' 
                        flex flex-items-center gap-2 font-poppins font-bold bg-green-500 w-16 rounded-xl  text-white  my-3'>
                        <FontAwesomeIcon icon={faSignInAlt } className='pt-1 ml-1' />Web</a>

                        <a href="https://github.com/dickymhikam/CP-B5-Binar"  className='
                        flex  gap-2 font-poppins font-bold bg-green-500 w-20 rounded-xl  text-white my-3'>
                        <FontAwesomeIcon icon={faSignInAlt } className='pt-1 ml-1' />github</a>
                        </div>
                        <div className="flex flex-wrap  gap-3  my-2">
                        <span className="bg-gray-300 rounded-xl font-semibold px-1">#Bootstrap</span>
                        <span className="bg-gray-300 rounded-xl font-semibold px-1">#Api</span>
                        <span className="bg-gray-300 rounded-xl font-semibold px-1">#React JS</span>
                        <span className="bg-gray-300 rounded-xl font-semibold px-1">#Team</span>
                        </div>
                    </div>
                    <div className='col-span-12 lg:col-span-4 md:col-span-4 py-5 px-3'>
                        <img src={Sims} alt="" className='rounded-2xl h-44 w-full'/>
                        <h3 className='text-xl  text-white font-black'>Sims PPOB</h3>
                        <span className=' text-white font-semibold text-sm font-sans'>
                        Sims PPOB adalah aplikasi yang di rancang khusus untuk alat transaski pembayaran digital</span>
                        <div className="flex gap-2">
                        <a href="https://simss-ppob-awang-darmawan.vercel.app/"  className='
                        flex flex-items-center gap-2 font-poppins font-bold bg-green-500 w-16 rounded-xl  text-white my-3'>
                        <FontAwesomeIcon icon={faSignInAlt } className='pt-1 ml-1' />Web</a>
                        <a href="https://github.com/AwangDarmawan/SIMSS-PPOB-AwangDarmawan"  className='
                        flex  gap-2 font-poppins font-bold bg-green-500 w-20 rounded-xl  text-white my-3'>
                        <FontAwesomeIcon icon={faSignInAlt } className='pt-1 ml-1' />github</a>
                        </div>
                        <div className="flex flex-wrap  gap-3  my-2">
                        <span className="bg-gray-300 rounded-xl font-semibold px-1">#Bootstrap</span>
                        <span className="bg-gray-300 rounded-xl font-semibold px-1">#Api</span>
                        <span className="bg-gray-300 rounded-xl font-semibold px-1">#React JS</span>
                        <span className="bg-gray-300 rounded-xl font-semibold px-1">#Context Api</span>
                        </div>
                    </div>
                    <div className='col-span-12 lg:col-span-4 md:col-span-4 py-5 px-3'>
                        <img src={Kartap} alt="" className='rounded-2xl h-44 w-full '/>
                        <h3 className='text-xl  text-white font-black'>Kartap</h3>
                        <span className=' text-white font-semibold text-sm font-sans'>
                        kartap adalah sistem Pendukung Keputusan Pengangkatan karyawan kontrak menjadi karyawan tetap di sebuah PT*** </span>
                        <div className="flex gap-2">
                        <a href="https://kartap.vercel.app/" className='  
                        flex flex-items-center gap-2 font-poppins font-bold bg-green-500 w-16  rounded-xl  text-white my-3'>
                        <FontAwesomeIcon icon={faSignInAlt } className='pt-1 ml-1' />Web</a>
                        <a href="https://github.com/AwangDarmawan/frontend_Kartap"  className='
                        flex  gap-2 font-poppins font-bold bg-green-500 w-20 rounded-xl  text-white my-3'>
                        <FontAwesomeIcon icon={faSignInAlt } className='pt-1 ml-1' />github</a>
                        </div>
                        <div className="flex flex-wrap  gap-3  my-2">
                        <span className="bg-gray-300 rounded-xl font-semibold px-1">#Bootstrap</span>
                        <span className="bg-gray-300 rounded-xl font-semibold px-1">#Api</span>
                        <span className="bg-gray-300 rounded-xl font-semibold px-1">#React JS</span>
                        </div>
                    </div>
                    <div className='col-span-12 lg:col-span-4 md:col-span-4 py-5 px-3'>
                        <img src={grow} alt="" className='rounded-2xl h-44 w-full'/>
                        <h3 className='text-xl  text-white font-black'>Cmlab</h3>
                        <span className=' text-white font-semibold text-sm font-sans'>
                        Cmlab Bussines adalah aplikasi jual beli barang </span>
                        <div className="flex gap-2">
                        <a href="https://kartap.vercel.app/" className='  
                        flex flex-items-center gap-2 font-poppins font-bold bg-green-500 w-16 rounded-xl  text-white my-3'>
                        <FontAwesomeIcon icon={faSignInAlt } className='pt-1 ml-1' />Web</a>
                        <a href="https://github.com/AwangDarmawan/cmlabs-frontend-internship-test"  className='
                        flex  gap-2 font-poppins font-bold bg-green-500 w-20 rounded-xl  text-white my-3'>
                        <FontAwesomeIcon icon={faSignInAlt } className='pt-1 ml-1' />github</a>
                        </div>
                        <div className="flex flex-wrap  gap-3  my-2">
                        <span className="bg-gray-300 rounded-xl font-semibold px-1">#Tailwindcss</span>
                        <span className="bg-gray-300 rounded-xl font-semibold px-1">#Api</span>
                        <span className="bg-gray-300 rounded-xl font-semibold px-1">#React JS</span>
                        </div>
                    </div>
                </div>
                </div>
        </section>

{/* Contact */}
      <section id='Contact' className='py-9 px-10 my-10'>
      <div className='container'>
        <h1 className=' text-center text-4xl  text-blue-600 font-black'>Contact Me</h1>
        <div className=' flex justify-center my-6'>
            <a href="https://github.com/AwangDarmawan" className=' flex gap-3 bg-gray-300 font-bold rounded-xl  text-xl justify-center w-60 '> <img src={github} alt="" className='w-10   ' />Awang Darmawan</a>
        </div>
        <div className=' flex justify-center my-6'>
            <a href="https://wa.me/6283125307355" className=' flex gap-3 bg-gray-300 font-bold rounded-xl  w-60 text-xl justify-center '> <img src={Wa} alt="" className='w-10 ' />+6283125307355</a>
        </div>
        <div className=' flex justify-center my-6 '>
            <a href="https://instagram.com/awng_drmwn" className='flex gap-2 bg-gray-300 font-bold rounded-xl w-60 text-xl justify-center '> <img src={Ig} alt="" className='w-10' /> --@awng_drmwn  </a>
        </div>
           
            
        </div>
       </section>

        {/* Footer */}
       <section >
       <div className="py-9 px-20">
       <h1 className=' text-center text-sm font-poppins text-white font-black bg-blue-600  py-20'>Copyright Awang Darmawan New 2024</h1>
       </div>
       </section>
    </>
  )
}

export default App
