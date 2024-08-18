import React from "react";
import logo from "../assets/f-logo.png";
import bg from "../assets/f-bg.png";
import insta from "../assets/instagram.svg";
import linkenin from "../assets/linkedin.svg";
import thread from "../assets/thread.svg";
import fb from "../assets/fb.svg";
import TextAnimation from "./ui/TextAnimation";
import "../css/TextAnimation.css";

const Footer = () => {
  return (
    <>
      <footer
        className=" text-white px-8 md:px-[6rem] lg:px-[9rem] pt-16 md:pt-24 lg:pt-24   bg-no-repeat bg-cover pb-24"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="font-[400] text-[3rem] sm:text-[5rem] md:text-[6rem] leading-[0.74] pb-16 sm:pb-18 md:pb-16">
          Let’s have a <TextAnimation firstText="chat!" secondText="chat!" />
        </div>

        <hr className="pb-16" />

        <div className="container mx-auto  m-0">
          <div className="flex flex-wrap justify-between">
            <div className="w-full md:w-[37%] mb-8">
              <img
                src={logo}
                alt="Leadtime Advertising LLC"
                className="max-w-full mb-8 w-[13.143rem]"
              />
              <p className="font-normal text-base leading-7 tracking-[0.07rem] text-[#FFFFFFCC] pr-[6rem]">
                Guiding you through the nuances of emotional sales, transform
                your professional goals into achievements with expert ease and
                insight.
              </p>
            </div>
            <div className="w-full md:w-[18%] mb-8">
              <h3 className="font-medium text-[1.5rem] leading-8 tracking-[0.15rem] mb-8">
                Quick Links
              </h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#home"
                    className="font-normal text-base leading-7 tracking-[0.07rem] text-[#FFFFFFCC]"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#chooseus"
                    className="font-normal text-base leading-7 tracking-[0.07rem] text-[#FFFFFFCC]"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="font-normal text-base leading-7 tracking-[0.07rem] text-[#FFFFFFCC]"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="#footer"
                    className="font-normal text-base leading-7 tracking-[0.07rem] text-[#FFFFFFCC]"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
            <div className="w-full md:w-[18%] md:pl-4 mb-8">
              <h3 className="font-medium text-[1.5rem] leading-8 tracking-[0.15rem] mb-8">
                Contact Us
              </h3>
              <p className="mb-2 font-normal text-base leading-7 tracking-[0.07rem] text-[#FFFFFFCC]">
                +91 9645013281
              </p>
              <p className="mb-2 font-normal text-base leading-7 tracking-[0.07rem] text-[#FFFFFFCC]">
                +91 8654200154
              </p>
              <p className="font-normal text-base leading-7 tracking-[0.07rem] text-[#FFFFFFCC]">
                Leadtime@gmail.com
              </p>
            </div>
            <div className="w-full md:w-[27%] mb-8 md:pl-[6rem]">
              <h3 className="font-medium text-[1.5rem] leading-8 tracking-[0.15rem] mb-8">
                Social Media
              </h3>
              <div className="flex space-x-4">
                <a
                  href="/"
                  className="w-[50px] h-[43px] rounded-full flex items-center justify-center"
                  style={{ border: "1px solid #FFFFFF99" }}
                >
                  <img
                    src={insta}
                    alt=""
                    className="w-full h-full  rounded-full max-w-[50%]"
                  />
                </a>
                <a
                  href="/"
                  className="w-[50px] h-[43px] rounded-full flex items-center justify-center"
                  style={{ border: "1px solid #FFFFFF99" }}
                >
                  <img
                    src={linkenin}
                    alt=""
                    className="w-full h-full  rounded-full max-w-[50%]"
                  />
                </a>
                <a
                  href="/"
                  className="w-[50px] h-[43px] rounded-full flex items-center justify-center"
                  style={{ border: "1px solid #FFFFFF99" }}
                >
                  <img
                    src={thread}
                    alt=""
                    className="w-full h-full  rounded-full max-w-[50%]"
                  />
                </a>
                <a
                  href="/"
                  className="w-[50px] h-[43px] rounded-full flex items-center justify-center"
                  style={{ border: "1px solid #FFFFFF99" }}
                >
                  <img
                    src={fb}
                    alt=""
                    className="w-full h-full  rounded-full max-w-[60%]"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div
        className="text-center text-white p-6 bg-[#222220] font-medium text-base leading-7 tracking-[0.15rem]"
        style={{ fontFamily: "NeueHaasDisplayLight" }}
      >
        {" "}
        <p>&copy; 2024 All Right Reserved | Powered by procube.cx</p>
      </div>
    </>
  );
};

export default Footer;
