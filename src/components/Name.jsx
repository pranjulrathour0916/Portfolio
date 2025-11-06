import photo from '../myphoto.jpeg'

const Name = () => {
  return (
    <div className=' flex justify-evenly items-center  md:mt-40 mt-16 flex-col md:flex-row'>
      <div className=" text-white md:w-1/4 h-1/4 flex flex-col justify-center items-center w-2/3 text-center md:text-left">
      <span className='font-bold md:text-5xl text-2xl'>Hey! This Is <span className='bg-gradient-to-r from-gray-800 via-blue-700 to-gray-900 text-transparent bg-clip-text'>Pranjul </span><span className='bg-gradient-to-r from-lime-500 via-green-500 to-emerald-500 bg-clip-text text-transparent'>Rathour</span></span>
      <div className="text-center md:text-left text-gray-100 font-medium mt-5 items-center">
        <div className="font-bold text-2xl">Full Stack Developer</div>
        <div className='mt-3'> I’m a passionate full-stack developer skilled in building dynamic, scalable web applications using the MERN stack, with a strong focus on writing clean, efficient code and delivering innovative technical solutions.</div>
      </div>
      <div>

      <button className='mt-2 bg-lime-400 text-blue-950 p-1 rounded-md font-semibold'>Read More</button>
      </div>
      </div>
      <div className=" text-white md:w-1/4 mt-8 md:mt-0"><img src={photo} alt='no ' style={{ height: '500px', width: 'auto' }} className="rounded-md object-cover shadow-lg border border-gray-700 hover:scale-105 hover:shadow-2xl transition-transform duration-300"/></div>


    </div>
  )
}

export default Name
