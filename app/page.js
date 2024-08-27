import React from "react";
import Navbar from "./_components/Navbar";
import Main from "./_components/Main";
import Sub from "./_components/Sub";
import SignUpNow from "./_components/SignUpNow";
import Footer from "./_components/Footer";
export default function page() {
  return (
    <>
      <div className="md:px-12 px-4 py-4 ">
        <Navbar />
        <Main />
      </div>
      <Sub />
      <SignUpNow />
      <Footer />
    </>
  );
}
