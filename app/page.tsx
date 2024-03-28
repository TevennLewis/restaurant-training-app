import Image from "next/image";
import logo from "@/public/images/logo-bare.png";
import LoginRegisterForm from "./components/LoginRegisterForm";

export default function Home() {
  return (
    <main className="flex min-h-screen bg-gradient-to-b from-black via-plumPurple to-xmasCandy flex-col items-center">
      <div className="text-3xl pt-10 font-semibold text-flameOrange">
        <Image
          className="w-[250px] h-[45px]"
          quality={100}
          src={logo}
          alt="logo"
          priority
        />
      </div>

      <div className="flex flex-col flex-1 justify-center">
        <div className="flex flex-col ">
          <div className=" text-flameOrange text-xl mb-4 font-medium">
            Register
          </div>

          <LoginRegisterForm />
        </div>
      </div>
    </main>
  );
}
