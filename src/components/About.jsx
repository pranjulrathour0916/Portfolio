import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import photo from "../photo2.jpeg";
import Flipcard from "./FlipCard/Flipcard";

import {
  faBookOpenReader,
  faBuilding,
  faCloudDownload,
  faDharmachakra,
  faDiagramProject,
  faGears,
  faHistory,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { easeInOut, motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import Touch from "./Footer/Touch";
// import { faCloud } from "@fortawesome/free-regular-svg-icons";
const About = () => {
  const MotionIcon = motion(FontAwesomeIcon);
  useEffect(() => {
    Aos.init({
      duration: 2000,
      easing: "ease-in-out",
      once: true,
      offset: 0,
    });
  }, []);

  return (
    <div data-aos="fade-up">
      <div className="flex justify-center mt-20">
        <h1 className="text-transparent shadow-2xl bg-clip-text text-7xl font-serif bg-gradient-to-r from-yellow-200 via-lime-400 to-green-600">
          About Me
        </h1>
      </div>
      <div className="flex flex-col md:flex-row items-center md:justify-around md:mt-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 100 }}
          transition={{ delay: 1, duration: 2 }}
          className="text-center md:text-left text-gray-100 font-medium items-center md:w-2/4 md:mx-0 mx-6"
        >
          <div className="md:mt-0 mt-20 p-2 md:text-2xl text-xl drop-shadow-lg tracking-wide">
            <Typewriter
              options={{
                strings: [
                  "I’m a Full Stack Developer and Team Lead with 4+ years of professional experience across enterprise environments, combining strong software engineering expertise with operational leadership. My core strength lies in building scalable, production-ready web applications and deploying them using modern DevOps practices. Recently, I developed a complete eCommerce platform — My Mart — where I designed and implemented the frontend, backend, authentication system, database architecture, deployment workflows, and CI/CD automation. With a background in IT service management and enterprise support, I bring a reliability-first mindset to software development—focusing on performance, maintainability, security, and smooth production operations.",
                ],
                autoStart: true,
                loop: false,
                delay: 15,
                deleteSpeed: 99999,
              }}
            />
          </div>
        </motion.div>
        <div className=" text-white md:w-1/4 mt-8 md:mt-0">
          <img
            src={photo}
            alt="no "
            style={{ height: "500px", width: "auto" }}
            className="rounded-md object-cover shadow-lg border border-gray-700 hover:scale-105 hover:shadow-2xl transition-transform duration-300"
          />
        </div>
      </div>
      <motion.div className="flex justify-center mt-10">
        <h1 className=" text-3xl md:text-4xl font-bold bg-clip-text text-slate-100  underline shadow-lg ">
          Core Expertise
        </h1>
      </motion.div>
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ rotateX: 360, transition: { duration: 3 } }}
        whileInView={{ x: 0, opacity: 100 }}
        transition={{ delay: 0, ease: easeInOut, duration: 2 }}
        className="flex flex-col md:flex-row justify-center items-center md:gap-0 gap-7 md:justify-evenly mt-16"
      >
        <Flipcard
          front="Full-stack JavaScript"
          back="React.js, Redux Toolkit, TanStack Query, Node.js, Express.js, PostgreSQL, MongoDB"
        />
        <Flipcard
          front="Backend & System Design"
          back="REST APIs, Authentication, Authorization, JWT Security, Zod Validation, Database Modeling"
        />
        <Flipcard
          front="DevOps & Deployment"
          back="Docker, GitHub Actions, CI/CD Pipelines, Docker Hub, AWS ECR, Vercel, Render, Supabase"
        />
        <Flipcard
          front="Leadership & Collaboration"
          back="Team Leadership, Incident Management, Technical Mentoring, SLA Management"
        />
      </motion.div>
      <div
        className="flex mt-20  flex-col border-white/20 bg-white/10 shadow-lg rounded-full backdrop-blur-xl shadow-slate-500 md:mx-44 md:rounded-full border"
        data-aos="fade"
      >
        <h2 className="text-white  text-center text-xl md:text-4xl font-semibold tracking-wide mt-8 md:mt-5 shadow-2xl  hover:text-slate-100">
          Currently Learning
        </h2>
        <ul className="my-9 mx-20 text-lg md:mx-32 font-medium md:text-xl list-disc md:tracking-wide flex items-start flex-col text-white md:space-y-10 space-y-5">
          <motion.li
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{
              x: { duration: 1, ease: easeInOut },
              opacity: { duration: 2, ease: easeInOut },
              scale: { duration: 0.15, ease: easeInOut }, // used for BOTH hover in & out
            }}
            className="transform-gpu"
          >
            Kubernetes (K8s) for Container Orchestration
            <FontAwesomeIcon
              icon={faDharmachakra}
              className="text-[#326CE5] ml-2 text-2xl "
            />
          </motion.li>
          <motion.li
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{
              x: { duration: 1.3, ease: easeInOut },
              opacity: { duration: 2, ease: easeInOut },
              scale: { duration: 0.15, ease: easeInOut }, // used for BOTH hover in & out
            }}
            className="transform-gpu"
          >
            Advanced DevOps & Cloud Deployment Strategies
            <FontAwesomeIcon icon={faCloudDownload} className="ml-2 text-[#0EA5E9]" />
          </motion.li>
          <motion.li
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{
              x: { duration: 1.5, ease: easeInOut },
              opacity: { duration: 2, ease: easeInOut },
              scale: { duration: 0.15, ease: easeInOut }, // used for BOTH hover in & out
            }}
            className="transform-gpu"
          >
            Scalable System Design & Microservices Architecture
            <FontAwesomeIcon
              icon={faDiagramProject}
              className="ml-2 text-[#8B5CF6]"
            />
          </motion.li>
          <motion.li
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{
              x: { duration: 1.5, ease: easeInOut },
              opacity: { duration: 2, ease: easeInOut },
              scale: { duration: 0.15, ease: easeInOut }, // used for BOTH hover in & out
            }}
            className="transform-gpu"
          >
            Infrastructure Automation & Production Monitoring
            <FontAwesomeIcon
              icon={faGears}
              className="ml-2 text-[#10B981]"
            />
          </motion.li>
        </ul>
      </div>
      <div
        data-aos="fade"
        className=" mt-20 flex items-center  justify-center flex-col "
      >
        <motion.h1
          initial={{ x: -200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: easeInOut }}
          className=" text-2xl md:text-4xl text-center font-bold text-white md:w-96 md:no-underline underline items-center md:border-b-2 rounded-2xl shadow-lg md:tracking-wide"
        >
          EXPERIENCE
          <MotionIcon // <--- Use the motion-wrapped icon
            initial={{ rotateZ: -360 }}
            whileInView={{ rotateZ: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            icon={faHistory}
            className="mx-2 md:text-4xl text-white **inline-block**"
          />
        </motion.h1>
        <div className=" mt-6 p-4 py-1 md:mx-0 mx-5 border rounded-xl ">
          <span className="text-white text-xl md:text-2xl mt-3 block md:mx-24 rounded-2xl font-semibold  text-center   ">
            Team Lead — Wipro (Pune)
            <FontAwesomeIcon icon={faBuilding} />
            <p className="text-slate-200 text-lg mt-1">Nov 2025 – Present</p>
          </span>
          <ul className="gap-3 flex flex-col mt-4 list-disc md:mx-10 mx-1 font-semibold md:text-lg text-white tracking-wide my-3">
            <motion.li
              initial={{ x: -300 }}
              whileInView={{ x: 0 }}
              transition={{ duration: 1, ease: easeInOut }}
            >
              Lead a 10+ member team handling incidents, service requests, and
              user support across enterprise environments.
            </motion.li>
            <motion.li
              initial={{ x: 300 }}
              whileInView={{ x: 0 }}
              transition={{ duration: 1, ease: easeInOut }}
            >
              Own end-to-end ServiceNow workflow, ensuring SLA compliance and
              smooth daily operations.
            </motion.li>
            <motion.li
              initial={{ x: -300 }}
              whileInView={{ x: 0 }}
              transition={{ duration: 1, ease: easeInOut }}
            >
              Conduct technical reviews, assign tickets, and coach team members
              to improve troubleshooting efficiency.
            </motion.li>
            <motion.li
              initial={{ x: 300 }}
              whileInView={{ x: 0 }}
              transition={{ duration: 1, ease: easeInOut }}
            >
              Partner with cross-functional teams to resolve high-priority
              incidents with minimal downtime.
            </motion.li>
            <motion.li
              initial={{ x: -300 }}
              whileInView={{ x: 0 }}
              transition={{ duration: 1, ease: easeInOut }}
            >
              Drive process improvements to reduce response time and improve
              customer satisfaction scores.
            </motion.li>
            <motion.li
              initial={{ x: 300 }}
              whileInView={{ x: 0 }}
              transition={{ duration: 1, ease: easeInOut }}
            >
              Supporting continuous learning by mentoring associates on IT
              infrastructure, OS troubleshooting, domain management, and best
              practices.
            </motion.li>
          </ul>
        </div>
        <div className=" mt-6 p-4 py-1 md:mx-0 mx-5 border rounded-xl">
          <span className="text-white md:text-2xl mt-3 block md:mx-24 rounded-2xl text-center font-semibold">
            Specialist (Citibank Project) — Wipro
            <FontAwesomeIcon icon={faBuilding} />
            <p className="text-lg text-slate-100 mt-1">Oct 2021 – Oct 2025</p>
          </span>
          <ul
            className="gap-3 flex flex-col mt-4 list-disc mx-1 md:mx-10 font-semibold md:text-lg text-white tracking-wide my-3"
            data-aos="fade"
          >
            <motion.li
              initial={{ x: -300 }}
              whileInView={{ x: 0 }}
              transition={{ duration: 1, ease: easeInOut }}
            >
              Managed incident and service requests through portal, email, and
              telephonic support.
            </motion.li>
            <motion.li
              initial={{ x: 300 }}
              whileInView={{ x: 0 }}
              transition={{ duration: 1, ease: easeInOut }}
            >
              Prioritized issues based on impact & urgency, achieving consistent
              SLA success.
            </motion.li>
            <motion.li
              initial={{ x: -300 }}
              whileInView={{ x: 0 }}
              transition={{ duration: 1, ease: easeInOut }}
            >
              Performed customer profile migrations, ensuring seamless domain
              transitions with full data and tool retention.
            </motion.li>
            <motion.li
              initial={{ x: 300 }}
              whileInView={{ x: 0 }}
              transition={{ duration: 1, ease: easeInOut }}
            >
              Worked extensively with ServiceNow, MS Teams, Outlook, Active
              Directory, Windows OS, Office 365, and enterprise IT tools.
            </motion.li>
            <motion.li
              initial={{ x: -300 }}
              whileInView={{ x: 0 }}
              transition={{ duration: 1, ease: easeInOut }}
            >
              Driving process improvements to enhance service quality, reduce
              response time, and increase customer satisfaction.
            </motion.li>
            <motion.li
              initial={{ x: 300 }}
              whileInView={{ x: 0 }}
              transition={{ duration: 1, ease: easeInOut }}
            >
              Contributed to knowledge-base documentation and improved
              operational workflows.
            </motion.li>
          </ul>
        </div>
      </div>
      <div
        data-aos="fade"
        className=" mt-20 flex items-center  justify-center flex-col "
      >
        <motion.h1
          initial={{ y: 200, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: easeInOut }}
          className=" text-3xl md:text-4xl text-center font-bold text-white tracking-wide md:w-96 items-center shadow-lg border-b-2 rounded-xl "
        >
          EDUCATION
          <MotionIcon
            initial={{ rotateY: -360 }}
            whileInView={{ rotateY: 0 }}
            transition={{ duration: 2, ease: easeInOut }}
            icon={faBookOpenReader}
          />
        </motion.h1>
        <div className=" mt-10 md:mx-0 border text-center  mx-4 md:w-2/4 rounded-xl p-2">
          <div className="border-b-2">
            <p className="text-white font-bold text-xl mx-4 ">
              BITS Pilani — M.Tech, Computer Systems & Infrastructure
            </p>
            <p className="text-gray-100 mt-1 mx-4 font-semibold">
              Mar 2022 – Dec 2025
            </p>
            <p className="mt-2 mx-4 text-gray-200 ">
              <span className=" text-lg font-bold">Coursework :</span>
              <span className="font-medium">
                <Typewriter
                  options={{
                    strings: [
                      "Linux, Docker, Web Technologies, AWS, Kubernetes, Jenkins, Cloud Computing",
                    ],
                    autoStart: true,
                    loop: false,
                    delay: 20,
                    deleteSpeed: 9999,
                  }}
                />
              </span>
            </p>
          </div>
          <p className="text-white font-bold mt-5 mx-4 text-xl">
            CSJM University — BCA{" "}
            <span className="text-base font-medium">
              {" "}
              (June 2018 – Apr 2021)
            </span>
          </p>
        </div>
      </div>
        <Touch/>
   
    

      <br />
    
    </div>
  );
};

export default About;
