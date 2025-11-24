import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressCard } from "@fortawesome/free-solid-svg-icons";
import { faLightbulb } from "@fortawesome/free-solid-svg-icons/faLightbulb";
import { useNavigate } from "react-router-dom";
const Navigate = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div
        data-aos="fade-up"
        className="btn mt-20 flex gap-5 md:gap-24 md:justify-end justify-center text-white mr-4 md:mr-24"
      >
        <button
          className="mt-2 bg-transparent border-2 border-lime-400 text-lime-400 p-1 rounded-md font-semibold ml-4 hover:bg-lime-400 hover:text-blue-950"
          onClick={() => navigate("/about")}
        >
         More About Me...
          <FontAwesomeIcon icon={faAddressCard} className="mx-2 text-xl" />
        </button>
        <button
          className="mt-2 bg-transparent border-2 border-lime-400 text-lime-400 p-1 rounded-md font-semibold ml-4 hover:bg-lime-400 hover:text-blue-950"
          onClick={() => navigate("/skills")}
        >
          Skiils/Projects
          <FontAwesomeIcon icon={faLightbulb} className="mx-2 text-xl" />
        </button>
       
      </div>
    </div>
  );
};

export default Navigate;
