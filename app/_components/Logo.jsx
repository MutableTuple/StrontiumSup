import React from "react";

export default function Logo() {
  return (
    <div className="relative border-b border-black ">
      <h1 className="font-bold text-black">
        Strontiu<span className="bg-black px-0.5 text-white">m</span>
      </h1>
      <span className="absolute left-0 bottom-4 scale-110">&#8227;</span>
    </div>
  );
}
