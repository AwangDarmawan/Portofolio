
import Poto from '../assets/img/png/Awang.jpg'
import potoreact from '../assets/img/iconSVG/react.svg'

function About() {
  return (
    <>
      {/* <section className='py-20 px-10 bg-blue-600'> */}
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
                   I am Awang Darmawan, a graduate of Informatics Engineering with a GPA of 3.64. I have an interest and competence in the field of technology, especially in software development and basic understanding of hardware. I have participated in the Kampus Merdeka program for 5 months, an internship program and Independent Study as a Frontend Developer Programmer at Binar Academy. In addition, I have also worked on several freelance projects, where I developed web applications with a focus on user interface (UI) design, REST API integration, and efficient and structured code management.</span>
                   <a
                      href="https://wa.me/6283125307355" 
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                    <button className=' bg-green-500 hover:bg-green-200  flex-row-reverse flex px-3 py-2 rounded-md my-5 text-white font-serif border-l-stone-50'>Let's Chat on My WhatsApp!</button>
                    </a>
                </div>
            </div>
        </div>
      {/* </section> */}
    </>
  )
}

export default About
