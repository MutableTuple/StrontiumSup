import React from "react";
import Form from "./Form";

export default function SignUpNow() {
  return (
    <div className="flex flex-col p-8 justify-center items-center gap-8">
      <h1 className="uppercase">
        What are you waiting for? when you can signup now!
      </h1>
      <Form />
    </div>
  );
}
