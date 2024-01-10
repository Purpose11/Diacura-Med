import background3 from "../assets/images/background3.svg";
import diet from "../assets/images/diet.svg";
const Diet = () => {
  return (
    <div className="w-full relative h-fit mt-[220px]">
      <img src={background3} className="absolute right-0 top-[50%] z-0" />
      <div className="h-[510px] w-[85%] mx-auto flex items-center justify-between z-10">
        <div className="w-[483px]">
          <h2 className="text-[48px] leading-[65.37px] font-extrabold capitalize">
            Diet plans
          </h2>
          <p className="text-[24px] leading-[32.68px] text-[#232323] mt-[54px]">
            Tailor your diabetes journey with personalized diet plans on our
            app. Access curated, diabetes-friendly recipes, and nutritional tips
            to help you make informed choices for a healthier lifestyle.
          </p>
          <button className="w-[180px] h-[56px] rounded flex items-center justify-center bg-primary text-white text-[20px] font-bold mt-[58px]">
            Learn more
          </button>
        </div>
        <img src={diet} className="h-[501px] w-[584px] rounded-2xl z-10" />
      </div>
    </div>
  );
};

export default Diet;
