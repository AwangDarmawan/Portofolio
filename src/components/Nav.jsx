import { useState } from "react";
import ReactJS from "../assets/img/iconSVG/react.svg"
import github from "../assets/img/png/github.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faEnvelope, faBriefcase, faLightbulb,faBars} from '@fortawesome/free-solid-svg-icons';

function Nav() {
  const [navOpen, setNavOpen] = useState(true);

  return (
    <>
     <nav className=" w-full  px-10">
      <div className="container  bg-gray-300  border-2  border-gray-200 rounded-lg shadow-sm ">
        <div className="flex justify-between">
            <div className="flex flex-row-reverse gap-2 ">
                <img
                    src={ReactJS}
                    alt=""
                    className="order-1 sm:order-2 w-14 h-14 animate-spin-slow"
                />
                <span className="my-auto font-black text-gray-900 ">FRONTEND WEB</span>
            </div>
          <FontAwesomeIcon
            icon={faBars}
            onClick={() => setNavOpen(!navOpen)}
            className="text-black hover:text-gray-500 w-10 h-7 my-5  mx-2 cursor-pointer order-2 sm:order-1 lg:hidden"
            />
          <div className="order-2 hidden lg:block  my-5">
            <ul className="flex gap-16">
              <li>
                <a href="#About" className=" text-gray-900    text-sm font-black hover:  hover:bg-gray-200 ">
                  Home
                </a>
              </li>
              <li>
                <a href="#Skill" className=" text-gray-900    text-sm font-black hover:bg-gray-200   ">
                Skills
                </a>
              </li>
              <li>
                <a href="#Projects" className=" text-gray-900    text-sm font-black hover: hover:bg-gray-200  ">
                  My Project
                </a>
              </li>
              <li>
                <a href="#Contact" className=" text-gray-900    text-sm font-black hover: hover:bg-gray-200  ">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="order-3 hidden sm:block mt-3 mx-3 ">
            <button className="grow bg-white px-2 py-2 font-bold text-grey rounded-full text-sm hover:bg-sky-700">
              <img src={github} alt=""  className="w-6"/>
            </button>
           
            
          </div>
        </div>
        {navOpen && (
          <div
            className="z-50 fixed bottom-0 right-0 left-0  py-4 px-2 mx-10 bg-gray-300 border-2  border-gray-200 rounded-lg shadow-sm   lg:hidden "
          >
            <ul className="flex justify-between">
              <li>
                <a href="#About" className="flex justify-center flex-col items-center gap-1 hover:bg-gray-200 ">
                <FontAwesomeIcon icon={faHome}  className="text-gray-900  font-bold"/> 
                  <a className=" text-gray-900  font-black text-base ">Home</a>
                </a>
              </li>
              <li>
                <a href="#Skill" className="flex justify-center flex-col items-center gap-1 hover:bg-gray-200">
                <FontAwesomeIcon icon={faLightbulb} className="text-gray-900  font-bold" />
                  <span className="text-gray-900  font-black text-base text-bold">Skill</span>
                </a>
              </li>
              <li>
                <a href="#Projects" className="flex justify-center flex-col items-center gap-1 hover:bg-gray-200">
                <FontAwesomeIcon icon={faBriefcase} className="text-gray-900  font-bold" /> 
                  <span className="text-gray-900  font-black text-base text-bold">
                  My Project</span>
                </a>
              </li>
              <li>
                <a href="#Contact" className="flex justify-center flex-col items-center gap-1 hover:bg-gray-200">
                <FontAwesomeIcon icon={faEnvelope} className="text-gray-900  font-bold"/> 
                  <span className="text-gray-900  font-black text-base text-bold">Contact</span>
                </a>
              </li>
              
            </ul>
           
          </div>
        )}
      </div>
    </nav>
    </>
  );
}

export default Nav;
