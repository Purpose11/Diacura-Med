import background2 from "../assets/images/background2.svg";
import doctor2 from "../assets/images/doctor2.svg";
const Health = () => {
  return (
    <div className="w-full h-fit relative  mt-[200px]">
      <img
        src={background2}
        className="absolute top-[80px] left-0 h-[523.95px] z-0"
      />
      <div className="w-[85%] h-[479px] mx-auto flex items-center justify-between z-10">
        <img src={doctor2} className="z-10 h-[479px] w-[588px]" />
        <div className="h-[459px] w-[483px]">
          <h2 className="text-[48px] leading-[65.37px] font-bold">
            Health Education
          </h2>
          <p className="text-[24px] leading-[32.68px] mt-[54px] text-[#232323]">
            Empower yourself with our app's Health Education. Access articles
            for insights on diabetes management, nutrition, and lifestyle. Your
            wellness journey starts with knowledge at your fingertips.
          </p>
          <button className="w-[180px] h-[56px] rounded flex items-center justify-center bg-primary text-white text-[20px] font-bold mt-[86px]">
            Learn more
          </button>
        </div>
      </div>
    </div>
  );
};

export default Health;
