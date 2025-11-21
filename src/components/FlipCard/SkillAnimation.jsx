import {  motion } from "framer-motion"

const SkillAnimation = ({item}) => {

  return (
    <div>
       <div className=" md:mx-10 rounded-full  ">
        <div className=' md:md:py-2 py-1'>
          <motion.div
            animate={{ x : 100}}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: 1,
              repeatType: "reverse"
            }}
            className="card">
            <ul className='flex flex-row justify-evenly items-center md:mx-28 text-black'>
            {item.map((item, index)=>{
              return  <motion.li drag className='p-3 bg-white font-semibold rounded-full ' key={index}><span className="bg-gradient-to-r from-gray-800 via-blue-700 to-gray-900 text-transparent bg-clip-text">{item}</span> </motion.li>
            })}
            </ul>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default SkillAnimation
