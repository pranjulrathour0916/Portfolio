import { useEffect, useState } from 'react'
import photo from '../myphoto.jpeg'

const Name = () => {
  const [visible, setVisible] = useState(false)

 useEffect(()=>{
   const timeout = setTimeout(() => {
    setVisible(true)
  }, 2000);
  return () => clearTimeout(timeout)
 } 
  )
  return (
    <div>
    <div className={`flex justify-evenly items-center md:mt-40 mt-16 flex-col md:flex-row transition-opacity duration-[2000ms] ease-in-out ${visible ? 'opacity-100' : 'opacity-0'}`}>
      <div className=" text-white md:w-1/4 h-1/4 flex flex-col justify-center items-center w-2/3 text-center md:text-left">
      <span className='font-bold md:text-5xl text-2xl'>Hey! This Is <span className='bg-gradient-to-r from-gray-800 via-blue-700 to-gray-900 text-transparent bg-clip-text'>Pranjul </span><span className='bg-gradient-to-r from-lime-500 via-green-500 to-emerald-500 bg-clip-text text-transparent'>Rathour</span></span>
      <div className="text-center md:text-left text-gray-100 font-medium mt-5 items-center">
        <div className="font-bold text-2xl">Full Stack Developer</div>
        <div className='mt-3'> I’m a passionate full-stack developer skilled in building dynamic, scalable web applications using the MERN stack, with a strong focus on writing clean, efficient code and delivering innovative technical solutions.</div>
      </div>
      <div>

      <button className='mt-2 bg-lime-400 text-blue-950 p-1 rounded-md font-semibold animate-pulse'>Read More</button>
      </div>
      </div>
      <div className=" text-white md:w-1/4 mt-8 md:mt-0"><img src={photo} alt='no ' style={{ height: '500px', width: 'auto' }} className="rounded-md object-cover shadow-lg border border-gray-700 hover:scale-105 hover:shadow-2xl transition-transform duration-300"/></div>
    </div>
        <ul className='p-1 text-white font-bold flex flex-col items-center justify-center gap-4 md:w-2/4 md:ml-10 mt-10'>
          <li className='inline-block bg-[linear-gradient(60deg,_rgb(247,_149,_51),_rgb(243,_112,_85),_rgb(239,_78,_123),_rgb(161,_102,_171),_rgb(80,_115,_184),_rgb(16,_152,_173),_rgb(7,_179,_155),_rgb(111,_186,_130))] p-2 rounded-lg hover:animate-bounce'>🚀 Real-time MERN application</li>
          <li className='inline-block bg-[linear-gradient(60deg,_rgb(247,_149,_51),_rgb(243,_112,_85),_rgb(239,_78,_123),_rgb(161,_102,_171),_rgb(80,_115,_184),_rgb(16,_152,_173),_rgb(7,_179,_155),_rgb(111,_186,_130))] p-2 rounded-lg hover:animate-bounce'>🔐 Secure, supportable solutions (ITIL mindset)</li>
          <li className='inline-block bg-[linear-gradient(60deg,_rgb(247,_149,_51),_rgb(243,_112,_85),_rgb(239,_78,_123),_rgb(161,_102,_171),_rgb(80,_115,_184),_rgb(16,_152,_173),_rgb(7,_179,_155),_rgb(111,_186,_130))] p-2 rounded-lg hover:animate-bounce'>🤝 Clear communication, fast iteration</li>
        </ul>
          <h3 className='text-white flex rounded-xl p-2 font-bold justify-center mt-10 mx-4 font-serif md:mx-20 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 hover:scale-105 hover:shadow-2xl transition-transform duration-300'>Dynamic and results-oriented IT professional with hands-on experience in incident management, service delivery, and full-stack JavaScript. I love turning ideas into fast, reliable products—and supporting users end-to-end.</h3>

          <ul className='flex gap-4 md:gap-20 mx-12 font-mono flex-wrap justify-center mt-8 font-bold p-1 text-white'>
            <li className=' [box-shadow:0_0_10px_0_rgb(225,225,225)] flex justify-center text-center items-center w-64 md:h-40 h-24 rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 transition-transform duration-300 hover:scale-105'>3+ years across Wipro/Citibank environments</li>
            <li className=' [box-shadow:0_0_10px_0_rgb(225,225,225)] flex justify-center text-center items-center w-64 md:h-40 h-24 rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 transition-transform duration-300 hover:scale-105'>M.Tech (BITS Pilani, 2022–2025)</li>
            <li className=' [box-shadow:0_0_10px_0_rgb(225,225,225)] flex justify-center text-center items-center w-64 md:h-40 h-24 rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 transition-transform duration-300 hover:scale-105 '>Tools I use daily: React, Node, MongoDB, Docker, Jenkins</li>
          </ul>
          <br /><br /><br /><br /><br />
    </div>
  )
}

export default Name
