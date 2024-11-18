import React, { useState } from "react";
import ReactJS from "../assets/img/iconSVG/react.svg"
import Toggle from "../assets/img/iconSVG/Toogle.svg"
import github from "../assets/img/png/github.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faEnvelope, faBriefcase, faLightbulb } from '@fortawesome/free-solid-svg-icons';

function Nav() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <>
    <nav className="py-4 px-20 fixed  w-full">
      <div className="container  ">
        <div className="flex items-center justify-between">
            <div className="flex flex-row-reverse gap-2 ">
                <img
                    src={ReactJS}
                    alt=""
                    className="order-1 sm:order-2 w-14 h-14 animate-spin-slow"
                />
                <span className="my-auto font-black text-white bg-blue-700">FRONTEND WEB</span>
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
                <a href="" className="text-white bg-blue-700 text-sm font-black hover:  hover:bg-sky-700 ">
                  Home
                </a>
              </li>
              <li>
                <a href="#Skills" className="text-white bg-blue-700 text-sm font-black hover:bg-sky-700  ">
                  Skills
                </a>
              </li>
              <li>
                <a href="" className="text-white  bg-blue-700 text-sm font-black hover: hover:bg-sky-700  ">
                  Project
                </a>
              </li>
              <li>
                <a href="" className="text-white bg-blue-700 text-sm font-black hover: hover:bg-sky-700  ">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="order-3 hidden sm:block">
            <button className="grow bg-white px-2 py-2 font-bold text-grey rounded-full text-sm hover:bg-sky-700">
              <img src={github} alt=""  className="w-6"/>
            </button>
           
            {/* <button className="grow bg-ungu px-8 py-4 font-bold text-white rounded-full text-sm">
              Sign Up
            </button> */}
          </div>
        </div>
        {navOpen && (
          <div
            className="z-50 fixed bottom-0 right-0 left-0 p-4 bg-blue-600 border lg:hidden "
          >
            <ul className="flex justify-between">
              <li>
                <button className="flex justify-center flex-col items-center gap-1 hover:bg-sky-700 ">
                <FontAwesomeIcon icon={faHome}  className="text-white"/> 
                  <a className=" text-white font-black text-base ">Home</a>
                </button>
              </li>
              <li>
                <button className="flex justify-center flex-col items-center gap-1 hover:bg-sky-700">
                <FontAwesomeIcon icon={faLightbulb} className="text-white" />
                  <span className="text-white font-black text-base text-bold">Skill</span>
                </button>
              </li>
              <li>
                <button className="flex justify-center flex-col items-center gap-1 hover:bg-sky-700">
                <FontAwesomeIcon icon={faBriefcase} className="text-white" /> 
                  <span className="text-white font-black text-base text-bold">Project</span>
                </button>
              </li>
              <li>
                <button className="flex justify-center flex-col items-center gap-1 hover:bg-sky-700">
                <FontAwesomeIcon icon={faEnvelope} className="text-white"/> 
                  <span className="text-white font-black text-base text-bold">Contact</span>
                </button>
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
