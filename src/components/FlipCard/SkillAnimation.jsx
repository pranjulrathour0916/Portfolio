import {  motion } from "framer-motion";
import { useRef } from "react";

const SkillAnimation = ({ item }) => {
  const Constraintref = useRef(null);
  return (
    <div ref={Constraintref} >
      <div className=" md:mx-10 border-b-2 p-1 rounded-full  ">
        <div className=" md:md:py-2 py-1">
          <motion.div
            
            className="card"
          >
            <ul className="flex flex-row justify-evenly items-center md:mx-28 text-black">
              {item.map((item, index) => {
                return (
                  <motion.li
                   
                    className="p-3 bg-white font-semibold rounded-full "
                    key={index}
                  >
                    <span className="text-black">
                      {item}
                    </span>{" "}
                  </motion.li>
                );
              })}
            </ul>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default SkillAnimation;
