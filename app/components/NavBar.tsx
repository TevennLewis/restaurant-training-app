import Image from "next/image";
import React from "react";
import logo from "@/public/images/logo-bare.png";
import { MdRestaurantMenu } from "react-icons/md";
import MobileMenu from "./MobileMenu";
import Link from "next/link";

const NavBar = () => {
  return (
    <nav className="flex bg-black border-b-2 border-b-ironOrange items-center p-5">
      <Link href="/dashboard">
        <Image src={logo} alt="logo" height={50} width={100} />
      </Link>

      <div className="flex-1" />

      <MobileMenu />
    </nav>
  );
};

export default NavBar;
