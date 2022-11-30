import Image from "next/image";
import Link from "next/link";
import React, { Fragment, useState } from "react";
import Logo from "../public/assets/img/reserka-logo.svg";
import { BsThreeDotsVertical, BsSearch, BsPerson } from "react-icons/bs";
import { BiChevronDown } from "react-icons/bi";
import { Menu, Transition } from "@headlessui/react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

function className(...classes) {
  return classes.filter(Boolean).join("");
}

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="top-0 absolute z-50 w-full flex flex-wrap py-3">
      <div className="container w-screen xl:mx-[120px] lg:mx-[64px] md:mx-[42px] mx-[20px] flex flex-wrap justify-between">
        <div className="w-fit relative flex justify-between self-center lg:w-auto lg:justify-start">
          <Link href="/">
            <Image src={Logo} width="100" height="50" />
          </Link>
        </div>
        <div className="hidden lg:flex items-center">
          <ul className="flex flex-row justify-evenly gap-8 items-center">
            <li className="">
              <Link href="/">Sponsors</Link>
            </li>
            <li className="flex flex-row items-center">
              <Link href="/">Clinical Trials</Link>
              <BiChevronDown />
            </li>
            <li>
              <Link href="/">Abot Us</Link>
            </li>
            <li>
              <Link href="/">Team</Link>
            </li>
            <li>
              <Link href="/">FAQ</Link>
            </li>
            <li>
              <Link href="/">Contact</Link>
            </li>
            <li>
              <button className="p-3 px-6 pt-2 text-white bg-black">
                <Link href="/">Apply For Clinical Trial</Link>
              </button>
            </li>
          </ul>
        </div>
        {/* Hamburger Menu */}
        <div
          onClick={handleNav}
          className="block lg:hidden z-10 cursor-pointer"
        >
          {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
        </div>

        {/* Mobile Menu */}
        <div
          className={
            nav
              ? "lg:hidden fixed top-0 left-0 w-full h-screen bg-white flex justify-center items-center ease-in duration-300"
              : "lg:hidden fixed top-[-100%] left-0 w-full h-screen bg-white flex justify-center items-center ease-in duration-300"
          }
        >
          <ul className="text-center">
            <li
              onClick={() => setNav(false)}
              className="p-4 text-3xl font-bold"
            >
              <Link href="/#sponsors">Sponsors</Link>
            </li>
            <li
              onClick={() => setNav(false)}
              className="p-4 text-3xl font-bold"
            >
              <Link href="/#trials">Clinical Trials</Link>
            </li>
            <li
              onClick={() => setNav(false)}
              className="p-4 text-3xl font-bold"
            >
              <Link href="/#about-us">About Us</Link>
            </li>
            <li
              onClick={() => setNav(false)}
              className="p-4 text-3xl font-bold"
            >
              <Link href="/#team">Team</Link>
            </li>
            <li
              onClick={() => setNav(false)}
              className="p-4 text-3xl font-bold"
            >
              <Link href="/#FAQ">FAQ</Link>
            </li>
            <li
              onClick={() => setNav(false)}
              className="p-4 text-3xl font-bold"
            >
              <Link href="/#contact">Contact</Link>
            </li>
            <li
              onClick={() => setNav(false)}
              className="p-3 px-6 pt-2 text-white bg-black"
            >
              <Link href="/account">Apply For Clinical Trial</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
