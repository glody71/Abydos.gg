import React from "react";
import { FaGithub } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiVite } from "react-icons/si";
import { IoPersonSharp } from "react-icons/io5";

const Footer = () => {
  return (
    <div className="mt-24 w-full bg-slate-900 flex flex-col md:flex-row items-center justify-center md:justify-end gap-8 p-4 text-gray-400">
      <div className="flex flex-col md:items-start items-center">
        <h1 className="mb-4">Developer SNS</h1>
        <div className="flex gap-2 ">
          <a href="https://github.com/glody71">
            <FaGithub className="text-4xl" />
          </a>
          <a href="">
            <IoPersonSharp className="text-4xl"/>
          </a>
        </div>
      </div>
      <p>|</p>
      <div className="flex flex-col md:items-start items-center">
        <h1 className="mb-4">Made With:</h1>
        <div className="flex gap-2">
          <a href="">
            <SiVite className="text-4xl" />
          </a>
          <a href="">
            <RiTailwindCssFill className="text-4xl" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
