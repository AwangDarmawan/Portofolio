
import projek1 from '../assets/img/png/LearnX.png'
import Chat from '../assets/img/png/Chating.png'
import Sims from '../assets/img/png/Sims.png'
import Kartap from '../assets/img/png/Kartap.png'
import Kledo from '../assets/img/png/appkledo.png'
import grow from '../assets/img/png/d.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';


function Projek() {
  return (
    <>
       {/* <section className='py-9 px-20   bg-purple-900'> */}
            <div className='container'>
                <h1 className=' text-center text-4xl  text-white font-black'>
                    My Project</h1>
                <div className='grid grid-cols-12 my-5'>
                       <div className='col-span-12 lg:col-span-4 md:col-span-4 py-5 px-3'>
                        <img src={Sims} alt="" className='rounded-2xl  w-full h-44'/>
                        <h3 className='text-xl  text-white font-black'>Sims PPOB</h3>
                        <span className=' text-white font-semibold text-sm font-sans'>
                        Sims PPOB adalah aplikasi yang di rancang khusus untuk alat transaski pembayaran digital</span>
                        <div className="flex gap-2">
                        <a href="https://esimsppob.vercel.app/"  className='
                        flex flex-items-center gap-2 font-poppins font-bold bg-green-500 w-16 rounded-xl  text-white my-3'>
                        <FontAwesomeIcon icon={faSignInAlt } className='pt-1 ml-1' />Web</a>
                       
                        </div>
                        <div className="flex flex-wrap  gap-3  my-2">
                        <span className="bg-gray-300 rounded-xl font-semibold px-1">#Bootstrap</span>
                        <span className="bg-gray-300 rounded-xl font-semibold px-1">#Api</span>
                        <span className="bg-gray-300 rounded-xl font-semibold px-1">#React JS</span>
                        <span className="bg-gray-300 rounded-xl font-semibold px-1">#Context Api</span>
                        </div>
                    </div>
                <div className='col-span-12 lg:col-span-4 md:col-span-4 py-5 px-3'>
                        <img src={grow} alt="" className='rounded-2xl'/>
                        <h3 className='text-xl  text-white font-black'>You App</h3>
                        <span className=' text-white font-semibold text-sm font-sans'>
                        You App adalah aplikasi yang di rancang khusus untuk mengetahui zodiac dan horoscope seseorang </span>
                        <div className="flex gap-2">
                        <a href="https://awang-app-test.vercel.app/" className='  
                        flex flex-items-center gap-2 font-poppins font-bold bg-green-500 w-16 rounded-xl  text-white my-3'>
                        <FontAwesomeIcon icon={faSignInAlt } className='pt-1 ml-1' />Web</a>
                       
                        </div>
                        <div className="flex flex-wrap  gap-3  my-2">
                        <span className="bg-gray-300 rounded-xl font-semibold px-1">#Tailwindcss</span>
                        <span className="bg-gray-300 rounded-xl font-semibold px-1">#Api</span>
                        <span className="bg-gray-300 rounded-xl font-semibold px-1">#Next JS</span>
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
                        <img src={projek1} alt="" className='rounded-2xl'/>
                        <h3 className='text-xl  text-white font-black'>Learn X</h3>
                        <span className=' text-white font-semibold text-sm font-sans'>
                        Learn X adalah aplikasi pembelajaran yang di rancang khusus untuk membantu siswa dalam membantu pembelajaran</span>
                        <div className="flex gap-2">
                        <a  href="https://learnx5.vercel.app/" className=' 
                        flex flex-items-center gap-2 font-poppins font-bold bg-green-500 w-16 rounded-xl  text-white  my-3'>
                        <FontAwesomeIcon icon={faSignInAlt } className='pt-1 ml-1' />Web</a>
                       
                        </div>
                        <div className="flex flex-wrap  gap-3  my-2">
                        <span className="bg-gray-300 rounded-xl font-semibold px-1">#Bootstrap</span>
                        <span className="bg-gray-300 rounded-xl font-semibold px-1">#Api</span>
                        <span className="bg-gray-300 rounded-xl font-semibold px-1">#React JS</span>
                        <span className="bg-gray-300 rounded-xl font-semibold px-1">#Team</span>
                        </div>
                    </div>
                    <div className='col-span-12 lg:col-span-4 md:col-span-4 py-5 px-3'>
                        <img src={Kartap} alt="" className='rounded-2xl '/>
                        <h3 className='text-xl  text-white font-black'>Kartap</h3>
                        <span className=' text-white font-semibold text-sm font-sans'>
                        kartap adalah sistem Pendukung Keputusan Pengangkatan karyawan kontrak menjadi karyawan tetap di sebuah PT*** </span>
                        <div className="flex gap-2">
                        <a href="https://kartap.vercel.app/" className='  
                        flex flex-items-center gap-2 font-poppins font-bold bg-green-500 w-16  rounded-xl  text-white my-3'>
                        <FontAwesomeIcon icon={faSignInAlt } className='pt-1 ml-1' />Web</a>
                     
                        </div>
                        
                        <div className="flex flex-wrap  gap-3  my-2">
                        <span className="bg-gray-300 rounded-xl font-semibold px-1">#Bootstrap</span>
                        <span className="bg-gray-300 rounded-xl font-semibold px-1">#Api</span>
                        <span className="bg-gray-300 rounded-xl font-semibold px-1">#React JS</span>
                        </div>
                    </div>
                
                    <div className='col-span-12 lg:col-span-4 md:col-span-4 py-5 px-3'>
                        <img src={Kledo} alt="" className='rounded-2xl '/>
                        <h3 className='text-xl  text-white font-black'>App Kledo</h3>
                        <span className=' text-white font-semibold text-sm font-sans'>
                        Kledo adalah Aplikasi yang di rancang khusu untuk mendata anggota dan mencari/melihat barang di sebuah perusahaan   </span>
                        <div className="flex gap-2">
                        <a href="https://app-kledo.vercel.app/" className='  
                        flex flex-items-center gap-2 font-poppins font-bold bg-green-500 w-16  rounded-xl  text-white my-3'>
                        <FontAwesomeIcon icon={faSignInAlt } className='pt-1 ml-1' />Web</a>
                       
                        </div>
                        
                        <div className="flex flex-wrap  gap-3  my-2">
                        <span className="bg-gray-300 rounded-xl font-semibold px-1">#Tailwind</span>
                        <span className="bg-gray-300 rounded-xl font-semibold px-1">#Api</span>
                        <span className="bg-gray-300 rounded-xl font-semibold px-1">#React JS</span>
                        <span className="bg-gray-300 rounded-xl font-semibold px-1">#Redux Toolkit</span>
                        </div>
                    </div>
                    
                </div>
                    
               
                </div>
                
        {/* </section> */}
    </>
  )
}

export default Projek
