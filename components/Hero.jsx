import React from "react";
import Image from "next/image";
import { global } from "styled-jsx/css";
import bgGradient from "../public/assets/img/Gradient-BG-Warm.jpg";

const Hero = ({ heading, message }) => {
  return (
    <div className="relative h-[90vh] bg-heroCold">
      <div className="container absolute z-10 inset-x-0 bottom-0 mb-36 xxl:pl-44 xl:pl-24 lg:pl-14 md:pl-10 px-6">
        <h1 className="xxl:w-[1000px] xl:w-[840px] lg:w-[680px] md:w-[650px] w-full xxl:text-[100px] xl:text-[80px] lg:text-[64px] md:text-[64px] text-5xl leading-[130%]">
          {heading}
        </h1>
        <p className="md:text-xl text-base xxl:w-[580px] xl:w-[400px] lg:w-[430px] md:w-[430px] w-full">
          {message}
        </p>
      </div>
    </div>
  );
};

export default Hero;
