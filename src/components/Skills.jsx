import SkillAnimation from "./FlipCard/SkillAnimation"
import blog1 from '../images/blog1.png'
import blog2 from '../images/blog2.png'
import { useNavigate } from 'react-router-dom';
// import Aos from 'aos';
import 'aos/dist/aos.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faJs, faNodeJs, faReact } from "@fortawesome/free-brands-svg-icons";
import { faAddressBook, faDatabase, faHome, faLightbulb } from "@fortawesome/free-solid-svg-icons";
const Skills = () => {
  const program = ['C', 'C++', 'JavaScript', 'TypeScript']
  const frontned = ['HTML5', 'Bootstrap', 'React.js', 'Angular 9']
  const backend = ['Node.js', 'Express.js']
  const databse = ['MySQL', 'MongoDB']
  const devops = ['Linux', 'Shell Scripting', 'Docker', 'Jenkins']
  const git = ['Git', 'GitHub']
  const platforms = ['ServiceNow', 'MS Teams', 'Outlook', 'Active Directory', 'Office 365','Windows OS']
  const navigate = useNavigate()
  return (
    <div data-aos="fade">
      <div className="skiils flex justify-center mt-20">
        <h1 className='text-7xl font-serif tracking-widest text-transparent bg-clip-text shadow-2xl p-1 bg-gradient-to-r from-lime-500 via-green-500 to-emerald-500'>SKILLS</h1>
      </div>
      <div className="mt-16">
    <SkillAnimation item = {program}/>
    <SkillAnimation item = {frontned}/>
    <SkillAnimation item = {backend}/>
    <SkillAnimation item = {devops}/>
    <SkillAnimation item = {databse}/>
    <SkillAnimation item = {platforms}/>
    <SkillAnimation item = {git}/>
      </div>
      <div className="project mt-16 justify-center font-serif flex ">
        <h1 className=" text-5xl tracking-widest shadow-2xl p-3  text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-orange-500">PROJECT</h1>
      </div>
      <div data-aos="fade-right" className="md:mx-24 mx-7 mt-16 shadow-2xl md:p-10">
        <h1 className="md:text-3xl md:mx-0 mx-3 text-white font-mono font-medium">Blogging Platform (MERN Stack)</h1> <br />
      <div className="md:flex md:justify-end justify-center">
    <img src={blog1} className="md:text-right h-52 md:absolute" alt="" />
    <img src={blog2} className="md:text-right md:h-60 md:absolute mt-10 md:mt-60" alt="" />
      </div>
        <p className="text-white md:mt-0 mt-10 text-xl md:mx-0 mx-5">React.js <FontAwesomeIcon icon={faReact}/> • Node.js <FontAwesomeIcon icon={faNodeJs}/> • Express.js <FontAwesomeIcon icon={faJs}/> • MongoDB <FontAwesomeIcon icon={faDatabase}/> • Postman</p> <br />
        <p data-aos="fade-up" className="md:w-2/4 text-white font-semibold font-mono md:mx-0 mx-5">A simple and user-friendly blogging platform built using the MERN stack, allowing users to create, edit, delete, and browse blog posts. Includes secure authentication, comment features, and a responsive UI for smooth reading and writing experiences.</p>
        <ul  data-aos="fade-up" className="mt-10 text-white space-y-2 list-disc font-medium tracking-wider md:w-2/4 md:mx-0 mx-5">
          <li>Developed a full-stack blogging website using MERN (MongoDB, Express, React, Node).</li>
          <li>Implemented secure user authentication using JWT and encrypted passwords.</li>
          <li>Added features like create/edit/delete posts, comments, likes, and tags.</li>
          <li>Built a clean, responsive UI in React for seamless blogging experience.</li>
          <li>Designed MongoDB schemas for users, posts, and comments using Mongoose.</li>
          <li>Created REST APIs in Node/Express and tested using Postman.</li>
          <li>Integrated role-based features and basic moderation tools.</li>
          <li>Deployed using Docker/Nginx.</li><br />
        </ul>
      </div>
       <div className="btn mt-20 flex gap-5 md:gap-24 justify-center text-white">
              <button className='bg-lime-400 text-blue-950  p-3 rounded-md font-bold shadow-md hover:bg-orange-200' onClick={() => navigate('/about')}>Home
                <FontAwesomeIcon icon={faHome} className='mx-2 text-xl' />
              </button>
              <button className='bg-lime-400 text-blue-950  p-1 rounded-md font-bold shadow-md hover:bg-yellow-200' onClick={() => navigate('/skills')}>Skiils
                <FontAwesomeIcon icon={faLightbulb} className='mx-2 text-xl' />
              </button>
              <button className='bg-lime-400 text-blue-950  p-1 rounded-md font-bold shadow-md hover:bg-green-400' onClick={() => navigate('/contact')}>Contact
                <FontAwesomeIcon icon={faAddressBook} className='mx-2 text-xl' />
              </button>
            </div>
      
      
        <br /><br /><br /><br /><br /><br />
    </div>
  )
}

export default Skills
