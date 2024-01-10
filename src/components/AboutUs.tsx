import medicalAssistance from "../assets/images/medicalAssistance.svg";
import stars from "../assets/images/stars.svg";
import lock from "../assets/images/lock.svg";
import thumbup from "../assets/images/thumbup.svg";

const data = [
  {
    id: 1,
    icon: medicalAssistance,
    value: "1k+",
    heading: "Experienced Doctors",
    subheading: "Highly Qualified",
  },
  {
    id: 2,
    icon: stars,
    value: "79.65%",
    heading: "Positive Reviews",
    subheading: "From our patients",
  },
  {
    id: 3,
    icon: lock,
    value: "100%",
    heading: "user security",
    subheading: "for all user informations",
  },
  {
    id: 4,
    icon: thumbup,
    value: "5.3k+",
    heading: "Treated",
    subheading: "Number Of Patients",
  },
];

const AboutUs = () => {
  return (
    <div className="w-full h-[642px] bg-[#094063] mt-[130px] flex flex-col items-center justify-around z-10">
      <h1 className=" font-extrabold text-[36px] leading-[49.03px] text-center text-white">
        Why should you trust us ? <br /> Get to know about us
      </h1>
      <div className="flex items-center  mx-auto gap-8">
        {data.map((item) => {
          return (
            <div
              key={item.id}
              className=" w-[254px] h-[286px] bg-white rounded-3xl flex flex-col items-center justify-center gap-5 z-10"
            >
              <div className="bg-[#CFE5F2] flex items-center justify-center w-[81px] h-[81px] rounded-full">
                <img src={item.icon} className="h-[32px]" />
              </div>
              <div className="flex flex-col items-center justify-center gap-[2px]">
                {" "}
                <h1 className=" text-[32px] font-extrabold text-[#062D45] leading-normal">
                  {item.value}
                </h1>
                <h2 className="text-[20px] font-bold text-[#062D45] leading-normal capitalize">
                  {item.heading}
                </h2>
                <p className="text-[16px] leading-normal text-[#062D45] capitalize">
                  {item.subheading}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AboutUs;
