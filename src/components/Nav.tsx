import Med from "../assets/images/Med.svg";
import logo from "../assets/images/logo.svg";
import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <nav className="h-[56px] w-[78%] mx-auto flex items-center justify-between mt-[35px]">
      <div className="flex items-center gap-2">
        <img src={Med} alt="Med-Logo" className="h-" />
        <img src={logo} alt="logo" className="h-6" />
      </div>
      <div className="flex items-center gap-[67px]">
        <div className="flex items-center gap-[18px] text-base font-extrabold font-sans text-[#666666]">
          <Link to="/">Home</Link>
          <Link to="/" className="uppercase">
            faq
          </Link>
          <Link to="/" className="capitalize">
            contact us
          </Link>
        </div>
        <Link
          to="/login"
          className=" capitalize w-[131px] h-[56px] rounded text-white bg-primary flex items-center justify-center text-[20px] font-bold"
        >
          login
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
