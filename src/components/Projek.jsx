
import projek1 from '../assets/img/png/LearnX.png'
import Chat from '../assets/img/png/Chating.png'
import Sims from '../assets/img/png/Sims.png'
import Kartap from '../assets/img/png/Kartap.png'
import Kledo from '../assets/img/png/appkledo.png'
import grow from '../assets/img/png/d.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf, faSignInAlt } from '@fortawesome/free-solid-svg-icons';


function Projek() {
  return (
    <>
            <div className='container bg-gray-300 px-3 border-b-2  border-gray-200 rounded-lg shadow-sm '>
                <h1 className=' text-center text-4xl  text-gray-900  font-bold'>
                    MY PROJECTS</h1>
                <div className='grid grid-cols-12 my-5'>
                       <div className='col-span-12 lg:col-span-4 md:col-span-4 py-5 px-3 hover:scale-105 hover:shadow-2xl transition-all duration-300 rounded-xl '>
                        <img src={Sims} alt="" className='rounded-2xl  w-full h-44'/>
                        <h3 className='text-xl  text-gray-900  font-bold '>Sims PPOB</h3>
                        <span className=' text-gray-600 font-semibold text-sm font-sans'>
                       Sims PPOB is an application specifically designed for digital payment transaction tools.</span>
                        <div className="flex gap-2">
                        <a href="https://esimsppob.vercel.app/"  className='
                        flex flex-items-center gap-2 font-poppins font-bold bg-green-500 w-16 rounded-xl  text-white my-3'>
                        <FontAwesomeIcon icon={faSignInAlt } className='pt-1 ml-1' />Web</a>
                       
                        </div>
                        <div className="flex flex-wrap  gap-3  my-2">
                        <span className="bg-white rounded-xl font-semibold px-1">#Bootstrap</span>
                        <span className="bg-white rounded-xl font-semibold px-1">#Api</span>
                        <span className="bg-white rounded-xl font-semibold px-1">#React TS</span>
                        <span className="bg-white rounded-xl font-semibold px-1">#Redux</span>
                         <span className="bg-white rounded-xl font-semibold px-1">#TypesScript</span>

                        </div>
                    </div>
                <div className='col-span-12 lg:col-span-4 md:col-span-4 py-5 px-3 hover:scale-105 hover:shadow-2xl transition-all duration-300 rounded-xl '>
                        <img src={grow} alt="" className='rounded-2xl w-full h-44'/>
                        <h3 className='text-xl  text-gray-900  font-bold '>You App</h3>
                        <span className=' text-gray-600 font-semibold text-sm font-sans'>
                         You App is an application specifically designed to find out a person&#39;s zodiac and horoscope</span>
                        <div className="flex gap-2">
                        <a href="https://awang-app-test.vercel.app/" className='  
                        flex flex-items-center gap-2 font-poppins font-bold bg-green-500 w-16 rounded-xl  text-white my-3'>
                        <FontAwesomeIcon icon={faSignInAlt } className='pt-1 ml-1' />Web</a>
                       
                        </div>
                        <div className="flex flex-wrap  gap-3  my-2">
                        <span className="bg-white rounded-xl font-semibold px-1">#Tailwindcss</span>
                        <span className="bg-white rounded-xl font-semibold px-1">#Api</span>
                        <span className="bg-white rounded-xl font-semibold px-1">#Next JS</span>
                        </div>
                    </div>
                    <div className='col-span-12 lg:col-span-4 md:col-span-4 py-5 px-3 hover:scale-105 hover:shadow-2xl transition-all duration-300 rounded-xl  '>
                        <img src={Chat} alt="" className='rounded-2xl w-full h-44'/>
                        <h3 className='text-xl  text-gray-900  font-bold '>Websocket</h3>
                        <span className=' text-gray-600 font-semibold text-sm font-sans'>
                          Websocket is an application specifically designed for chatting and sharing information between two or more people. The server does not host it locally.</span>
                        <div className="flex gap-2">
                        <a href="https://websocket-chat-client-alpha.vercel.app/"  className='  
                        flex flex-items-center gap-2 font-poppins font-bold bg-green-500 w-16 rounded-xl  text-white my-3'>
                        <FontAwesomeIcon icon={faSignInAlt } className='pt-1 ml-1' />Web</a>
                   
                        
                        </div>
                   
                        <div className="flex flex-wrap  gap-3  my-2">
                        <span className="bg-white rounded-xl font-semibold px-1">#Bootstrap</span>
                        <span className="bg-white rounded-xl font-semibold px-1">#Api</span>
                        <span className="bg-white rounded-xl font-semibold px-1">#React JS</span>
                        <span className="bg-white rounded-xl font-semibold px-1">#Express JS</span>
                        <span className="bg-white rounded-xl font-semibold px-1">#Progressive Web Apps</span>
                        </div>
                    </div>
                    
                 
                    <div className='col-span-12 lg:col-span-4 md:col-span-4 py-5 px-3 hover:scale-105 hover:shadow-2xl transition-all duration-300 rounded-xl '>
                        <img src={projek1} alt="" className='rounded-2xl w-full h-44'/>
                        <h3 className='text-xl  text-gray-900  font-bold '>Learn X</h3>
                        <span className=' text-gray-600 font-semibold text-sm font-sans'>
                        Learn X is a learning application that is specifically designed to help students in learning.</span>
                        <div className="flex gap-2">
                        <a  href="https://learnx5.vercel.app/" className=' 
                        flex flex-items-center gap-2 font-poppins font-bold bg-green-500 w-16 rounded-xl  text-white  my-3'>
                        <FontAwesomeIcon icon={faSignInAlt } className='pt-1 ml-1' />Web</a>
                       
                        </div>
                        <div className="flex flex-wrap  gap-3  my-2">
                        <span className="bg-white rounded-xl font-semibold px-1">#Bootstrap</span>
                        <span className="bg-white rounded-xl font-semibold px-1">#Api</span>
                        <span className="bg-white rounded-xl font-semibold px-1">#React JS</span>
                        <span className="bg-white rounded-xl font-semibold px-1">#Team</span>
                        </div>
                    </div>
                    <div className='col-span-12 lg:col-span-4 md:col-span-4 py-5 px-3 hover:scale-105 hover:shadow-2xl transition-all duration-300 rounded-xl '>
                        <img src={Kartap} alt="" className='rounded-2xl w-full h-44'/>
                        <h3 className='text-xl  text-gray-900  font-bold '>Kartap</h3>
                        <span className=' text-gray-600 font-semibold text-sm font-sans'>
                         Kartap is a decision support system for appointing contract employees to permanent employees at a PT*** </span>
                        <div className="flex gap-2">
                        <a href="https://kartap.vercel.app/" className='  
                        flex flex-items-center gap-2 font-poppins font-bold bg-green-500 w-16  rounded-xl  text-white my-3'>
                        <FontAwesomeIcon icon={faSignInAlt } className='pt-1 ml-1' />Web</a>
                     
                        </div>
                        
                        <div className="flex flex-wrap  gap-3  my-2">
                        <span className="bg-white rounded-xl font-semibold px-1">#Bootstrap</span>
                        <span className="bg-white rounded-xl font-semibold px-1">#Api</span>
                        <span className="bg-white rounded-xl font-semibold px-1">#React JS</span>
                        </div>
                    </div>
                
                    <div className='col-span-12 lg:col-span-4 md:col-span-4 py-5 px-3 hover:scale-105 hover:shadow-2xl transition-all duration-300 rounded-xl '>
                        <img src={Kledo} alt="" className='rounded-2xl w-full h-44'/>
                        <h3 className='text-xl  text-gray-900  font-bold '>App Kledo</h3>
                        <span className=' text-gray-600 font-semibold text-sm font-sans'>
                         Kledo is an application specifically designed to record member data and search for/view goods in a company. </span>
                        <div className="flex gap-2">
                        <a href="https://app-kledo.vercel.app/" className='  
                        flex flex-items-center gap-2 font-poppins font-bold bg-green-500 w-16  rounded-xl  text-white my-3'>
                        <FontAwesomeIcon icon={faSignInAlt } className='pt-1 ml-1' />Web</a>
                       
                        </div>
                        
                        <div className="flex flex-wrap  gap-3  my-2">
                        <span className="bg-white rounded-xl font-semibold px-1">#Tailwind</span>
                        <span className="bg-white rounded-xl font-semibold px-1">#Api</span>
                        <span className="bg-white rounded-xl font-semibold px-1">#React TS</span>
                        <span className="bg-white rounded-xl font-semibold px-1">#Redux</span>
                           <span className="bg-white rounded-xl font-semibold px-1">#TypeScript</span>
                        </div>
                    </div>
                </div>
                
                    
                 
                   <div className="  rounded-2xl flex flex-col justify-between text-center items-center py-5">
                 <h3 className='text-xl  text-gray-900  font-bold '>Design Portfolio (PDF)</h3>
             <a 
             href="https://drive.google.com/file/d/1Ecs8QFhEnjSMo7VT1vk8N2SaZxsV3dQe/view?usp=drivesdk" 
             download 
             className='flex items-center gap-2 font-poppins font-bold  w-fit px-4 py-2 rounded-xl text-white mt-2  bg-green-500 hover:bg-green-200 hover:scale-105 hover:shadow-2xl transition-all duration-300 '
            >
           <FontAwesomeIcon icon={faFilePdf} className='pt-1' />
            Download PDF
            </a>
           </div>
        </div>

   
                
     
    </>
  )
}

export default Projek
