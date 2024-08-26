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
    <div className="grid grid-cols-8 h-dvh">
      <div className="h-full col-start-1 col-end-4 flex flex-col justify-center gap-8 relative">
        <div className="mb-24">
          <h1 className="text-xs">INTRODUCING</h1>
          <br />
          <h1 className="text-7xl font-black ">Strontium for</h1>
          <AnimatePresence>
            <motion.h1
              key={currentRole}
              className="text-7xl font-bold absolute"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <TypingText text={currentRole} />
            </motion.h1>
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
      <div className="h-full col-start-5 col-end-9 flex flex-col justify-center items-center ">
        <MobileScreen />
      </div>
    </div>
  );
}
