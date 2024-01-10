import background from "../assets/images/background.svg";
import doctor1 from "../assets/images/doctor1.svg";

const Counselling = () => {
  return (
    <div className="w-full h-fit relative">
      <img
        src={background}
        className="absolute top-[-250px] right-0 h-[523.95px] z-0"
      />
      <div className="w-[85%] h-[518px] mx-auto mt-[100px] z-10 flex items-center justify-between">
        <div className="w-[487px] ">
          <h2 className=" font-bold text-[48px] leading-[65.37px] capitalize">
            Counselling Services
          </h2>
          <p className="text-[24px] leading-[32.68px] mt-[59px] text-[#232323]">
            Detailed counseling on prescribed medications, including dosage
            instructions, potential side effects, and the importance of
            adherence to the prescribed treatment plan.
          </p>
          <button className="w-[180px] h-[56px] rounded flex items-center justify-center bg-primary text-white text-[20px] font-bold mt-[53px]">
            Learn more
          </button>
        </div>
        <img
          src={doctor1}
          alt="doctor-1"
          className="h-[518px] w-[595px] rounded-2xl z-10"
        />
      </div>
    </div>
  );
};

export default Counselling;
