import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

type Props = {};

function Projects({}: Props) {
  const projects = [1, 2, 3, 4];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl  ">
        Projects
      </h3>
      <div className="relative top-12 w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/80">
        {projects.map((project, i) => (
          <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20  md:p-44">
            <motion.img
              initial={{
                y: -300,
                opacity: 0,
              }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              src="https://www.upwork.com/att/download/portfolio/persons/uid/424325210366525440/profile/projects/files/69b4b00e-4131-4f33-bbdd-fbce51521014"
              alt="project"
              className=" w-96 h-80"
            />

            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="text-4xl font-semibold text-center">
                <span className="underline decoration-[#f7ab0a]/50 ">
                  Case Study {i + 1} of {projects.length}:
                </span>
                Covid Tracker
              </h4>

              <p className="tex-lg text-center md:text-left">
                It's a web app that is built using real-time data which is
                flowing through a bunch of APIs. Users can sort through
                different countries from the select dropdown option and they
                also drag the Map and click on a country to check out it't covid
                stats in real-time.
              </p>
              <div className="flex justify-center">
                <Link href="https://github.com" target="_blank">
                  <button className="heroButton uppercase underline  decoration-[#f7ab0a]/50 text-lg">
                    Github
                  </button>
                </Link>
                <Link href="" target="_blank">
                  <button className="heroButton uppercase  underline  decoration-[#f7ab0a]/50 text-lg">
                    Live version
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full absolute top-[30%] bg-[#f7ab0a]/10 left-0 h-[500px] -skew-y-12"></div>
    </motion.div>
  );
}

export default Projects;
