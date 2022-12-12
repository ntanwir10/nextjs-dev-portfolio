import Link from "next/link";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";

type Props = {};

function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      "Hi, The name's Nauman Tanwir",
      "Guy-who-loves-Coffee.tsx",
      "<ButLovesToCodeMore/>",
    ],
    loop: true,
    delaySpeed: 1500,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <img
        className="relative rounded-full h-32 w-32 mx-auto object-cover"
        src="https://media-exp1.licdn.com/dms/image/C4D03AQGfcdOtdLnX5Q/profile-displayphoto-shrink_400_400/0/1634994556174?e=1675296000&v=beta&t=MshBYUVSJoB70VO1vugUOFGM0BId5pFpInS8Sw8r-C0"
        alt="nauman tanwir"
      />
      <div className="z-20">
        <h2 className=" text-sm uppercase text-gray-500 pb-2 tracking-[10px]">
          Software Engineer
        </h2>
        <h1 className="text-5xl lg:text-6xl font-semibold scroll-px-10 px-10 ">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>

        <div className="pt-5">
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>
          <Link href="#experience">
            <button className="heroButton">Experience</button>
          </Link>
          <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton">Projects</button>
          </Link>
        </div>
        <div className="pt-5">
          <Link
            href="https://acrobat.adobe.com/link/track?uri=urn:aaid:scds:US:07ba5866-3d3b-38cd-836c-1f8ea21c94ba"
            target="_blank"
          >
            <h4 className="text-sm font-semibold">
              <span className=" decoration-[#f7ab0a] underline uppercase text-gray-500">
                Download CV
              </span>
            </h4>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
