
import Wa from "../assets/img/png/Wa.png"
import Ig from "../assets/img/png/IG.png"
import github from "../assets/img/png/github.png"
function Contak() {
  return (
    <>
     
      <div className='container'>
        <h1 className=' text-center text-4xl text-gray-900  font-black '>Contact Me</h1>
        <div className=' flex justify-center my-6'>
            <a  className=' flex gap-3 bg-gray-300 font-bold rounded-xl  text-xl justify-center w-60 '> <img src={github} alt="" className='w-10' />See contact me</a>
        </div>
        <div className=' flex justify-center my-6'>
            <a href="https://wa.me/6283125307355" className=' flex gap-3 bg-gray-300 font-bold rounded-xl  w-60 text-xl justify-center   hover:bg-green-200 hover:scale-105 hover:shadow-2xl transition-all duration-300'> <img src={Wa} alt="" className='w-10 ' />+6283125307355</a>
        </div>
        <div className=' flex justify-center my-6 '>
            <a href="https://instagram.com/awng_drmwn" className='flex gap-2 bg-gray-300 font-bold rounded-xl w-60 text-xl justify-center   hover:bg-red-200 hover:scale-105 hover:shadow-2xl transition-all duration-300'> <img src={Ig} alt="" className='w-10' /> --@awng_drmwn  </a>
        </div>
       
        </div>
    
    </>
  )
}

export default Contak
