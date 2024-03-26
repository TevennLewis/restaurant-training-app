import React from "react";
import { MenuItem } from "../models/menu-item";
import Image from "next/image";

interface Props {
  menuItemDetails: MenuItem;
}

const MenuDetailsCard = ({ menuItemDetails }: Props) => {
  return (
    <div className="relative">
      <Image
        src={menuItemDetails.img}
        className="rounded-t-[10px] mt-4"
        priority
        alt="menu item"
      />

      <div className="absolute top-6 text-black p-2 right-2 bg-flameOrange rounded-[5px]">
        ${menuItemDetails.price}
      </div>

      <div className="w-full bg-black text-xs font-light rounded-b-[10px] flex items-start p-5">
        <ul className="flex flex-col">
          <div className="text-base font-semibold underline">Ingredients</div>
          {menuItemDetails.ingredients.map((ingredient) => (
            <li key={ingredient} className="list-item list-disc list-inside">
              {ingredient}
            </li>
          ))}
        </ul>
        <div className="flex-1" />
        <ul className="flex flex-col">
          <div className="text-base font-semibold underline">Allergies</div>
          {menuItemDetails.allergies.map((allergy) => (
            <li key={allergy} className="list-item list-disc list-inside">
              {allergy}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MenuDetailsCard;
