"use client";

import React, { useState } from "react";
import Confetti from "react-confetti";
import { singUpUser } from "../_lib/actions";
import { MdSend } from "react-icons/md";
import { useWindowSize } from "react-use";

export default function Form() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [buttonText, setButtonText] = useState("Register");
  const { width, height } = useWindowSize(); // Get viewport dimensions

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    // Call your signup function
    await singUpUser(formData);

    // Show confetti after submission
    setIsSubmitted(true);
    setButtonText("You're In!");

    // Optionally, you can reset the form or perform other actions here
    event.target.reset();

    // Hide confetti and reset button text after some time
    setTimeout(() => {
      setIsSubmitted(false);
      setButtonText("Register");
    }, 3000); // Confetti and button text reset after 3 seconds
  };

  return (
    <>
      {isSubmitted && <Confetti width={width} height={height} />}
      <form
        onSubmit={handleSubmit}
        className="w-3/4 flex flex-col lg:flex-row gap-2"
      >
        <input
          type="email"
          name="email_input"
          required
          className="border-2 border-black px-2 py-3 focus:outline-none w-full"
          placeholder="Enter your email you check regularly!"
        />
        <button
          type="submit"
          className={`${
            isSubmitted ? "bg-green-500" : "bg-black"
          } text-white lg:px-1 px-2 lg:py-0 py-4 flex items-center gap-2 md:text-md text-xs justify-center`}
        >
          {buttonText} <MdSend size={20} />
        </button>
      </form>
    </>
  );
}
