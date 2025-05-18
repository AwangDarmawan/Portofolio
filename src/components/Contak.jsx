
import github from "../assets/img/png/github.png"
import Wa from "../assets/img/png/Wa.png"
import Ig from "../assets/img/png/IG.png"

function Contak() {
  return (
    <>
      {/* <section id='Skills' className='py-9 px-10 my-10 '> */}
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
           
            {/* ddbhdb */}
        </div>
       {/* </section> */}
    </>
  )
}

export default Contak
