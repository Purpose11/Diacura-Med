import doctor3 from "../assets/images/doctor3.svg";
import background4 from "../assets/images/background4.svg";
import paginate from "../assets/images/paginate.svg";
import chevronLeft from "../assets/images/chevronLeft.svg";
import chevronRight from "../assets/images/chevronRight.svg";
const OurDoctors = () => {
  return (
    <div className=" w-full relative">
      <h2 className="text-[48px] leading-[65.37px] font-bold text-center pt-[126px]">
        Our Doctors
      </h2>
      <img src={background4} className="absolute left-0 top-[70%] z-0" />
      <div className="w-[80%] mx-auto border border-[#999999] rounded-[14px] flex items-center gap-[54px] mt-[89px] h-[431px] z-10">
        <img
          src={doctor3}
          alt="doctor"
          className="h-[431px] w-[488px] rounded-l-[14px] z-10"
        />
        <div className="w-[589px] h-[355px]">
          <h4 className="text-[#232323] text-[1.125rem] lg:text-[1.5rem] font-bold leading-normal mb-[0.5rem] lg:mb-[0.88rem]">
            Counsellor
          </h4>
          <h3 className="text-[#232323] text-[1.5rem] lg:text-[2.25rem] font-bold leading-normal mb-[1.5rem]">
            Dr. Michael Jons
          </h3>
          <p className="text-[#666] text-base lg:text-[1.25rem] font-semibold lg:font-normal leading-normal mb-[2.25rem] lg:mb-[2.5rem]">
            Provide expert advice on medical and healthcare issues to
            individuals, organizations, or healthcare facilities. Evaluate and
            suggest improvements to enhance the quality and efficiency of
            healthcare services.
          </p>
          <button className="lg:flex items-center hover:bg-[#9353e5] lg:justify-center lg:mx-0 flex justify-center mx-auto bg-[#107BC0] w-[9.0625rem] md:w-[12.25rem] h-[2.5rem] md:h-[3.5rem] py-[0.75rem] md:py-[1.12rem] text-white text-[0.875rem] md:text-[1.25rem] font-bold leading-normal rounded-[0.25rem]">
            Learn more
          </button>
        </div>
      </div>
      <div className="h-[40px] w-full  mt-[60px] relative">
        <div className="w-[40%] h-[40px]  absolute right-[10%] bottom-0 flex items-center justify-between">
          <img src={paginate} className="h-[20px]" />

          <div className="flex items-center gap-[1.12rem]">
            <button className="bg-[#062D45] w-[40px] h-[40px] rounded-full flex items-center justify-center">
              <img src={chevronLeft} alt="left" className="w-[24px] h-[24px]" />
            </button>
            <button className="bg-[#062D45] w-[40px] h-[40px] rounded-full flex items-center justify-center">
              <img
                src={chevronRight}
                alt="right"
                className="w-[24px] h-[24px]"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurDoctors;
