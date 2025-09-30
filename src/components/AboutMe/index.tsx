"use client";
import { motion } from "framer-motion";
import ReusableH2 from "../ReusableH2";
import ProfileFlipImage from "../ProfileFlipImage";

const AboutMe = () => {
  return (
    <motion.section
      className="relative flex flex-col-reverse md:flex-row justify-center items-center
                 bg-gradient-to-br from-[#1a3c61] via-[#466995] to-[#1a6c6d]
                 px-6 md:px-10 lg:px-10 py-12 md:py-10 text-amber-50 overflow-hidden"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <motion.div
        className="absolute -top-20 -left-20 w-72 h-72 bg-[#218380] opacity-30 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-96 h-96 bg-[#fbbf24] opacity-20 rounded-full blur-3xl"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute top-1/3 right-10 w-48 h-48 bg-[#9c27b0] opacity-20 rounded-full blur-3xl"
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      <motion.div
        className="relative z-10 w-full md:w-[50%] text-center md:text-left mt-10 md:mt-0"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <ReusableH2 title="Andrew Julius Kalumba" />

        <div className="relative inline-block mt-4">
          <h3 className="text-xl md:text-2xl font-bold">
            Frontend || Fullstack Developer
          </h3>
          <span className="absolute -bottom-2 left-1/2 md:left-0 transform -translate-x-1/2 md:translate-x-0 w-20 h-[3px] bg-amber-400 rounded-full" />
        </div>

        <p className="mt-6 text-sm md:text-base leading-relaxed max-w-lg mx-auto md:mx-0">
          I specialize in crafting exceptional digital experiences with a focus on
          performance, accessibility, and delightful user interactions. Turning modern
          designs into high-quality, scalable products is my passion.
        </p>

        <motion.a
          href="#projects"
          whileHover={{ scale: 1.08, rotate: -1 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block mt-8 px-8 py-3 bg-[#218380] rounded-3xl uppercase
                     font-semibold tracking-wide shadow-lg hover:bg-[#1a6c6d] transition-all duration-300"
        >
          See My Work
        </motion.a>
      </motion.div>

      <motion.div
        className="relative z-10 w-full md:w-[40%] flex justify-center"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <ProfileFlipImage />
      </motion.div>
    </motion.section>
  );
};

export default AboutMe;
