import { Link } from "react-router-dom";
import doctor from "../assets/images/doctor.png";
import Ellipse from "../assets/images/Ellipse.svg";

const Hero = () => {
  return (
    <div className="h-[557px] w-[85%] mx-auto mt-[85px] flex items-center justify-between">
      <div className="w-[516px]">
        <h3 className=" text-[20px] font-extrabold text-[#547C92] leading-[27.24px] ">
          Welcome onboard
        </h3>
        <h1 className="text-[#062D45] text-[40px] font-extrabold leading-[54.47px] mt-[18px]">
          Get Expert Medical Help With Diabetes From Us
        </h1>
        <p className="text-[#868686] text-[20px] leading-[27.24px] tracking-[0.1px] mt-[27px]">
          Welcome to DiaCura-Med, redefining diabetes management. Discover
          personalized solutions, expert guidance, and a supportive community.
          Take control with intuitive tools. Your wellness starts here.
        </p>
        <Link
          to="/login"
          className=" capitalize w-[179px] h-[56px] bg-primary text-white rounded flex items-center justify-center text-[20px] font-bold leading-[27.24px] mt-[90px]"
        >
          get started
        </Link>
      </div>
      <div className=" w-[633px] h-[557px] relative">
        <div className="w-[235px] h-[240px] rounded-2xl border border-[#666666] absolute top-0 z-0 right-[305px]"></div>
        <div className="w-[237px] h-[222px] rounded-2xl bg-[#094063] absolute bottom-0 right-0"></div>
        <img
          src={doctor}
          alt="doctor and patient"
          className=" z-10 h-[499px] w-[493px] rounded-[18px] absolute top-[25px] right-[25px]"
        />
        <div className="w-[287px] h-[79px] rounded-lg  z-50 absolute bottom-[51px]  left-0 bg-white flex justify-center flex-col gap-[6px] pl-[10px] shadow-lg">
          <div className="flex items-center gap-2">
            <img
              src={Ellipse}
              alt="Ellipse"
              className=" h-[21px] flex-shrink-0"
            />
            <p className="text-base">Expert Doctors</p>
          </div>
          <div className="flex items-center gap-2">
            <img
              src={Ellipse}
              alt="Ellipse"
              className=" h-[21px] flex-shrink-0"
            />
            <p className="text-base">24/7 Healthcare Provision</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
