
import { faGithub, faLinkedin, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import toast, { Toaster } from 'react-hot-toast';

const Touch = () => {
    const copy = async () => {

        await navigator.clipboard.writeText("+91 8318561189")
        toast.success('Phone No. Copied! 😊')
    
    }
  return (
    <div>
      <div className=" mt-16 bg-transparent rounded-md p-3">
        <div>
          <ul className="flex md:flex-row md:gap-0 gap-1 justify-evenly items-center  ">
           <li className="border rounded-xl text-center tracking-widest bg-transparent text-white p-3 hover:text-white hover:bg-red-700">
             <a href="mailto:pranjalrathore9838@gmail.com" target="blank"><FontAwesomeIcon className=" text-4xl" icon={faEnvelope} /></a> 
            </li>
            <li className="border rounded-xl text-center tracking-widest bg-transparent text-white p-3 hover:bg-blue-900">
             <a href="https://www.linkedin.com/in/pranjul-rathour-259645204" target="blank"> <FontAwesomeIcon className="text-white text-4xl" icon={faLinkedin} /></a>
            </li>
            <li onClick={copy} className="border rounded-xl text-center tracking-widest bg-transparent text-white p-3 hover:bg-green-500">
              <FontAwesomeIcon className="text-white text-4xl" icon={faWhatsapp} />
            <Toaster/>
            </li>
        
            <li className="border rounded-xl text-center tracking-widest bg-transparent text-white p-3 hover:bg-black">
             <a href="https://github.com/pranjulrathour0916" target="blank"> <FontAwesomeIcon className="text-white text-4xl" icon={faGithub} /></a>
            </li>
            <li className="border rounded-xl text-center tracking-widest bg-transparent text-white p-3 hover:bg-white hover:text-black">
              <a href="/Pranjul_Rathour_Resume.pdf" download="Pranjul_Rathour_Resume.pdf"><FontAwesomeIcon className=" text-4xl" icon={faFile} /></a>
            </li>
        
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Touch;
