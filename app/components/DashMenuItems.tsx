"use client";

import React from "react";
import Image from "next/image";
import style from "../components/scrollbar.module.css";
import { MenuItem } from "../models/menu-item";

interface Props {
  menuItems: MenuItem[];
}

const DashMenuItems = ({ menuItems }: Props) => {
  return (
    <div
      className={`-mx-5 flex h-max max-w-[100vw] border-y-2 border-y-ironOrange items-center gap-x-5 bg-gradient-to-tr from-black via-plumPurple to-xmasCandy py-5 overflow-x-scroll whitespace-nowrap px-5 md:mx-0 md:px-0 ${style.scrollbar}`}
    >
      {menuItems.map((item) => (
        <Image
          priority
          src={item.img}
          className="w-[200px] border border-flameOrange h-[200px] rounded-[10px]"
          alt="food image"
        />
      ))}
    </div>
  );
};

export default DashMenuItems;
