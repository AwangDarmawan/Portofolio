import React from 'react'
import projek1 from '../assets/img/png/LearnX.png'
import Chat from '../assets/img/png/Chating.png'
import Movie from '../assets/img/png/Movie.png'
import Sims from '../assets/img/png/Sims.png'
import Kartap from '../assets/img/png/Kartap.png'
import grow from '../assets/img/png/Grow.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';

function Projek() {
  return (
    <>
       <section className='py-9 px-20   bg-purple-900'>
            <div className='container'>
                <h1 className=' text-center text-4xl  text-white font-black'>Projects Me</h1>
                <div className='grid grid-cols-12 my-5 '>
                    <div className='col-span-12 lg:col-span-4 md:col-span-4 py-5 px-3'>
                        <img src={Movie} alt="" className='rounded-2xl w-full h-44'/>
                        <h3 className='text-xl  text-white font-black'>Movie List</h3>
                        <span className=' text-white font-semibold text-sm font-sans'>
                        Movie List adalah aplikasi yang dirancang khusus untuk meliha trailer film di bioskop dan bisa untuk memesan tiket </span>
                        <a href="https://barudak.vercel.app/"  className='
                        flex flex-items-center gap-2 font-poppins font-bold bg-green-500 w-16 rounded-xl  text-white my-3'>
                        <FontAwesomeIcon icon={faSignInAlt } className='pt-1 ml-1' />Web</a>
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
                        <a href="https://websocket-chat-client-alpha.vercel.app/"  className='  
                        flex flex-items-center gap-2 font-poppins font-bold bg-green-500 w-16 rounded-xl  text-white my-3'>
                        <FontAwesomeIcon icon={faSignInAlt } className='pt-1 ml-1' />Web</a>
                   
                        <div className="flex flex-wrap  gap-3  my-2">
                        <span className="bg-gray-300 rounded-xl font-semibold px-1">#Bootstrap</span>
                        <span className="bg-gray-300 rounded-xl font-semibold px-1">#Api</span>
                        <span className="bg-gray-300 rounded-xl font-semibold px-1">#React JS</span>
                        <span className="bg-gray-300 rounded-xl font-semibold px-1">#Express JS</span>
                        <span className="bg-gray-300 rounded-xl font-semibold px-1">#PWA</span>
                        </div>
                    </div>
                    <div className='col-span-12 lg:col-span-4 md:col-span-4 py-5 px-3'>
                        <img src={projek1} alt="" className='rounded-2xl'/>
                        <h3 className='text-xl  text-white font-black'>Learn X</h3>
                        <span className=' text-white font-semibold text-sm font-sans'>
                        Learn X adalah aplikasi pembelajaran yang di rancang khusus untuk membantu siswa dalam membantu pembelajaran</span>
                        <a  href="https://barudak.vercel.app/" className=' 
                        flex flex-items-center gap-2 font-poppins font-bold bg-green-500 w-16 rounded-xl  text-white  my-3'>
                        <FontAwesomeIcon icon={faSignInAlt } className='pt-1 ml-1' />Web</a>
                        <div className="flex flex-wrap  gap-3  my-2">
                        <span className="bg-gray-300 rounded-xl font-semibold px-1">#Bootstrap</span>
                        <span className="bg-gray-300 rounded-xl font-semibold px-1">#Api</span>
                        <span className="bg-gray-300 rounded-xl font-semibold px-1">#React JS</span>
                        <span className="bg-gray-300 rounded-xl font-semibold px-1">#Team</span>
                        </div>
                    </div>
                    <div className='col-span-12 lg:col-span-4 md:col-span-4 py-5 px-3'>
                        <img src={Sims} alt="" className='rounded-2xl'/>
                        <h3 className='text-xl  text-white font-black'>Sims PPOB</h3>
                        <span className=' text-white font-semibold text-sm font-sans'>
                        Sims PPOB adalah aplikasi yang di rancang khusus untuk alat transaski pembayaran digital</span>
                        <a href="https://simss-ppob-awang-darmawan.vercel.app/"  className='
                        flex flex-items-center gap-2 font-poppins font-bold bg-green-500 w-16 rounded-xl  text-white my-3'>
                        <FontAwesomeIcon icon={faSignInAlt } className='pt-1 ml-1' />Web</a>
                        <div className="flex flex-wrap  gap-3  my-2">
                        <span className="bg-gray-300 rounded-xl font-semibold px-1">#Bootstrap</span>
                        <span className="bg-gray-300 rounded-xl font-semibold px-1">#Api</span>
                        <span className="bg-gray-300 rounded-xl font-semibold px-1">#React JS</span>
                        <span className="bg-gray-300 rounded-xl font-semibold px-1">#Context Api</span>
                        </div>
                    </div>
                    <div className='col-span-12 lg:col-span-4 md:col-span-4 py-5 px-3'>
                        <img src={Kartap} alt="" className='rounded-2xl '/>
                        <h3 className='text-xl  text-white font-black'>Kartap</h3>
                        <span className=' text-white font-semibold text-sm font-sans'>
                        kartap adalah sistem Pendukung Keputusan Pengangkatan karyawan kontrak menjadi karyawan tetap di sebuah PT*** </span>
                        <a href="https://kartap.vercel.app/" className='  
                        flex flex-items-center gap-2 font-poppins font-bold bg-green-500 w-16  rounded-xl  text-white my-3'>
                        <FontAwesomeIcon icon={faSignInAlt } className='pt-1 ml-1' />Web</a>
                        <div className="flex flex-wrap  gap-3  my-2">
                        <span className="bg-gray-300 rounded-xl font-semibold px-1">#Bootstrap</span>
                        <span className="bg-gray-300 rounded-xl font-semibold px-1">#Api</span>
                        <span className="bg-gray-300 rounded-xl font-semibold px-1">#React JS</span>
                        </div>
                    </div>
                    <div className='col-span-12 lg:col-span-4 md:col-span-4 py-5 px-3'>
                        <img src={grow} alt="" className='rounded-2xl'/>
                        <h3 className='text-xl  text-white font-black'>Cmlab</h3>
                        <span className=' text-white font-semibold text-sm font-sans'>
                        Cmlab Bussines adalah aplikasi jual beli barang </span>
                        <a href="https://kartap.vercel.app/" className='  
                        flex flex-items-center gap-2 font-poppins font-bold bg-green-500 w-16 rounded-xl  text-white my-3'>
                        <FontAwesomeIcon icon={faSignInAlt } className='pt-1 ml-1' />Web</a>
                        <div className="flex flex-wrap  gap-3  my-2">
                        <span className="bg-gray-300 rounded-xl font-semibold px-1">#Tailwindcss</span>
                        <span className="bg-gray-300 rounded-xl font-semibold px-1">#Api</span>
                        <span className="bg-gray-300 rounded-xl font-semibold px-1">#React JS</span>
                        </div>
                    </div>
                </div>
                </div>
        </section>
    </>
  )
}

export default Projek
