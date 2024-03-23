import React from "react";
import Image from "next/image";
import food1 from "@/public/images/pizza.jpg";
import food2 from "@/public/images/chicken-wrap.jpg";
import food3 from "@/public/images/fruit-parfe.jpg";
import food4 from "@/public/images/rice-bowl.jpg";
import style from "../components/scrollbar.module.css";

const DashMenuItems = () => {
  return (
    <div
      className={`-mx-5 flex h-max max-w-[100vw] items-center gap-x-5 overflow-x-scroll whitespace-nowrap px-5 md:mx-0 md:px-0 ${style.scrollbar}`}
    >
      <Image
        priority
        src={food1}
        className="w-[200px] h-[200px] rounded-[10px]"
        alt="food image"
      />
      <Image
        priority
        src={food2}
        className="w-[200px] h-[200px] rounded-[10px]"
        alt="food image"
      />
      <Image
        priority
        src={food3}
        className="w-[200px] h-[200px] rounded-[10px]"
        alt="food image"
      />
      <Image
        priority
        src={food4}
        className="w-[200px] h-[200px] rounded-[10px]"
        alt="food image"
      />
    </div>
  );
};

export default DashMenuItems;
