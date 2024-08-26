import React from "react";
import Logo from "./Logo";
import { FaLinkedinIn } from "react-icons/fa";
import { GrProductHunt } from "react-icons/gr";
import Link from "next/link";
export default function Footer() {
  return (
    <div className="w-full p-8 flex justify-between border-t">
      <Logo />
      <div className="flex gap-4">
        <Link href={"/"}>
          <FaLinkedinIn />
        </Link>
        <Link href={"/"}>
          <GrProductHunt />
        </Link>
      </div>
    </div>
  );
}
