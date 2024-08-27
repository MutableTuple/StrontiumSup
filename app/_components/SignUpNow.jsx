import React from "react";
import Form from "./Form";

export default function SignUpNow() {
  return (
    <div className="flex flex-col p-8 justify-center items-center gap-8 ">
      <h1 className="uppercase text-xl text-center">
        What are you waiting for? when you can signup now!
      </h1>
      <div className="md:w-2/4 w-full flex justify-center">
        <Form />
      </div>
    </div>
  );
}
