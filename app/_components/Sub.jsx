import React from "react";
import { FaCheck } from "react-icons/fa";
export default function Sub() {
  return (
    <div className="bg-black z-10 relative p-8">
      <div className="text-white flex ">
        <div>
          <h1 className="mb-4 font-bold border-b w-full uppercase">
            WHY JOIN?
          </h1>

          <ul className="flex flex-col gap-4">
            <li className="flex items-center gap-4">
              <FaCheck color="#00a60b" /> A network dedicated to fostering
              growth and intelligence, counteracting the negative effects of
              endless scrolling{" "}
            </li>{" "}
            <li className="flex items-center gap-4">
              <FaCheck color="#00a60b" /> A community focused on breaking the
              cycle of superficial content consumption{" "}
            </li>{" "}
            <li className="flex items-center gap-4">
              <FaCheck color="#00a60b" /> A platform designed to harness
              technology for meaningful personal and professional connections{" "}
            </li>{" "}
            <li className="flex items-center gap-4">
              <FaCheck color="#00a60b" /> A space where developers, students,
              founders, and entrepreneurs exchange valuable knowledge and
              resources{" "}
            </li>{" "}
            <li className="flex items-center gap-4">
              <FaCheck color="#00a60b" /> A forum for collaboration, innovation,
              and tangible growth beyond fleeting social media trends{" "}
            </li>{" "}
            <li className="flex items-center gap-4">
              <FaCheck color="#00a60b" /> A network for engaging with
              like-minded individuals who are committed to making a real impact{" "}
            </li>{" "}
            <li className="flex items-center gap-4">
              <FaCheck color="#00a60b" /> A supportive environment where
              learning, sharing, and succeeding together are prioritized{" "}
            </li>{" "}
            <li className="flex items-center gap-4">
              <FaCheck color="#00a60b" /> A community that values creativity,
              curiosity, and continuous improvement, standing in contrast to
              passive content consumption{" "}
            </li>{" "}
            <li className="flex items-center gap-4">
              <FaCheck color="#00a60b" /> A hub for connecting with mentors,
              peers, and potential partners in a meaningful way{" "}
            </li>{" "}
            <li className="flex items-center gap-4">
              <FaCheck color="#00a60b" /> A place where collaborative efforts
              turn innovative ideas into reality, avoiding the pitfalls of
              mindless browsing{" "}
            </li>{" "}
            <li className="flex items-center gap-4">
              <FaCheck color="#00a60b" /> A platform dedicated to advancing
              personal and professional growth, distinct from the distractions
              of social media{" "}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
