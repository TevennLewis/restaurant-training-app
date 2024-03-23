import React from "react";
import Image from "next/image";
import LoginRegisterForm from "../components/LoginRegisterForm";
import logo from "@/public/images/logo.png";

const LoginPage = () => {
  return (
    <main className="flex min-h-screen bg-gradient-to-b from-plumPurple via-plumPurple to-xmasCandy flex-col items-center">
      <div className="text-3xl pt-10 font-semibold text-flameOrange">
        <Image
          className="w-[250px] h-[45px]"
          quality={75}
          src={logo}
          alt="logo"
          priority
        />
      </div>

      <div className="flex flex-col flex-1 justify-center">
        <div className="flex flex-col ">
          <div className=" text-flameOrange text-xl mb-4 font-medium">
            Login
          </div>

          <LoginRegisterForm />
        </div>
      </div>
    </main>
  );
};

export default LoginPage;
