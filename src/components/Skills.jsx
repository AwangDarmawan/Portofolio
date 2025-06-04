
import Html from '../assets/img/png/Html.png';
import Css from '../assets/img/png/css.png';
import boostrap from '../assets/img/png/Boostrap.png';
import tail from '../assets/img/png/Tailwindcss.png';
import js from '../assets/img/png/images.png';
import react from '../assets/img/png/ReactJs.png';
import Next from '../assets/img/png/NextJs.png';
import Vue from '../assets/img/png/Vue.png';
import Ts from '../assets/img/png/Ts.png'

function Skills() {
  const skills = [
    { img: Html, name: "HTML" },
    { img: Css, name: "CSS" },
    { img: boostrap, name: "Bootstrap" },
    { img: tail, name: "TailwindCSS" },
    { img: js, name: "JavaScript" },
    { img: react, name: "React JS" },
    { img: Next, name: "Next JS" },
    { img: Vue, name: "Vue JS" },
    { img: Ts, name: "TypeScript" },
  ];

  return (
    <div className="container mx-auto my-10 px-4 py-8 bg-gray-300  border-b-2  border-gray-200  900 rounded-2xl shadow-xl transition-colors duration-300">
      <h1 className="text-center text-4xl font-black text-gray-800 d mb-6">
        SKILLS
      </h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 justify-items-center">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-gray-100 hover:scale-105 hover:shadow-2xl transition-all duration-300 rounded-xl p-4 flex flex-col items-center"
          >
            <img src={skill.img} alt={skill.name} className="w-16 h-16 mb-2" />
            <span className="text-sm sm:text-base font-semibold text-gray-800  ">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Skills;
