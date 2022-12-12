import React from "react";
import { motion } from "framer-motion";

type Props = {};

function About({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative h-screen overflow-hidden text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>
      <motion.img
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        src="https://avatars.githubusercontent.com/u/9935007?v=4"
        alt="nauman tanwir"
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[450px] xl:h-[550px] relative top-16"
      />
      <div className="space-y-10 px-0 md:px-10 relative top-16">
        <h4 className="text-4xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-[#f7ab0a]">little</span>{" "}
          background
        </h4>
        <p className="text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam iure,
          voluptate distinctio impedit doloremque excepturi consequatur
          voluptatibus quam maiores, officiis placeat dolorem corporis at dolor
          consectetur eveniet? Quisquam, tempora maiores. Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Ullam iure, voluptate distinctio
          impedit doloremque excepturi consequatur voluptatibus quam maiores,
          officiis placeat dolorem corporis at dolor consectetur eveniet?
          Quisquam, tempora maiores. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Ullam iure, voluptate distinctio impedit doloremque
          excepturi consequatur voluptatibus quam maiores, officiis placeat
          dolorem corporis at dolor consectetur eveniet? Quisquam, tempora
          maiores. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Ullam iure, voluptate distinctio impedit doloremque excepturi
          consequatur voluptatibus quam maiores, officiis placeat dolorem
          corporis at dolor consectetur eveniet? Quisquam, tempora maiores.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam iure,
          voluptate distinctio impedit doloremque excepturi consequatur
          voluptatibus quam maiores, officiis placeat dolorem corporis at dolor
          consectetur eveniet? Quisquam, tempora maiores. Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Ullam iure, voluptate distinctio
          impedit doloremque excepturi consequatur voluptatibus quam maiores,
          officiis placeat dolorem corporis at dolor consectetur eveniet?
          Quisquam, tempora maiores.
        </p>
      </div>
    </motion.div>
  );
}

export default About;
