import React from "react";
import { FaSquareGithub } from "react-icons/fa6";
import { MdRestaurantMenu } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="flex bg-black text-xs p-5 text-flameOrange border-t-2 border-t-flameOrange items-center w-full">
      <div className="flex flex-col">
        <div className="font-semibold text-base">Developed by:</div>

        <div className="flex gap-x-1 items-center">
          <div>Courtney Kakabeen</div>

          <span>
            <FaSquareGithub size={15} fill="#FB8B24" />
          </span>
        </div>

        <div className="flex gap-x-1 items-center">
          <div>Tevenn Lewis</div>

          <span>
            <FaSquareGithub size={15} fill="#FB8B24" />
          </span>
        </div>
      </div>

      <div className="flex-1" />

      <MdRestaurantMenu fill="#FB8B24" size={40} />
    </footer>
  );
};

export default Footer;
