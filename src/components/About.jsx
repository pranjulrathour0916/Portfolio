import photo from '../photo2.jpeg'
import Flipcard from './FlipCard/Flipcard'

const About = () => {
  return (
    <div>
      <div className='flex justify-center mt-20'>
        <h1 className='text-transparent bg-clip-text text-7xl font-serif bg-gradient-to-r from-yellow-200 via-lime-400 to-green-600'>About Me</h1>
      </div>
      <div className='flex flex-col md:flex-row items-center md:justify-around md:mt-20'>
        <div className="text-center md:text-left text-gray-100 font-medium items-center md:w-2/4 md:mx-0 mx-6">
        <div className='md:mt-0 mt-20 md:text-2xl text-xl drop-shadow-lg font-mono '>I’m an IT professional and developer focused on building clean, performant web experiences and keeping them robust in production. With a background in IT service management (ServiceNow, Active Directory, Office 365) and a strong foundation in MERN, I bridge development and operations—delivering features quickly while maintaining security, reliability, and great user support.</div>
      </div>
       <div className=" text-white md:w-1/4 mt-8 md:mt-0"><img src={photo} alt='no ' style={{ height: '500px', width: 'auto' }} className="rounded-md object-cover shadow-lg border border-gray-700 hover:scale-105 hover:shadow-2xl transition-transform duration-300"/></div>
      </div>
      <div className='flex justify-center mt-10'>
       <h1 className=' text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-orange-500 font-serif'>What I'm Good At</h1>
      </div>
       <div className="flex flex-col md:flex-row justify-center items-center md:gap-0 gap-7 md:justify-evenly mt-16">
     <Flipcard front="Full-stack JavaScript" back="React, Node.js, Express.js, MongoDB"/>
     <Flipcard front="Production readiness" back="Incident handling, SLAs, monitoring, documentation"/>
     <Flipcard front="Collaboration" back="Clear communication, prioritization by impact/urgency, cross-team work"/>
    </div>
        <br /><br /><br /><br /><br /><br />
    </div>
  )
}

export default About
