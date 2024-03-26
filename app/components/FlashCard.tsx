"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { MenuItem } from "../models/menu-item";

interface Props {
  menuItem: MenuItem;
  allFlip: boolean;
}

const FlashCard = ({ menuItem, allFlip }: Props) => {
  const [flipped, setFlipped] = useState(false);
  const hasInitialized = useRef(false);

  useEffect(() => {
    if (!hasInitialized.current && allFlip) {
      return;
    } else {
      setFlipped(true);
    }
  }, [allFlip]);

  return (
    <div
      className="group h-[300px] ring ring-flameOrange rounded-[10px] w-[300px] [perspective:1000px]"
      onClick={() => setFlipped(!flipped)}
    >
      <div
        className={`relative h-full w-full rounded-[10px] shadow-xl ${
          flipped && "[transform:rotateY(180deg)]"
        } [transform-style:preserve-3d] transition-all duration-200`}
      >
        <div className="absolute inset-0">
          <Image
            src={menuItem.img}
            priority
            alt="food"
            className="h-full w-full rounded-[10px] object-cover shadow-xl shadow-black/40"
          />
        </div>
        <div
          className={`absolute inset-0 h-full w-full rounded-[10px] bg-black  text-flameOrange ${
            !flipped && "[transform:rotateY(180deg)] "
          }[backface-visibility:hidden]`}
        >
          <div className="flex text-xs p-5 flex-col [transform:rotateY(180deg)]  gap-y-4 ">
            <ul className="flex flex-col">
              <div className="text-base font-semibold underline">
                Ingredients
              </div>
              {menuItem.ingredients.map((ingredient) => (
                <li
                  key={ingredient}
                  className="list-item list-disc list-inside"
                >
                  {ingredient}
                </li>
              ))}
            </ul>

            <ul className="flex text-xs flex-col">
              <div className="text-base font-semibold underline">Allergies</div>
              {menuItem.allergies.map((allergy) => (
                <li key={allergy} className="list-item list-disc list-inside">
                  {allergy}
                </li>
              ))}
            </ul>

            <div className="text-2xl absolute top-5 right-5 font-semibold">
              ${menuItem.price}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlashCard;
