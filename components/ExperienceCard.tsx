import React from "react";
import { motion } from "framer-motion";

type Props = {};

function ExperienceCard({}: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[450px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden relative top-20">
      <motion.img
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        src="#"
        alt="work experience"
        className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] obejct-cover obejct-center "
      />
      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">job title</h4>
        <p className="font-bold text">company name</p>
        <div className="flex space-x-2 my-2">
          <img className="h-10 w-10 rounded-full" src="#" alt="tech used" />
          <img className="h-10 w-10 rounded-full" src="#" alt="tech used" />
          <img className="h-10 w-10 rounded-full" src="#" alt="tech used" />
          <img className="h-10 w-10 rounded-full" src="#" alt="tech used" />
        </div>
        <p className="uppercase py-5 text-gray-300">
          {" "}
          started with... - Ended..
        </p>

        {/* <ul className="list-disc space-y-4 ml-5 text-lg">
          <li>summary points</li>
          <li>summary points</li>
          <li>summary points</li>
          <li>summary points</li>
        </ul> */}
      </div>
    </article>
  );
}

export default ExperienceCard;
