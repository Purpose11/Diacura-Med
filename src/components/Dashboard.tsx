import dashboard from "../assets/images/dashboard.svg";
const Dashboard = () => {
  return (
    <section>
      <div className="bg-[#094063] px-[2.19rem] py-[4.38rem] lg:pt-[5.31rem] lg:pb-[9.06rem] lg:pr-[8.25rem] lg:pl-[9.94rem] flex flex-col items-center gap-[3.5rem] lg:gap-[6rem] text-center mt-[120px]">
        <div className="text-white">
          <h2 className="text-[1.5rem] font-bold leading-normal mb-[1.88rem] lg:text-[3rem] lg:font-extrabold">
            Our Dashboard
          </h2>
          <p className="max-w-[56.75rem] text-base font-semibold leading-normal lg:text-[1.5rem] lg:font-normal">
            We offer in-depth healthcare to individuals of all kinds suffering
            from Diabetes via diagnosis, treatment prescriptions, follow-up and
            even health education
          </p>
        </div>
        <div>
          <img
            src={dashboard}
            alt="Dashboard"
            className="h-[783px] w-[1101px]"
          />
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
