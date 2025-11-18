import {  motion } from "framer-motion"
const Skills = () => {
  return (
    <div>
      <div className="skiils flex justify-center mt-20">
        <h1 className='text-7xl font-serif tracking-widest text-transparent bg-clip-text shadow-2xl p-1 bg-gradient-to-r from-lime-500 via-green-500 to-emerald-500'>SKILLS</h1>
      </div>
      <div className="mt-16 md:mx-10 rounded-full md:p-2 ">
        <div className=' md:md:py-3'>
          <motion.div
            animate={{ x: 100 }}
            transition={{
              duration: 1,
              repeat: Infinity,
              delay: 1,
              repeatType: "reverse"
            }}
            className="card">
            <ul className='flex flex-row justify-around md:mx-28 text-black'>
              <li className='p-3 bg-white font-semibold rounded-full'><span className='animate-pulse'>C</span></li>
              <li className='p-3 bg-white font-semibold rounded-full'><span className='animate-pulse'>C++</span></li>
              <li className='p-3 bg-white font-semibold rounded-full'><span className='animate-pulse'>JavaScript</span></li>
              <li className='p-3 bg-white font-semibold rounded-full'><span className='animate-pulse'>TypeScript</span></li>
            </ul>
          </motion.div>
        </div>
        <div className=' md:py-3'>
          <motion.div
            animate={{ x: 100 }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: 1,
              repeatType: "reverse"
            }}
            className="card">
            <ul className='flex flex-row justify-around items-center text-black'>
              <li className='p-3 bg-white font-semibold rounded-full'><span className='animate-pulse'>HTML5</span></li>
              <li className='p-3 bg-white font-semibold rounded-full'><span className='animate-pulse'>BootStrap</span></li>
              <li className='p-3 bg-white font-semibold rounded-full'><span className='animate-pulse'>Tailwind</span></li>
              <li className='p-3 bg-white font-semibold rounded-full'><span className='animate-pulse'>React JS</span></li>
              <li className='p-3 bg-white font-semibold rounded-full'><span className='animate-pulse'>Angular 9</span></li>
            </ul>
          </motion.div>
        </div>
        <div className='  md:py-3'>
          <motion.div
            animate={{ x: 100 }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: 1,
              repeatType: "reverse"

            }}
            className="card">
            <ul className='flex flex-row justify-around text-black'>
              <li className='p-3 bg-white font-semibold rounded-full'><span className='animate-pulse'>Node JS</span></li>
              <li className='p-3 bg-white font-semibold rounded-full'><span className='animate-pulse'>Express Js</span></li>

            </ul>
          </motion.div>
        </div>

        <div className='  md:py-3'>
          <motion.div
           animate={{x:100}}
        transition={{
          duration : 4,
          repeat: Infinity,
          delay:1,
          repeatType: "reverse"
          
        }}
          className="card">
            <ul className='flex flex-row justify-around text-black'>
              <li className='p-3 bg-white font-semibold rounded-full'><span className='animate-pulse'>Linux</span></li>
              <li className='p-3 bg-white font-semibold rounded-full'><span className='animate-pulse'>ShellScipting</span></li>
              <li className='p-3 bg-white font-semibold rounded-full'><span className='animate-pulse'>Docker</span></li>
              <li className='p-3 bg-white font-semibold rounded-full'><span className='animate-pulse'>Jenkins</span></li>
            </ul>
          </motion.div>
        </div>
        <div className='  md:py-3'>
          <motion.div 
           animate={{x:100}}
        transition={{
          duration : 2,
          repeat: Infinity,
          delay:1,
          repeatType: "reverse"
          
        }}
          className="card">
            <ul className='flex flex-row justify-around text-black'>
              <li className='p-3 bg-white font-semibold rounded-full'><span className='animate-pulse'>MySQL</span></li>
              <li className='p-3 bg-white font-semibold rounded-full'><span className='animate-pulse'>MongoDB</span></li>

            </ul>
          </motion.div>
        </div>
        <div className='  md:py-3'>
          <motion.div
           animate={{x:100}}
        transition={{
          duration : 4,
          repeat: Infinity,
          delay:1,
          repeatType: "reverse"
          
        }}
          className="card">
            <ul className='flex flex-row justify-around text-black'>
              <li className='p-3 bg-white font-semibold rounded-full'><span className='animate-pulse'>SaaS</span></li>
              <li className='p-3 bg-white font-semibold rounded-full'><span className='animate-pulse'>MS Teams</span></li>
              <li className='p-3 bg-white font-semibold rounded-full'><span className='animate-pulse'>Outlook</span></li>
              <li className='p-3 bg-white font-semibold rounded-full'><span className='animate-pulse'>Active Directory</span></li>
              <li className='p-3 bg-white font-semibold rounded-full'><span className='animate-pulse'>Windows OS</span></li>
            </ul>
          </motion.div>
        </div>
       
        <div className='  md:py-3'>
          <motion.div
           animate={{x:100}}
        transition={{
          duration : 2,
          repeat: Infinity,
          delay:1,
          repeatType: "reverse"
          
        }}
          className="card">
            <ul className='flex flex-row justify-around text-black'>
              <li className='p-3 bg-white font-semibold rounded-full'><span className='animate-pulse'>GIT</span></li>
              <li className='p-3 bg-white font-semibold rounded-full'><span className='animate-pulse'>GitHub</span></li>

            </ul>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Skills
