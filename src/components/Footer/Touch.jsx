import {
  faGithub,
  faLinkedin,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import toast from "react-hot-toast";
import { motion } from "framer-motion";

const Touch = () => {
  const copy = async () => {
    await navigator.clipboard.writeText("+91 8318561189");
    toast.success("Phone No. Copied! 😊");
  };
  return (
    <>

    <div>
      <div className=" mt-16 bg-transparent rounded-md p-3">
        <div className="flex justify-center">
          <h1 className="text-slate-100 tracking-wider rounded-lg font-semibold border-b-2 w-2/5 text-center text-2xl ">
            Let's Work Together
          </h1>
        </div>
        <div>
          <ul className="flex mt-10 md:flex-row md:gap-0 gap-1 justify-evenly items-center  ">
            <motion.li
              whileHover={{
                scale: 1.1,
              }}
              className="rounded-xl text-center tracking-widest  text-white p-3 hover:text-white hover:bg-red-700  border border-white/20
          bg-white/10
          shadow-lg
          backdrop-blur-xl"
            >
              <a href="mailto:pranjalrathore9838@gmail.com" target="blank">
                <FontAwesomeIcon className=" text-4xl" icon={faEnvelope} />
              </a>
            </motion.li>
            <motion.li
              whileHover={{ scale: 1.1 }}
              className=" rounded-xl text-center tracking-widest  border border-white/20
          bg-white/10
          shadow-lg
          backdrop-blur-xl text-white p-3 hover:bg-blue-900"
            >
              <a
                href="https://www.linkedin.com/in/pranjul-rathour-259645204"
                target="blank"
              >
                {" "}
                <FontAwesomeIcon
                  className="text-white text-4xl"
                  icon={faLinkedin}
                />
              </a>
            </motion.li>
            <motion.li
              whileHover={{ scale: 1.1 }}
              onClick={copy}
              className="rounded-xl text-center tracking-widest  border border-white/20
          bg-white/10
          shadow-lg
          backdrop-blur-xl text-white p-3 hover:bg-green-500"
            >
              <FontAwesomeIcon
                className="text-white text-4xl"
                icon={faWhatsapp}
              />
            </motion.li>

            <motion.li
              whileHover={{ scale: 1.1 }}
              className=" rounded-xl text-center tracking-widest  border border-white/20
          bg-white/10
          shadow-lg
          backdrop-blur-xl  text-white p-3 hover:bg-black"
            >
              <a href="https://github.com/pranjulrathour0916" target="blank">
                {" "}
                <FontAwesomeIcon
                  className="text-white text-4xl"
                  icon={faGithub}
                />
              </a>
            </motion.li>
            <motion.li
              whileHover={{ scale: 1.1 }}
              className=" rounded-xl text-center tracking-widest  border border-white/20
          bg-white/10
          shadow-lg
          backdrop-blur-xl text-white p-3 hover:bg-white hover:text-black "
            >
              <a
                href="/Pranjul_Rathour_Resume-2.pdf"
                download="Pranjul_Rathour_Resume-2.pdf"
              >
                <FontAwesomeIcon className=" text-4xl" icon={faFile} />
              </a>
            </motion.li>
          </ul>
        </div>
      </div>
    </div>
      </>
  );
};

export default Touch;
