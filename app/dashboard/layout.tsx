import React, { ReactNode } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

interface Props {
  children: ReactNode;
}

const layout = ({ children }: Props) => {
  return (
    <>
      <NavBar />
      <main className="flex min-h-screen text-flameOrange bg-gradient-to-b from-plumPurple via-plumPurple to-xmasCandy flex-col">
        {children}
      </main>
      <Footer />
    </>
  );
};

export default layout;
