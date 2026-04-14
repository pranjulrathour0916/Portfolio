// import SkillAnimation from "./FlipCard/SkillAnimation";
import blog1 from "../images/blog1.png";
import blog2 from "../images/blog2.png";
import HomePage1 from "../images/HomePage1.png"
import HomePage2 from "../images/HomePage2.png"
import selcedItem from "../images/SelectItem.png"
import selected from "../images/Selected.png"
import ER from '../images/ER.png'
import "aos/dist/aos.css";
import { easeInOut, motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDocker,
  faGithub,
  faJs,
  faNodeJs,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import {
  faBolt,
  faDatabase,
  faKey,
  faRocket,
  faShield,
} from "@fortawesome/free-solid-svg-icons";
import Touch from "./Footer/Touch";
import Typewriter from "typewriter-effect";
import Card from "./FlipCard/Card";
import { Link } from "react-router-dom";
const Skills = () => {
  const program = ["C", "C++", "JavaScript", "TypeScript", "Shell Scripting"];
  const frontned = [
    "React.js",
    "Redux Toolkit",
    "TanStack Query",
    "JavaScript",
    "TypeScript",
    "HTML5",
    "CSS3",
    "Bootstrap / Tailwind CSS",
  ];
  const backend = [
    "Node.js",
    "Express.js",
    "REST API Development",
    "JWT Authentication",
    "Zod Validation",
  ];
  const databse = ["PostgreSQL", "MongoDB", "Supabase"];
  const devops = [
    "Docker",
    "GitHub Actions",
    "CI/CD Pipelines",
    "AWS ECR",
    "Docker Hub",
    "Vercel",
    "Render",
    "Kubernetes (Learning)",
  ];
  const git = ["Git", "GitHub", "Postman", "Linux", "Jenkins", "Nginx"];
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
     
      <div className="md:flex-row gap-5 flex flex-col text-white mt-16 mx-10">
        <Card title="Frontend Development" item={frontned} />
        <Card title="Backend Development" item={backend} />
        <Card title="Database & Storage" item={databse} />
        <Card title="DevOps / Cloud / Deployment" item={devops} />
        <Card title="Programming & Scripting" item={program} />
        <Card title="Tools & Platforms" item={git} />
        <Card title="Enterprise / ITSM Tools" item={platforms} />
      </div>
      <motion.div
        initial={{ x: -300 }}
        whileInView={{ x: 0 }}
        viewport={{ once: true }}
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
        viewport={{ once: true }}
        transition={{ duration: 1, ease: easeInOut, delay: 0.2 }}
        whileHover={{
          scale: 1.02,
          transition: { duration: 0.1, ease: easeInOut },
        }}
        className="md:mx-24 mx-7 rounded-xl mt-16 border shadow-2xl md:p-10"
      >
       <div className="flex">
         <h1 className="md:text-3xl md:mx-0 mx-3 text-white font-medium">
          <Typewriter
            options={{
              strings: [
                "My Mart — Production-Ready Full Stack eCommerce Platform",
              ],
              autoStart: true,
              loop: false,
              deleteSpeed: 999999,
              delay: 2,
              cursor: "|",
            }}
          />
        </h1>{" "}
        <Link target="/" to={'https://my-mart-two.vercel.app'} className="text-white  p-2 ml-4 rounded-xl bg-blue-600 hover:bg-blue-700">Live Demo</Link>
        <Link target="/" to={"https://github.com/pranjulrathour0916/MyMart_Docker_Project"} className="text-white  p-2 ml-4 rounded-xl bg-gray-900 hover:bg-gray-800">GitHub</Link>
       </div>
        <br />
     <div className="flex justify-between items-start w-full">
  
  {/* Left Side - Text */}
  <div className=" w-3/4 p-4">
    <motion.div
          initial={{ y: 200, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.3, duration: 1, ease: easeInOut }}
        >
          <div className="text-white md:mt-0 mt-10 text-xl md:mx-0 mx-5 ">
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
            • PostgreSQL{" "}
            <Motionicon
              animate={{ rotateZ: 360 }}
              transition={{
                duration: 3,
                ease: easeInOut,
                repeat: Infinity,
                delay: 0.3,
              }}
              className="text-[#336791]"
              icon={faDatabase}
            />{" "}
            • Docker{" "}
            <Motionicon
              animate={{ rotateZ: 360 }}
              transition={{
                duration: 3,
                ease: easeInOut,
                repeat: Infinity,
                delay: 0.3,
              }}
              className="text-[#0DB7ED]"
              icon={faDocker}
            />{" "}
            • TanStack Query{" "}
            <Motionicon
              animate={{ rotateZ: 360 }}
              transition={{
                duration: 3,
                ease: easeInOut,
                repeat: Infinity,
                delay: 0.3,
              }}
              className="text-[#FF4154]"
              icon={faBolt}
            />{" "}
            • Redux Toolkit{" "}
            <Motionicon
              animate={{ rotateZ: 360 }}
              transition={{
                duration: 3,
                ease: easeInOut,
                repeat: Infinity,
                delay: 0.3,
              }}
              className="text-[#764ABC]"
              icon={faReact}
            />{" "}
            • JWT{" "}
            <Motionicon
              animate={{ rotateZ: 360 }}
              transition={{
                duration: 3,
                ease: easeInOut,
                repeat: Infinity,
                delay: 0.3,
              }}
              className="text-[#F59E0B]"
              icon={faKey}
            />{" "}
            • Zod{" "}
            <Motionicon
              animate={{ rotateZ: 360 }}
              transition={{
                duration: 3,
                ease: easeInOut,
                repeat: Infinity,
                delay: 0.3,
              }}
              className="text-[#3B82F6]"
              icon={faShield}
            />{" "}
            • Docker Hub{" "}
            <Motionicon
              animate={{ rotateZ: 360 }}
              transition={{
                duration: 3,
                ease: easeInOut,
                repeat: Infinity,
                delay: 0.3,
              }}
              className="text-[#2496ED]"
              icon={faDocker}
            />{" "}
            • GitHub Actions{" "}
            <Motionicon
              animate={{ rotateZ: 360 }}
              transition={{
                duration: 3,
                ease: easeInOut,
                repeat: Infinity,
                delay: 0.3,
              }}
              className="text-[#2088FF]"
              icon={faGithub}
            />{" "}
          </div>{" "}
          <br />
          <motion.p
            initial={{ y: 300, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: easeInOut }}
            viewport={{ once: true }}
            className=" text-white tracking-wide font-semibold md:mx-0 mx-5"
          >
            My Mart is a full-featured production-ready eCommerce web
            application built to simulate a real-world online shopping platform.
            The project was designed and developed end-to-end to strengthen my
            expertise across modern frontend development, backend architecture,
            secure authentication, database design, DevOps automation,
            containerization, and cloud deployment. This project represents my
            transition from MERN-only development into full-stack engineering
            with DevOps practices.
          </motion.p>
          <ul className="mt-10 text-white space-y-2 list-disc font-medium tracking-wider  md:mx-0 mx-5">
          <h1 className="text-2xl underline text-slate-300 ">FRONTEND DEVELOPMENT</h1>
            <div className="ml-6">
              <motion.li
              initial={{ y: 300, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: easeInOut, delay: 0.3 }}
            >
           Built a modern responsive user interface using React.js
            </motion.li>
            <motion.li
              initial={{ y: 300, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: easeInOut, delay: 0.4 }}
            >
             Managed complex global application state using Redux Toolkit
            </motion.li>
            <motion.li
              initial={{ y: 300, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: easeInOut, delay: 0.5 }}
            >
              Implemented TanStack Query for optimized API data fetching, caching, background synchronization, and server-state management
            </motion.li>
            <motion.li
              initial={{ y: 300, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: easeInOut, delay: 0.6 }}
            >
              Designed reusable and scalable component architecture for maintainability
            </motion.li>
            <motion.li
              initial={{ y: 300, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: easeInOut, delay: 0.6 }}
            >
              Built dynamic product listing, filtering, cart, checkout, and user dashboard pages
            </motion.li>
            <motion.li
              initial={{ y: 300, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: easeInOut, delay: 0.6 }}
            >
              Ensured responsive UI/UX across desktop and mobile devices
            </motion.li>
            <motion.li
              initial={{ y: 300, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: easeInOut, delay: 0.6 }}
            >
              Integrated role-based features and basic moderation tools.
            </motion.li>
            <motion.li
              initial={{ y: 300, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: easeInOut, delay: 0.6 }}
            >
              Deployed using Docker/Nginx.
            </motion.li>
            </div>
            <br />
          <h1 className="text-2xl underline text-slate-300 ">BACKEND DEVELOPMENT</h1>
            <div className="ml-6">
              <motion.li
              initial={{ y: 300, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: easeInOut, delay: 0.3 }}
            >
           Developed RESTful APIs using Node.js and Express.js
            </motion.li>
            <motion.li
              initial={{ y: 300, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: easeInOut, delay: 0.4 }}
            >
             Implemented modular backend architecture for scalability and maintainability
            </motion.li>
            <motion.li
              initial={{ y: 300, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: easeInOut, delay: 0.5 }}
            >
              <div>
                <span>Created APIs for:</span>
                <ul className="ml-4 list-disc">
                <li>User Authentication & Authorization</li>
                <li>Product Management</li>
                <li>Cart Operations</li>
                <li>Order Processing</li>
                <li>Admin Functionalities</li>
                </ul>
              </div>
            </motion.li>
            <motion.li
              initial={{ y: 300, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: easeInOut, delay: 0.6 }}
            >
              Followed clean controller/service-based architecture principles
            </motion.li>
            
            </div>
       
            <br />
          <h1 className="text-2xl underline text-slate-300 ">Authentication & Security</h1>
            <div className="ml-6">
              <motion.li
              initial={{ y: 300, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: easeInOut, delay: 0.3 }}
            >
           Implemented secure JWT-based Authentication & Authorization
            </motion.li>
            <motion.li
              initial={{ y: 300, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: easeInOut, delay: 0.4 }}
            >
             Added protected/private routes for authenticated users and admin roles
            </motion.li>
            <motion.li
              initial={{ y: 300, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: easeInOut, delay: 0.5 }}
            >
            Used Zod for schema validation and request payload validation
            </motion.li>
            <motion.li
              initial={{ y: 300, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: easeInOut, delay: 0.6 }}
            >
             Applied backend validation and sanitization to prevent malformed/unsafe input
            </motion.li>
            <motion.li
              initial={{ y: 300, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: easeInOut, delay: 0.6 }}
            >
             Followed secure token handling best practices
            </motion.li>
            
            </div>
            <br />

            <h1 className="text-2xl underline text-slate-300 ">Database Architecture</h1>
            <div className="ml-6">
              <motion.li
              initial={{ y: 300, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: easeInOut, delay: 0.3 }}
            >
           Designed relational database schema using PostgreSQL
            </motion.li>
            <motion.li
              initial={{ y: 300, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: easeInOut, delay: 0.4 }}
            >
             Utilized Supabase/PostgreSQL hosting for managed cloud database deployment
            </motion.li>
            <motion.li
              initial={{ y: 300, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: easeInOut, delay: 0.5 }}
            >
              <div>
                <span>Structured normalized tables for:</span>
                <ul className="ml-4 list-disc">
                <li>User</li>
                <li>Products</li>
                <li>Cart</li>
                <li>Order</li>
                <li>Categories</li>
                <li>Payments</li>
                </ul>
              </div>
            </motion.li>
            <motion.li
              initial={{ y: 300, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: easeInOut, delay: 0.6 }}
            >
             Implemented efficient relational mapping and query handling
            </motion.li>
            
            </div>
            <br />
             <h1 className="text-2xl underline text-slate-300 ">Deployment & Hosting</h1>
            <div className="ml-6">
              <motion.li
              initial={{ y: 300, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: easeInOut, delay: 0.3 }}
            >
           Hosted frontend application on Vercel
            </motion.li>
            <motion.li
              initial={{ y: 300, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: easeInOut, delay: 0.4 }}
            >
             Deployed backend APIs on Render
            </motion.li>
            <motion.li
              initial={{ y: 300, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: easeInOut, delay: 0.5 }}
            >
            Managed PostgreSQL database using Supabase
            </motion.li>
            <motion.li
              initial={{ y: 300, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: easeInOut, delay: 0.6 }}
            >
            Configured environment-based deployment for production-ready setup
            </motion.li>
            </div>
            <br />
             <h1 className="text-2xl underline text-slate-300 ">Containerization / DevOps</h1>
            <div className="ml-6">
              <motion.li
              initial={{ y: 300, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: easeInOut, delay: 0.3 }}
            >
           Containerized frontend and backend applications using Docker
            </motion.li>
            <motion.li
              initial={{ y: 300, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: easeInOut, delay: 0.4 }}
            >
             Created optimized Dockerfiles for production deployment
            </motion.li>
            <motion.li
              initial={{ y: 300, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: easeInOut, delay: 0.5 }}
            >
            Managed multi-environment configuration using Docker best practices
            </motion.li>
            <motion.li
              initial={{ y: 300, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: easeInOut, delay: 0.6 }}
            >
            Prepared application for scalable container-based deployment
            </motion.li>
            </div>

            <br />

            <h1 className="text-2xl underline text-slate-300 ">CI/CD Automation</h1>
            <div className="ml-6">
              <motion.li
              initial={{ y: 300, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: easeInOut, delay: 0.3 }}
            >
           Built automated CI/CD Pipeline using GitHub Actions
            </motion.li>
            <motion.li
              initial={{ y: 300, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: easeInOut, delay: 0.5 }}
            >
              <div>
                <span>Configured workflow to:</span>
                <ul className="ml-4 list-disc">
                <li>Trigger builds on push/merge</li>
                <li>Run automated Docker image builds</li>
                <li>Push container images to Docker Hub</li>
                <li>Push container images to AWS Elastic Container Registry (ECR)</li>
                </ul>
              </div>
            </motion.li>
            <motion.li
              initial={{ y: 300, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: easeInOut, delay: 0.6 }}
            >
            Established automated deployment-ready pipeline for future cloud orchestration
            </motion.li>
            
            </div>

            <br />
             <h1 className="text-2xl underline text-slate-300 ">AWS / Cloud Exposure</h1>
            <div className="ml-6">
              <motion.li
              initial={{ y: 300, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: easeInOut, delay: 0.3 }}
            >
           Integrated AWS ECR for container registry management
            </motion.li>
            <motion.li
              initial={{ y: 300, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: easeInOut, delay: 0.4 }}
            >
             Learned secure AWS credential handling inside GitHub Actions workflows
            </motion.li>
            <motion.li
              initial={{ y: 300, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: easeInOut, delay: 0.5 }}
            >
            Implemented image versioning/tagging strategy for deployment pipelines
            </motion.li>
            <motion.li
              initial={{ y: 300, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: easeInOut, delay: 0.6 }}
            >
            Practiced cloud-native deployment workflow preparation
            </motion.li>
            </div>
          </ul>
        </motion.div>
  </div>

  {/* Right Side - Box */}
  <div className=" mt-6 p-2 ">
    <div className="  md:flex-col flex gap-16">
      <img src={HomePage1} className="h-56" alt="" />
      <img src={HomePage2} className="h-56" alt="" />
      <img src={selcedItem} className="h-56" alt="" />
      <img src={selected} className="h-56" alt="" />
      <img src={ER} className="h-56" alt="" />
    </div>
  </div>

</div>
      
      
      </motion.div>
      <motion.div
        initial={{ y: 200, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: easeInOut, delay: 0.2 }}
        whileHover={{
          scale: 1.02,
          transition: { duration: 0.1, ease: easeInOut },
        }}
        className="md:mx-24 mx-7 rounded-xl mt-16 border shadow-2xl md:p-10"
      >
        <h1 className="md:text-3xl md:mx-0 mx-3 text-white font-medium">
          <Typewriter
            options={{
              strings: ["Blogging Platform (MERN Stack)"],
              autoStart: true,
              loop: false,
              deleteSpeed: 999999,
              delay: 2,
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
          viewport={{ once: true }}
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
            viewport={{ once: true }}
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
              viewport={{ once: true }}
              transition={{ duration: 1, ease: easeInOut, delay: 0.3 }}
            >
              Developed a full-stack blogging website using MERN (MongoDB,
              Express, React, Node).
            </motion.li>
            <motion.li
              initial={{ y: 300, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: easeInOut, delay: 0.4 }}
            >
              Implemented secure user authentication using JWT and encrypted
              passwords.
            </motion.li>
            <motion.li
              initial={{ y: 300, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: easeInOut, delay: 0.5 }}
            >
              Added features like create/edit/delete posts, comments, likes, and
              tags.
            </motion.li>
            <motion.li
              initial={{ y: 300, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: easeInOut, delay: 0.6 }}
            >
              Built a clean, responsive UI in React for seamless blogging
              experience.
            </motion.li>
            <motion.li
              initial={{ y: 300, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: easeInOut, delay: 0.6 }}
            >
              Designed MongoDB schemas for users, posts, and comments using
              Mongoose.
            </motion.li>
            <motion.li
              initial={{ y: 300, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: easeInOut, delay: 0.6 }}
            >
              Created REST APIs in Node/Express and tested using Postman.
            </motion.li>
            <motion.li
              initial={{ y: 300, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: easeInOut, delay: 0.6 }}
            >
              Integrated role-based features and basic moderation tools.
            </motion.li>
            <motion.li
              initial={{ y: 300, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
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
