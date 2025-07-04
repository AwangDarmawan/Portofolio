
import Poto from '../assets/img/png/aaw.jpg'
import potoreact from '../assets/img/iconSVG/react.svg'

function About() {
  return (
    <>
    
        <div className='container bg-gray-300 px-3  border-b-2   border-gray-200 rounded-lg shadow-sm'>
            <div className='grid grid-cols-12 sm:my-11'>
            <div className='col-span-12 lg:col-span-6  md:col-span-6 sm:col-span-12 '>
                <div className='flex  mx-auto justify-center rounded-xl'>
                 <img src={Poto} alt="" className='w-1/2  rounded-full ' />
                 <img src={potoreact} alt="" className='w-14 h-14 animate-spin-slow  mt-auto'/>
                 </div>
                </div>
                <div className='col-span-12 lg:col-span-6  md:col-span-6 sm:col-span-12 sm:my-11'>
                    <span className='flex font-bold text-gray-900'>Hi ,<span className='animate-wave pe-1'>👋</span>
                    <span className='text-lg'> I&#39;m Awang Darmawan</span></span>
                    <h2 className=' text-lg mt-2 mb-8 text-gray-900  font-black w-[24ch] overflow-hidden whitespace-nowrap border-r-4 border-r-black font-mono animate-typing'>FRONT-END WEB DEVELOPER</h2>
                    <span className='text-gray-900 font-semibold text-sm font-sans animate-blink'>
                   I am Awang Darmawan, a graduate of Informatics Engineering with a GPA of 3.64, passionate about technology especially software development and have a deep understanding of hardware fundamentals. I have completed the 5-month Kampus Merdeka program as a Frontend Developer Programmer at Binar Academy, where I gained hands-on experience in building responsive and well-structured web applications both as a team and individually, integrating RESTful APIs, and managing clean and efficient code.<br/>
                   In addition, I have also worked on several freelance projects focused on web development and graphic design, involving UI planning and technical implementation. I am proficient in technologies such as HTML, CSS, JavaScript, React.js,Next Js,Typsecript,and design tools such as Adobe Photoshop and Canva. <br />
                   With strong technical skills, creativity in UI/UX design, and a high desire to learn, I am ready to contribute to any team in building impactful and innovative digital solutions.</span>
                   <a
                      href="https://wa.me/6283125307355" 
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                    <button className=' bg-green-500 hover:bg-green-200  flex-row-reverse flex px-3 py-2 rounded-md my-5 text-white font-serif border-l-stone-50'>Let&#39;s Chat on My WhatsApp!</button>
                    </a>
                </div>
            </div>
        </div>
      
    </>
  )
}

export default About
