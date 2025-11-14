import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact } from "@fortawesome/free-brands-svg-icons";
import photo from '../photo2.jpeg'
import Flipcard from './FlipCard/Flipcard'
import { faDocker } from '@fortawesome/free-brands-svg-icons/faDocker';
import { faDatabase } from '@fortawesome/free-solid-svg-icons/faDatabase';
import { faHistory } from '@fortawesome/free-solid-svg-icons';
import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';  

const About = () => {
  useEffect(()=>{
    Aos.init({
      duration : 2000,
      easing : 'ease-in-out',
      once : true,
      offset : 0
    })
  },[])
  return (
    <div data-aos="fade-up">
      <div className='flex justify-center mt-20'>
        <h1 className='text-transparent shadow-2xl bg-clip-text text-7xl font-serif bg-gradient-to-r from-yellow-200 via-lime-400 to-green-600'>About Me</h1>
      </div>
      <div className='flex flex-col md:flex-row items-center md:justify-around md:mt-20'>
        <div className="text-center md:text-left text-gray-100 font-medium items-center md:w-2/4 md:mx-0 mx-6">
        <div className='md:mt-0 mt-20 md:text-2xl text-xl drop-shadow-lg font-mono hover:scale-105  transition-transform duration-300 hover:shadow-xl  '>I’m an IT professional and developer focused on building clean, performant web experiences and keeping them robust in production. With a background in IT service management (ServiceNow, Active Directory, Office 365) and a strong foundation in MERN, I bridge development and operations—delivering features quickly while maintaining security, reliability, and great user support.</div>
      </div>
       <div className=" text-white md:w-1/4 mt-8 md:mt-0"><img src={photo} alt='no ' style={{ height: '500px', width: 'auto' }} className="rounded-md object-cover shadow-lg border border-gray-700 hover:scale-105 hover:shadow-2xl transition-transform duration-300"/></div>
      </div>
      <div className='flex justify-center mt-10'>
       <h1 className=' text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-orange-500 font-serif underline shadow-lg shadow-slate-300'>What I'm Good At</h1>
      </div>
       <div className="flex flex-col md:flex-row justify-center items-center md:gap-0 gap-7 md:justify-evenly mt-16">
     <Flipcard front="Full-stack JavaScript" back="React, Node.js, Express.js, MongoDB"/>
     <Flipcard front="Production readiness" back="Incident handling, SLAs, monitoring, documentation"/>
     <Flipcard front="Collaboration" back="Clear communication, prioritization by impact/urgency, cross-team work"/>
    </div>
    <div className="flex mt-20  flex-col rounded-full shadow-md shadow-slate-500 md:mx-20 md:rounded-full bg-gradient-to-r from-gray-300 via-gray-500 to-gray-700">
      <h2 className='text-black text-center text-xl md:text-5xl font-bold tracking-wide font-serif mt-8 md:mt-5 shadow-2xl'>Currenly Learning</h2>
      <ul className='my-9 mx-20 text-lg md:mx-32 font-medium md:text-2xl list-disc md:tracking-wide flex items-start flex-col text-black md:space-y-10 space-y-5'>
        <li className="hover:scale-105  transition-transform duration-300">Advanced React patterns and TypeScript for safer frontends
          <FontAwesomeIcon icon={faReact} className='text-white ml-2 text-2xl '/>
        </li>
        <li className='hover:scale-105  transition-transform duration-300 '>Docker/Kubernetes for containerized deployments
          <FontAwesomeIcon icon={faDocker} className='ml-2 text-white'/>
        </li>
        <li className='hover:scale-105  transition-transform duration-300'>Data modeling for scalable MongoDB apps
          <FontAwesomeIcon icon={faDatabase} className='ml-2 text-white'/>
        </li>
      </ul>
    </div>
    <div className=" mt-20 mx-10 md:mx-40 ">
      <h1 className='text-white text-5xl font-bold font-serif'>Experience
        <FontAwesomeIcon icon={faHistory} className='mx-2 text-5xl text-emerald-400'/>
      </h1>
      <div className='border mt-6 bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 rounded-xl'>
      <span className='text-white text-3xl mt-3 block mx-5 font-semibold  '>Team Lead — Wipro (Pune)</span>
      <ul className='gap-3 flex flex-col mt-4 list-disc mx-10 font-semibold text-lg text-white tracking-wide my-3' data-aos="fade" >
        <li>Leading a team responsible for incident management, service request handling, and user support across enterprise environments.</li>
        <li>Managing end-to-end workflow on ServiceNow, ensuring SLA compliance and smooth operations.</li>
        <li>Conducting technical reviews, assigning tasks, and guiding team members to improve troubleshooting efficiency.</li>
        <li>Collaborating with cross-functional teams to resolve high-priority incidents with minimal downtime.</li>
        <li>Driving process improvements to enhance service quality, reduce response time, and increase customer satisfaction.</li>
        <li>Supporting continuous learning by mentoring associates on IT infrastructure, OS troubleshooting, domain management, and best practices.</li>
      </ul>
      </div>
 

    </div>
        <br /><br /><br /><br /><br /><br />
    </div>
  )
}

export default About
