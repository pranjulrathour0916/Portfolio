import { faGithub, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import {  faEnvelopeOpen } from '@fortawesome/free-regular-svg-icons'
import { faFile, faMobile, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import 'aos/dist/aos.css';

const Contact = () => {
  
  return (
    <div >
     <div data-aos="fade" className="skiils flex justify-center mt-20">
        <h1 className=' text-5xl md:text-7xl font-serif tracking-widest text-transparent bg-clip-text shadow-2xl p-1 bg-gradient-to-r from-lime-500 via-green-500 to-emerald-500'>CONTACT ME</h1>
      </div>
      <div data-aos="fade-up" className='flex justify-center'>
        <div className='mt-10 flex flex-col w-11/12 md:w-2/4 p-4 md:rounded-full rounded-xl justify-center items-center bg-gradient-to-r from-yellow-200 via-lime-400 to-green-600 '>
          <h1 className='text-3xl md:text-4xl tracking-wider text-transparent bg-clip-text font-serif  bg-[linear-gradient(60deg,_rgb(247,_149,_51),_rgb(243,_112,_85),_rgb(239,_78,_123),_rgb(161,_102,_171),_rgb(80,_115,_184),_rgb(16,_152,_173),_rgb(7,_179,_155),_rgb(111,_186,_130))]  font-bold'>Email<FontAwesomeIcon className='text-white' icon={faEnvelopeOpen}/></h1>
          <p data-aos="fade-right" className='text-blue-700 md:text-2xl text-xl mt-4 tracking-wider md:tracking-widest'>pranjalrathore9838@gmail.com</p>
        </div>
      </div>
      <div data-aos="fade-up" className='flex justify-center'>
        <div className='mt-10 flex flex-col w-11/12 md:w-2/4 p-4 md:rounded-full rounded-xl justify-center items-center bg-gradient-to-r from-yellow-200 via-lime-400 to-green-600 '>
          <h1 className='text-3xl md:text-4xl tracking-wider text-transparent bg-clip-text font-serif  bg-[linear-gradient(60deg,_rgb(247,_149,_51),_rgb(243,_112,_85),_rgb(239,_78,_123),_rgb(161,_102,_171),_rgb(80,_115,_184),_rgb(16,_152,_173),_rgb(7,_179,_155),_rgb(111,_186,_130))]  font-bold'>LinkedIn<FontAwesomeIcon className='text-white' icon={faLinkedin}/></h1>
          <p data-aos="fade-right" className='text-blue-700 md:text-2xl text-xl mt-4 tracking-wider md:tracking-widest text-center'>https://www.linkedin.com/in/pranjul-rathour-259645204</p>
        </div>
      </div>
      <div data-aos="fade-up" className='flex justify-center'>
        <div className='mt-10 flex flex-col md:w-2/4 w-11/12 p-4 md:rounded-full rounded-xl justify-center items-center bg-gradient-to-r from-yellow-200 via-lime-400 to-green-600 '>
          <h1 className='text-3xl md:text-4xl tracking-wider text-transparent bg-clip-text font-serif  bg-[linear-gradient(60deg,_rgb(247,_149,_51),_rgb(243,_112,_85),_rgb(239,_78,_123),_rgb(161,_102,_171),_rgb(80,_115,_184),_rgb(16,_152,_173),_rgb(7,_179,_155),_rgb(111,_186,_130))]  font-bold'>GitHub<FontAwesomeIcon className='text-white' icon={faGithub}/></h1>
          <p data-aos="fade-right" className='text-blue-700 md:text-2xl text-xl mt-4 tracking-wider md:tracking-widest text-center'>https://www.linkedin.com/in/pranjul-rathour-259645204</p>
        </div>
      </div>
      <div data-aos="fade-up" className='flex justify-center'>
        <div className='mt-10 flex flex-col md:w-2/4 w-11/12 p-4 md:rounded-full rounded-xl justify-center items-center bg-gradient-to-r from-yellow-200 via-lime-400 to-green-600 '>
          <h1 className='text-3xl md:text-4xl tracking-wider text-transparent bg-clip-text font-serif  bg-[linear-gradient(60deg,_rgb(247,_149,_51),_rgb(243,_112,_85),_rgb(239,_78,_123),_rgb(161,_102,_171),_rgb(80,_115,_184),_rgb(16,_152,_173),_rgb(7,_179,_155),_rgb(111,_186,_130))]  font-bold'>Mobile No.<FontAwesomeIcon className='text-white' icon={faMobile}/></h1>
          <p data-aos="fade-right" className='text-blue-700 md:text-2xl text-xl mt-4 tracking-wider md:tracking-widest text-center'><FontAwesomeIcon className='bold text-green-500' icon={faWhatsapp}/>+91 8318561189, <span><FontAwesomeIcon className='text-black' icon={faPhone}/>+91 8087486189</span></p>
        </div>
      </div>
      <div data-aos="fade-up" className='flex justify-center'>
        <div className='mt-10 flex flex-col md:w-2/4 w-11/12 p-4 md:rounded-full rounded-xl justify-center items-center bg-gradient-to-r from-yellow-200 via-lime-400 to-green-600 '>
          <h1 className='text-3xl md:text-4xl tracking-wider text-transparent bg-clip-text font-serif  bg-[linear-gradient(60deg,_rgb(247,_149,_51),_rgb(243,_112,_85),_rgb(239,_78,_123),_rgb(161,_102,_171),_rgb(80,_115,_184),_rgb(16,_152,_173),_rgb(7,_179,_155),_rgb(111,_186,_130))]  font-bold'>Resume <FontAwesomeIcon className='text-white' icon={faFile}/></h1>
          <p data-aos="fade-right" className='text-blue-700 md:text-2xl text-xl mt-4 tracking-wider md:tracking-widest text-center'><a href='./Pranjul_Rathour_Resume.pdf' download='Pranjul_Rathour_Resume.pdf' className='font-bold'>Click Here</a></p>
        </div>
      </div>
      
      <br /><br /><br /><br /><br />
    </div>
  )
}

export default Contact
