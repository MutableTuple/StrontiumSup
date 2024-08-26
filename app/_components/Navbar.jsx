import React from "react";
import Logo from "./Logo";

export default function Navbar() {
  return (
    <div className="w-full z-50 border-b fixed top-0 left-0 right-0 bg-white/70 z-50 backdrop-blur-sm px-6">
      <ul className="flex gap-6 justify-between items-center font-semibold text-stone-700 p-4">
        <Logo />
        <li className="hover:text-stone-950 cursor-pointer text-xs">
          Privacy policy
        </li>
      </ul>
    </div>
  );
}
