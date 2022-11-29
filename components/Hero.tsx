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
        alt=""
      />
      <h2 className=" text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
        Software Engineer
      </h2>
      <h1 className="text-5xl lg:text-6xl font-semibold scroll-px-10 px-10 ">
        <span className="mr-3">{text}</span>
        <Cursor cursorColor="#F7AB0A" />
      </h1>

      <div>
        <button>About</button>
        <button>Experience</button>
        <button>Skills</button>
        <button>Projects</button>
      </div>
    </div>
  );
}

export default Hero;
