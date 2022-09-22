import React from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="grid grid-cols-2 px-2 py-5 lg:grid-cols-2 bg-[#647E68] text-[#ECDBBA]">
      <div className="m-2">
        <h1 className="font-bold text-center">About:</h1>
        <p className="text-center">
          This is a web app that uses React Hooks, TailwindCSS, framer-motion
          for the animations. and themealDB for the api database.{" "}
        </p>
      </div>
      <div className="m-2">
        <h1 className="font-bold text-center pb-3">Contact:</h1>
        <Link
          to="https://www.linkedin.com/in/ryan-milligan-18815820b/"
          className="flex justify-center pb-5"
        >
          <h2 className="px-2">LinkedIn:</h2>
          <BsLinkedin size={30} />
        </Link>
        <Link
          to="https://github.com/rmilligan006"
          className="flex justify-center"
        >
          <h2 className="px-3">GitHub:</h2>
          <BsGithub size={30} />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
