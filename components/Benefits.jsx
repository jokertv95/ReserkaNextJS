import Image from "next/image";
import React from "react";
import circle from "../public/assets/img/circles.png";

const Benefits = () => {
  return (
    <div className="mt-[200px]">
      <div className="container xxl:pl-14 xl:pl-24 lg:pl-14 md:pl-10 md:mx-3 mx-6 relative">
        <div className="flex lg:flex-row flex-col md:gap-32 lg:mx-6 mb-5">
          <div>
            <Image
              className="md:w-[180px] md:h-[240px] w-[72px] h-[72px]"
              src={circle}
              alt="/"
            />
          </div>
          <div className="xxl:w-[460px] xl:w-[460px] lg:w-[430px] md:w-[460px] w-[320px] mb-6">
            <p className="uppercase text-base">Benefits</p>
            <h3 className="text-5xl">
              Reserka helps you get the care you need
            </h3>
          </div>
        </div>
        <div className="flex flex-col gap-10 xxl:pl-72 xl:pl-[315px] lg:mt-14 md:mt-14 lg:px-6 w-fit">
          <div className="flex flex-col-reverse gap-10">
            <div className="bg-lightblue hover:bg-backgroundImage xxl:w-[590px] xl:w-[460px] lg:w-[420px] md:w-[360px] w-[330px] h-fit cursor-pointer">
              <div className="lg:p-10 md:p-6">
                <h4 className="xxl:text-5xl xl:text-4xl lg:text-4xl md:text-[28px] text-2xl leading-[140%]">
                  Transportation and complex medical care
                </h4>
                <p className="mt-8 text-xl leading-[160%]">
                  We provide transportation to the clinic for all patients who
                  participate in our studies.
                </p>
              </div>
            </div>
            <div className="bg-lightpurple cursor-pointer xxl:w-[510px] xl:w-[450px] lg:w-[400px] md:w-[360px] w-[330px] h-fit xxl:top-0 xxl:right-[300px] xl:top-[0px] xl:right-[50px] lg:top-[350px] lg:right-0 md:top-[430px] md:right-0 md:absolute">
              <div className="lg:p-10 md:p-6">
                <h4 className="xxl:text-5xl xl:text-4xl lg:text-4xl md:text-[28px] text-2xl leading-[140%]">
                  Expert medical staff
                </h4>
                <p className="mt-8 text-xl leading-[160%]">
                  Our dedicated and highly skilled team will take care of you
                  from the first minutes you spend in our clinic.
                </p>
                <p className="mt-8 text-xl leading-[160%]">
                  For your comfort, expertly-trained medical staff will make
                  sure you are thoroughly informed about the entire treatment
                  process.
                </p>
              </div>
            </div>
            <div className="bg-lightgreen cursor-pointer xxl:w-[510px] xl:w-[460px] lg:w-[420px] md:w-[360px] w-[330px] h-fit xxl:ml-40 xl:ml-30 lg:ml-[80px] sm:bottom-0">
              <div className="lg:p-10 md:p-6">
                <h4 className="xxl:text-5xl xl:text-4xl lg:text-4xl md:text-[28px] text-2xl leading-[140%]">
                  State-of-the-art facility
                </h4>
                <p className="mt-8 text-xl leading-[160%]">
                  You will feel safe and comfortable in our newly built
                  facility.
                </p>
                <p className="mt-8 text-xl leading-[160%]">
                  We not only took care of the best equipment and accessibility
                  but also the welcoming atmosphere of our interiors.
                </p>
              </div>
            </div>
            <div className="bg-red-300 cursor-pointer xxl:w-[510px] xl:w-[460px] lg:w-[400px] md:w-[360px] w-[330px] h-fit md:absolute xxl:top-[500px] xxl:right-[150px] xl:top-[550px] xxl:left-[1200px] xl:left-[1000px] lg:top-[800px] lg:left-[600px] md:left-[410px] md:bottom-0 relative">
              <div className="lg:p-10 md:p-6">
                <h4 className="xxl:text-5xl xl:text-4xl lg:text-4xl md:text-[28px] text-2xl leading-[140%]">
                  Financial compensation
                </h4>
                <p className="mt-8 text-xl leading-[160%]">
                  We value patients' time that's why we grant compensation for
                  participation in the study.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
