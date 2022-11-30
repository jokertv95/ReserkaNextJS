import Link from "next/link";
import React from "react";

const Study = () => {
  return (
    <div className="mt-[200px] relative">
      <div className="container xxl:pl-44 xl:pl-24 lg:pl-14 md:pl-10 px-6 overflow-hidden">
        <div>
          <div className="xxl:w-[620px] xl:w-[620px] lg:w-[470px] md:w-[470px] w-[350px]">
            <h2 className="xxl:w-[620px] xl:w-[580px] lg:w-[465px] md:w-[465px] w-[320px] xxl:text-[64px] xl:text-[64px] lg:text-5xl md:text-5xl text-4xl md:leading-[130%] leading-[140%] mb-4">
              Find the right clinical study for you
            </h2>
            <p className="xxl:text-xl xl:text-xl lg:text-xl md:text-xl text-base leading-[32px] mb-6">
              See our ongoing trials. Our qualified specialists will assist you
              in every step of the study.
            </p>
          </div>
          <div className="flex flex-row justify-between">
            <div className="md:inline-block p-3 px-6 pt-2 text-white bg-black baseline">
              <Link href="/">Browse all studies</Link>
            </div>
            <div>
              <button></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Study;
