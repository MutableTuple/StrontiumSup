import React from "react";
import { singUpUser } from "../_lib/actions";
import { MdSend } from "react-icons/md";
export default function Form() {
  return (
    <form action={singUpUser} className="w-3/4 flex flex-col lg:flex-row gap-2">
      <input
        type="email"
        name="email_input"
        required
        className="border-2 border-black px-2 py-3 focus:outline-none w-full"
        placeholder="Enter your email you check regularly!"
      />
      <button
        type="submit"
        className="bg-black text-white  lg:px-1 px-2 lg:py-0 py-4 flex items-center gap-2 md:text-md text-xs justify-center"
      >
        Register <MdSend size={20} />
      </button>
    </form>
  );
}
