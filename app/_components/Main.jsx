"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Form from "./Form";
import MobileScreen from "./MobileScreen";

const TypingText = ({ text }) => {
  const [displayedText, setDisplayedText] = useState("");
  const typingSpeed = 100; // milliseconds

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText(text.substring(0, index + 1));
      index += 1;
      if (index >= text.length) {
        clearInterval(interval);
      }
    }, typingSpeed);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [text]);

  return <span>{displayedText}</span>;
};

export default function Main() {
  const [currentRole, setCurrentRole] = useState("<Developers>");

  useEffect(() => {
    const roles = [
      "<Developers>",
      "<Students>",
      "<Entrepreneurs>",
      "<Professionals>",
    ];
    let index = 0;

    const intervalId = setInterval(() => {
      index = (index + 1) % roles.length;
      setCurrentRole(roles[index]);
    }, 5000); // Change text every 5 seconds

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);

  return (
    <div className="grid grid-cols-8 h-dvh text-center grid-rows-2 md:text-start md:grid-rows-1 ">
      <div className="h-full col-start-1 col-end-9 md:col-end-4  flex flex-col justify-center items-center md:items-start gap-8 relative">
        <div className="md:mb-24 md:mt-0 mt-48 mb-8 md:text-start text-center ">
          <h1 className="text-xs">INTRODUCING</h1>
          <br />
          <h1 className="text-4xl font-black md:text-5xl lg:text-7xl ">
            Strontium for
          </h1>
          <AnimatePresence>
            <div className="md:text-start text-center">
              <motion.h1
                key={currentRole}
                className="text-4xl font-black md:text-5xl lg:text-7xl  font-bold absolute "
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                <TypingText text={currentRole} />
              </motion.h1>
            </div>
          </AnimatePresence>
        </div>
        <h3 className="">
          🎉Launching on <strong>September 16th 2024.</strong>{" "}
        </h3>
        <p>
          The Premier Social Network for <strong>Developers</strong>,{" "}
          <strong>Students</strong>, and <strong>Entrepreneurs</strong>.
        </p>
        <Form />
      </div>
      <div className="h-[900px] md:col-start-5 md:col-end-9 flex flex-col justify-center items-center md:row-start-1 row-start-2 col-start-1 col-end-9  md:-mt-28 -mt-0 ">
        <MobileScreen />
      </div>
    </div>
  );
}
