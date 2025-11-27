import SkillAnimation from "./FlipCard/SkillAnimation";
import blog1 from "../images/blog1.png";
import blog2 from "../images/blog2.png";
// import Aos from 'aos';
import "aos/dist/aos.css";
import { easeInOut, motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faJs, faNodeJs, faReact } from "@fortawesome/free-brands-svg-icons";
import { faDatabase, faRocket } from "@fortawesome/free-solid-svg-icons";
import Touch from "./Footer/Touch";
import Typewriter from "typewriter-effect";
const Skills = () => {
  const program = ["C", "C++", "JavaScript", "TypeScript"];
  const frontned = ["HTML5", "Bootstrap", "React.js", "Angular 9"];
  const backend = ["Node.js", "Express.js"];
  const databse = ["MySQL", "MongoDB"];
  const devops = ["Linux", "Shell Scripting", "Docker", "Jenkins"];
  const git = ["Git", "GitHub"];
  const platforms = [
    "Service Now",
    "MS Teams",
    "Outlook",
    "Active Directory",
    "Office 365",
    "Windows OS",
  ];


  const Motionicon = motion(FontAwesomeIcon);

  return (
    <div data-aos="fade">
      <div className="skiils flex justify-center mt-20">
        <h1 className="text-7xl font-serif tracking-widest text-transparent bg-clip-text shadow-2xl p-1 bg-gradient-to-r from-lime-500 via-green-500 to-emerald-500">
          SKILLS
        </h1>
      </div>
      <div className="mt-16">
        <SkillAnimation item={program} />
        <SkillAnimation item={frontned} />
        <SkillAnimation item={backend} />
        <SkillAnimation item={devops} />
        <SkillAnimation item={databse} />
        <SkillAnimation item={platforms} />
        <SkillAnimation item={git} />
      </div>
      <motion.div
        initial={{ x: -300 }}
        whileInView={{ x: 0 }}
        transition={{ duration: 1, ease: easeInOut }}
        className="project mt-16 justify-center flex "
      >
        <h1 className=" text-5xl tracking-widest shadow-2xl p-3 text-white border-b-2 rounded-xl">
          PROJECT
        </h1>
      </motion.div>
      <motion.div
        initial={{ y: 200, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: easeInOut, delay: 0.2 }}
        whileHover={{scale:1.02, transition:{ duration:0.1,ease:easeInOut}}}
        className="md:mx-24 mx-7 rounded-xl mt-16 border shadow-2xl md:p-10"
      >
        <h1 className="md:text-3xl md:mx-0 mx-3 text-white font-medium">
     
            <Typewriter
              options={{
                strings: ["Blogging Platform (MERN Stack)"],
                autoStart: true,
                loop: false,
                deleteSpeed: 999999,
                delay:2,
                cursor: "|",
              }}
            />
          
        </h1>{" "}
        <br />
        <div className="md:flex md:justify-end justify-center">
          <img src={blog1} className="md:text-right h-52 md:absolute" alt="" />
          <img
            src={blog2}
            className="md:text-right md:h-60 md:absolute mt-10 md:mt-60"
            alt=""
          />
        </div>
        <motion.div
          initial={{ y: 200, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.3, duration: 1, ease: easeInOut }}
        >
          <div className="text-white md:mt-0 mt-10 text-xl md:mx-0 mx-5">
            React.js{" "}
            <Motionicon
              className="text-blue-900"
              animate={{ rotateZ: 360 }}
              transition={{
                duration: 2,
                ease: "linear",
                repeat: Infinity,
                repeatType: "loop",
              }}
              icon={faReact}
            />{" "}
            • Node.js{" "}
            <Motionicon
              className="text-green-500"
              animate={{ rotateY: 360 }}
              transition={{
                duration: 2,
                ease: easeInOut,
                repeat: Infinity,
                repeatType: "loop",
                delay: 0.5,
              }}
              icon={faNodeJs}
            />{" "}
            • Express.js{" "}
            <FontAwesomeIcon
              className="text-yellow-300 animate-pulse"
              icon={faJs}
            />{" "}
            • MongoDB{" "}
            <Motionicon
              animate={{ rotateZ: 360 }}
              transition={{
                duration: 3,
                ease: easeInOut,
                repeat: Infinity,
                delay: 0.3,
              }}
              className="text-green-700"
              icon={faDatabase}
            />{" "}
            • Postman{" "}
            <Motionicon
              animate={{
                x: [0, 80, 80, 0, 0],
                y: [0, -80, -80, 0, 0],
                rotate: [0, 0, 180, 180, 360],
              }}
              transition={{ duration: 3, ease: easeInOut }}
              className="text-orange-400"
              icon={faRocket}
            />
          </div>{" "}
          <br />
          <motion.p
            initial={{ y: 300, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: easeInOut }}
            className="md:w-2/4 text-white tracking-wide font-semibold md:mx-0 mx-5"
          >
            A simple and user-friendly blogging platform built using the MERN
            stack, allowing users to create, edit, delete, and browse blog
            posts. Includes secure authentication, comment features, and a
            responsive UI for smooth reading and writing experiences.
          </motion.p>
          <ul className="mt-10 text-white space-y-2 list-disc font-medium tracking-wider md:w-2/4 md:mx-0 mx-5">
            <motion.li
              initial={{ y: 300, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, ease: easeInOut, delay: 0.3 }}
            >
              Developed a full-stack blogging website using MERN (MongoDB,
              Express, React, Node).
            </motion.li>
            <motion.li
              initial={{ y: 300, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, ease: easeInOut, delay: 0.4 }}
            >
              Implemented secure user authentication using JWT and encrypted
              passwords.
            </motion.li>
            <motion.li
              initial={{ y: 300, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, ease: easeInOut, delay: 0.5 }}
            >
              Added features like create/edit/delete posts, comments, likes, and
              tags.
            </motion.li>
            <motion.li
              initial={{ y: 300, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, ease: easeInOut, delay: 0.6 }}
            >
              Built a clean, responsive UI in React for seamless blogging
              experience.
            </motion.li>
            <motion.li
              initial={{ y: 300, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, ease: easeInOut, delay: 0.6 }}
            >
              Designed MongoDB schemas for users, posts, and comments using
              Mongoose.
            </motion.li>
            <motion.li
              initial={{ y: 300, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, ease: easeInOut, delay: 0.6}}
            >
              Created REST APIs in Node/Express and tested using Postman.
            </motion.li>
            <motion.li
              initial={{ y: 300, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, ease: easeInOut, delay: 0.6 }}
            >
              Integrated role-based features and basic moderation tools.
            </motion.li>
            <motion.li
              initial={{ y: 300, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, ease: easeInOut, delay: 0.6 }}
            >
              Deployed using Docker/Nginx.
            </motion.li>
            <br />
          </ul>
        </motion.div>
      </motion.div>
      <br />
      <div>
        <Touch />
      </div>

      <br />
    </div>
  );
};

export default Skills;
