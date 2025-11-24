import photo from "../myphoto.jpeg";
import "aos/dist/aos.css";
import { easeInOut, motion } from "framer-motion";

import AOS from "aos"; 
import Touch from "./Footer/Touch";
import { useEffect } from "react";
import Typewriter from "typewriter-effect";
import Navigate from "./FlipCard/Navigate";
const Name = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: true, 
    });
  }, []);
  return (
    <div>
      <div className="flex  justify-evenly items-center md:mt-30 mt-16 flex-col md:flex-row transition-opacity duration-[2000ms] ease-in-out">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 100 }}
          transition={{ ease: easeInOut }}
          whileHover={{
            scale: 1.02,
            boxShadow: "0px 0px 8px 5px rgba(0,0,0,0.2)",
          }}
          whileTap={{
            scale: 1.02,
            boxShadow: "0px 0px 20px 5px rgba(0,0,0,0.2)",
          }}
          className="p-3 text-white md:w-1/4 h-1/4 flex flex-col justify-center items-center w-2/3 text-center md:text-left"
        >
          <motion.span
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 100 }}
            transition={{ duration: 1, ease: easeInOut }}
            className="font-bold md:text-5xl text-2xl"
          >
            Hey! This Is{" "}
            <span className="bg-gradient-to-r from-gray-800 via-blue-700 to-gray-900 text-transparent bg-clip-text">
              Pranjul
            </span>
            &nbsp;
            <span className="bg-gradient-to-r from-lime-500 via-green-500 to-emerald-500 bg-clip-text text-transparent ">
              Rathour
            </span>
          </motion.span>
           <span className="text-sm block whitespace-nowrap overflow-hidden text-ellipsis md:ml-6"> <Typewriter  options={{
              strings : "MERN Stack Developer | Team Lead | ITSM Professional",
              autoStart: true,
              loop: false,
              delay:20,
              deleteSpeed : 999999
            }} /></span>
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 100 }}
            transition={{ duration: 1, ease: easeInOut }}
            className="text-center md:text-left text-gray-100 font-medium mt-5 items-center"
          >
            <div className="font-bold text-2xl">Full Stack Developer</div>
            <div className="mt-3">
              {" "}
              I’m a passionate full-stack developer skilled in building dynamic,
              scalable web applications using the MERN stack, with a strong
              focus on writing clean, efficient code and delivering innovative
              technical solutions.
            </div>
          </motion.div>
        <div>
     
      </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 100 }}
          transition={{  ease: easeInOut}}
          className=" text-white md:w-1/4 mt-8 md:mt-0"
        >
          <img
            src={photo}
            alt="no "
            style={{ height: "500px", width: "auto" }}
            className="rounded-md object-cover shadow-lg border border-gray-700 hover:scale-105 hover:shadow-2xl transition-transform duration-300"
          />
        </motion.div>
      </div>

      <motion.ul
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 100 }}
        transition={{ duration: 1, ease: easeInOut }}
        className="p-1 text-white font-bold flex flex-col items-center justify-center gap-4 md:w-2/4 md:ml-10 mt-10"
      >
        <li className="inline-block bg-[linear-gradient(60deg,_rgb(247,_149,_51),_rgb(243,_112,_85),_rgb(239,_78,_123),_rgb(161,_102,_171),_rgb(80,_115,_184),_rgb(16,_152,_173),_rgb(7,_179,_155),_rgb(111,_186,_130))] p-2 rounded-lg hover:animate-bounce">
          🚀 Real-time MERN application
        </li>
        <li className="inline-block bg-[linear-gradient(60deg,_rgb(247,_149,_51),_rgb(243,_112,_85),_rgb(239,_78,_123),_rgb(161,_102,_171),_rgb(80,_115,_184),_rgb(16,_152,_173),_rgb(7,_179,_155),_rgb(111,_186,_130))] p-2 rounded-lg hover:animate-bounce">
          🔐 Secure, supportable solutions (ITIL mindset)
        </li>
        <li className="inline-block bg-[linear-gradient(60deg,_rgb(247,_149,_51),_rgb(243,_112,_85),_rgb(239,_78,_123),_rgb(161,_102,_171),_rgb(80,_115,_184),_rgb(16,_152,_173),_rgb(7,_179,_155),_rgb(111,_186,_130))] p-2 rounded-lg hover:animate-bounce">
          🤝 Clear communication, fast iteration
        </li>
      </motion.ul>
      <motion.h3
        initial = {{opacity:0}}
        whileInView={{opacity : 100}}
        whileHover={{
          scale: 1.02,
          boxShadow: "0px 0px 8px 5px rgba(0,0,0,0.2)",
        }}
        className="text-white flex border-b-2 rounded-xl p-2 font-bold justify-center mt-10 mx-4 text-base md:mx-32 tracking-wide"
      >
        <Typewriter options={{
          strings : ["I’m a full-stack engineer who loves building fast, reliable, and scalable products. I specialize in the MERN stack and enjoy solving real-world problems through clean code and intuitive UI/UX. My background in service delivery and incident management makes me a strong collaborator who can communicate clearly, handle pressure, and deliver production-ready solutions."],
          autoStart: true,
          loop: false,
          delay:30,
          deleteSpeed:99999
     
        }}/>
      </motion.h3>
      <ul
        data-aos="fade-up"
        className="flex gap-8 md:gap-20 mx-12  flex-wrap justify-center mt-16 font-bold p-1 text-white"
      >
        <motion.li
          whileHover={{
            scale: 1.02,
            boxShadow: "0px 0px 8px 5px rgba(0,0,0,0.2)",
          }}
          className=" border-l-2 border-b-2 flex p-2 justify-center md:text-xl shadow-xl tracking-widest text-center items-center w-64 md:h-40 h-24 rounded-xl   "
        >
          4+ years across Wipro/Citibank environments.
        </motion.li>
        <motion.li
          whileHover={{
            scale: 1.02,
            boxShadow: "0px 0px 8px 5px rgba(0,0,0,0.2)",
          }}
          className=" border-l-2 border-b-2 flex justify-center md:text-xl shadow-xl text-center tracking-widest items-center w-64 md:h-40 h-24 rounded-xl  "
        >
          M.Tech (BITS Pilani, 2022–2025)
        </motion.li>
        <motion.li
          whileHover={{
            scale: 1.02,
            boxShadow: "0px 0px 8px 5px rgba(0,0,0,0.2)",
          }}
          className=" border-l-2 border-b-2 flex justify-center md:text-xl text-center shadow-xl tracking-widest items-center w-64 md:h-40 h-24 rounded-xl   "
        >
          Tools I use daily: React, Node, MongoDB, Docker, Jenkins
        </motion.li>
      </ul>
     <Navigate/>
      <motion.div
      initial={{opacity:0}}
      whileInView={{opacity:100}}
      transition={{duration:1, ease:easeInOut, delay:0.5}}
      >
        <Touch/>
      </motion.div>
     <br />
    </div>
  );
};

export default Name;
