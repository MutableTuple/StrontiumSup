import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { motion } from "framer-motion";
import MasonryQuotes from "./MasonryQuotes";

export default function MobileScreen() {
  return (
    <motion.div
      className="md:h-[640px] h-[560px] md:mt-24  w-96  rounded-t-md overflow-scroll outline-stone-100 border-2 shadow-ext p-2 mobile-frame md:w-[390px] w-[320px] no-scrollbar "
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.div
        className="flex flex-col gap-8 bg-white justify-between items-center border-b mt-4 rounded-t-md"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
      >
        <div className="flex gap-4 items-center">
          <motion.img
            className="sm:h-20 sm:w-20 h-16 w-16  rounded-full outline outline-4 outline-offset-4 outline-stone-800 object-cover"
            src="https://raw.githubusercontent.com/MutableTuple/fm_images/main/brunch.png"
            alt="user screen"
            whileHover={{ scale: 1.1, rotate: 2 }}
            transition={{ type: "spring", stiffness: 200 }}
          />
          <motion.div
            className="flex flex-col justify-around"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <h1 className="font-bold sm:text-md text-sm flex gap-2 items-center">
              StrontiumCo. <FaCheckCircle />
              <span className="bg-gradient-to-r from-slate-300 via-gray-400 to-gray-500 px-2 py-1 text-xs rounded-md text-white">
                metallic
              </span>
            </h1>
            <p className="text-xs mb-2 text-start">
              The platform where time is valued—no mindless scrolling through
              meaningless reels!
            </p>
            <div className="flex gap-2 text-xs">
              <motion.button
                className="border-2  border-black px-1 py-.5"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                SUBSCRIBE
              </motion.button>
              <motion.button
                className="w-fit text-xs sm:text-md font-medium px-1 py-1 hover:bg-black text-white bg-black border-stone-950 border-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                FOLLOW
              </motion.button>
            </div>
          </motion.div>
        </div>
        <motion.div
          className="flex gap-8 justify-between px-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5, ease: "easeOut" }}
        >
          <div className="text-center">
            <h1 className="font-bold md:text-lg">100,906</h1>
            <p className="md:text-sm text-xs">Followers</p>
          </div>
          <div className="text-center">
            <h1 className="font-bold md:text-lg">3,147</h1>
            <p className="md:text-sm text-xs">Following</p>
          </div>
          <div className="text-center">
            <h1 className="font-bold md:text-lg">2</h1>
            <p className="md:text-sm text-xs">SUBSCRIBERS</p>
          </div>
        </motion.div>
      </motion.div>
      <MasonryQuotes />
    </motion.div>
  );
}
