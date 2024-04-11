import { AiOutlineLoading3Quarters } from "react-icons/ai";
import "./Preloader.css";

const Preloader = () => {
  return (
    <div className="preloader">
      <AiOutlineLoading3Quarters className="preloader__loading" />
    </div>
  );
};

export default Preloader;
