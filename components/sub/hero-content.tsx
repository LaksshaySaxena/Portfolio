"use client";

import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Image from "next/image";

import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/lib/motion";

export const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">
            Full-Stack Developer & AI-ML Enthusiast
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-4xl md:text-5xl font-bold text-white max-w-[600px]"
        >
          <span>
            Building{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              scalable
            </span>{" "}
            <br />
            Full-Stack Solutions.
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-5 max-w-[650px]"
        >
          I&apos;m Lakshay Saxena, a Full-Stack Developer specializing in MERN
          Stack applications and Machine Learning solutions. I build scalable
          web applications, data-driven systems, and modern user experiences.
        </motion.p>

        <motion.div
          variants={slideInFromLeft(1)}
          className="flex gap-4"
        >
          <a
            href="#projects"
            className="py-3 px-6 button-primary text-center text-white cursor-pointer rounded-lg"
          >
            View Projects
          </a>

          <a
            href="/Lakshay-Saxena-Resume.pdf"
            target="_blank"
            className="py-3 px-6 border border-purple-500 text-white rounded-lg hover:bg-purple-500/10 hover:shadow-[0_0_20px_rgba(112,66,248,0.3)] transition-all"
          >
            Resume
          </a>
        </motion.div>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center"
      >
        <Image
          src="/hero-bg.svg"
          alt="work icons"
          height={650}
          width={650}
          draggable={false}
          className="select-none"
        />
      </motion.div>
    </motion.div>
  );
};