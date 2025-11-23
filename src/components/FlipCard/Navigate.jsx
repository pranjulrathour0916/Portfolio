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
        className="btn mt-20 flex gap-5 md:gap-24 md:justify-end md:mr-32 justify-center text-white"
      >
        <button
          className="mt-2 bg-transparent border-2 border-lime-400 text-lime-400 p-1 rounded-md font-semibold ml-4 hover:bg-lime-400 hover:text-blue-950"
          onClick={() => navigate("/about")}
        >
          About
          <FontAwesomeIcon icon={faAddressCard} className="mx-2 text-xl" />
        </button>
        <button
          className="mt-2 bg-transparent border-2 border-lime-400 text-lime-400 p-1 rounded-md font-semibold ml-4 hover:bg-lime-400 hover:text-blue-950"
          onClick={() => navigate("/skills")}
        >
          Skiils
          <FontAwesomeIcon icon={faLightbulb} className="mx-2 text-xl" />
        </button>
       
      </div>
    </div>
  );
};

export default Navigate;
