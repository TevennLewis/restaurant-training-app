import React from "react";
import { MenuItem } from "../models/menu-item";
import Image from "next/image";
import Link from "next/link";

interface Props {
  menuItem: MenuItem;
}

const MenuItemCard = ({ menuItem }: Props) => {
  return (
    <Link
      href={`/menu/${menuItem.id}`}
      className="w-full ring-[2px] ring-xmasCandy max-w-[335px] rounded-[10px] bg-black"
    >
      <Image
        className="object-cover border-b-2 border-b-xmasCandy rounded-t-[10px] object-center"
        src={menuItem.img}
        alt="menu item"
      />

      <div className="flex flex-col bg-gradient-to-r from-ironOrange to-flameOrange text-black text-sm rounded-b-[10px] p-3">
        <div className="font-semibold">{menuItem.name}</div>
        <div className="text-xs">${menuItem.price}</div>
      </div>
    </Link>
  );
};

export default MenuItemCard;
