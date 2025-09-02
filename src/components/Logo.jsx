import { Link } from "react-router-dom";
import logo from "../asstes/imges/logo.png";

function Logo() {
  return (
    <Link to="/" className="border-0 bg-transparent flex items-center gap-0">
      <img src={logo} alt="logo" className="w-16 lg:w-20 h-16 lg:h-20 mt-2.5 lg:mt-5" />
      <span className="font-semibold text-gold text-3xl lg:text-5xl">
        زبان پلاس
      </span>
    </Link>
  );
}

export default Logo;
